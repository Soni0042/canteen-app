import { useForm } from "react-hook-form";
import { createOrder } from "../../api/orderApi";
import toast from "react-hot-toast";
import { updateStudent } from "../../api/studentApi";
import { updateSnack } from "../../api/snackApi";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const OrderForm = ({ snack, students, onClose }) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const quantity = Number(data.quantity);

      const orderData = {
        snackId: snack.id,
        studentId:data.studentId  ,
        quantity,
        total: snack.price * quantity,
      };

      // 1️⃣ Create Order
      await createOrder(orderData);

      // 2️⃣ Update Snack
      await updateSnack(snack.id, {
        ordersCount: snack.ordersCount + quantity,
      });

      // 3️⃣ Update Student
      const selectedStudent = students.find(
  (s) => String(s.id) === String(data.studentId)
       );

      if (selectedStudent) {
        await updateStudent(selectedStudent.id, {
          totalSpent: selectedStudent.totalSpent + orderData.total,
        });
      }

      // ✅ Refresh UI (VERY IMPORTANT 🔥)
      queryClient.invalidateQueries(["snacks"]);
      queryClient.invalidateQueries(["students"]);

      toast.success("Order placed successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-lg font-bold mb-4">
          Order {snack.name}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          
          {/* Student Select */}
          <select {...register("studentId", { required: true })}>
  <option value="">Select Student</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          {/* Quantity */}
          <input
            type="number"
            min="1"
            max="5"
            {...register("quantity", { required: true })}
            className="border p-2 rounded"
            placeholder="Quantity (1-5)"
          />

          {/* Submit */}
          <button
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            {loading ? "Placing..." : "Place Order"}
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={onClose}
            className="text-red-500 hover:underline"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;