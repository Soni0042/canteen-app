import axiosInstance from "./axiosInstance";

export const createOrder = async (data) => {
  const res = await axiosInstance.post("/orders", data);
  return res.data;
};