import axiosInstance from "./axiosInstance";

export const getStudents = async () => {
  const res = await axiosInstance.get("/students");
  return res.data;
};

export const createStudent = async (data) => {
  const res = await axiosInstance.post("/students", data);
  return res.data;
};

export const getStudentById = async (id) => {
  const res = await axiosInstance.get(`/students/${id}?_embed=orders`);
  return res.data;
};
export const updateStudent = async (id, data) => {
  const res = await axiosInstance.patch(`/students/${id}`, data);
  return res.data;
};