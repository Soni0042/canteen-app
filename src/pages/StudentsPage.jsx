import { useStudents } from "../hooks/useStudents";
import StudentCard from "../components/students/StudentCard";

const StudentsPage = () => {
  const { data, isLoading, isError } = useStudents();

  // Loading
  if (isLoading) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading students...
      </p>
    );
  }

  // Error
  if (isError) {
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load students ❌
      </p>
    );
  }

  return (
    <div className="p-6">
      
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-6">
        👨‍🎓 Students
      </h1>

      {/* Empty State */}
      {data?.length === 0 ? (
        <p className="text-center text-gray-500">
          No students available
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentsPage;