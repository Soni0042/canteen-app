import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SnacksPage from "../pages/SnacksPage";
import StudentsPage from "../pages/StudentsPage";
import StudentDetailPage from "../pages/StudentDetailPage";
import CreateStudentPage from "../pages/CreateStudentPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SnacksPage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="students/:id" element={<StudentDetailPage />} />
        <Route path="create-student" element={<CreateStudentPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;