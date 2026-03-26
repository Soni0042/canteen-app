import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
  return (
    <div className="p-5 bg-white rounded-2xl shadow hover:shadow-xl transition duration-300">
      
      {/* Name */}
      <h2 className="text-lg font-semibold">{student.name}</h2>

      {/* Info */}
      <p className="text-sm text-gray-500 mt-1">
        Referral: {student.referralCode}
      </p>

      <p className="mt-2 font-medium">
        Total Spent: ₹{student.totalSpent}
      </p>

      {/* Button */}
      <Link
        to={`/students/${student.id}`}
        className="mt-4 inline-block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default StudentCard;