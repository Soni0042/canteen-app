import { useForm } from "react-hook-form";
import { createStudent } from "../api/studentApi";

const CreateStudentPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const newStudent = {
      name: data.name,
      referralCode: "REF" + Math.floor(Math.random() * 10000),
      totalSpent: 0,
    };

    await createStudent(newStudent);
    alert("Student created!");
    reset();
  };

  return (
    <div className="p-4 max-w-md">
      <h1 className="text-xl font-bold mb-4">Add Student</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          {...register("name")}
          placeholder="Enter name"
          className="border p-2"
        />

        <button className="bg-blue-500 text-white p-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateStudentPage;