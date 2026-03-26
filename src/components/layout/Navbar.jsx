import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-64 bg-white shadow p-4 flex flex-col gap-4">
      
      <h1 className="text-xl font-bold mb-4">School Canteen</h1>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "p-2 rounded bg-blue-500 text-white"
            : "p-2 rounded hover:bg-gray-200"
        }
      >
        Snacks
      </NavLink>

      <NavLink
        to="/students"
        className={({ isActive }) =>
          isActive
            ? "p-2 rounded bg-blue-500 text-white"
            : "p-2 rounded hover:bg-gray-200"
        }
      >
        Students
      </NavLink>

      <NavLink
        to="/create-student"
        className={({ isActive }) =>
          isActive
            ? "p-2 rounded bg-blue-500 text-white"
            : "p-2 rounded hover:bg-gray-200"
        }
      >
        Add Student
      </NavLink>

    </div>
  );
};

export default Navbar;