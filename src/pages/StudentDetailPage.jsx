import { useParams } from "react-router-dom";
import { useStudentDetail } from "../hooks/useStudentDetail";
import { useSnacks } from "../hooks/useSnacks";

const StudentDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useStudentDetail(id);
  const { data: snacks } = useSnacks();

  if (isLoading) {
    return <p className="text-center mt-10">Loading student details...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      
      {/* Student Info Card */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="text-gray-600">Referral: {data.referralCode}</p>
        <p className="mt-2 font-semibold">
          Total Spent: ₹{data.totalSpent}
        </p>
      </div>

      {/* Orders Section */}
      <h2 className="text-xl font-bold mb-3">Orders</h2>

      {data.orders?.length === 0 ? (
        <p className="text-gray-500 text-center">
          No orders yet 🍔
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {data.orders?.map((order) => {
            const snackName =
              snacks?.find((s) => s.id === order.snackId)?.name ||
              "Unknown";

            return (
              <div
                key={order.id}
                className="p-4 bg-white shadow rounded-xl hover:shadow-md transition"
              >
                <p className="font-semibold">{snackName}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {order.quantity}
                </p>
                <p className="text-sm">
                  Total: ₹{order.total}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StudentDetailPage;