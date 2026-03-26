import axiosInstance from "./axiosInstance";

export const getSnacks = async () => {
  const response = await axiosInstance.get("/snacks");
  return response.data;
};
export const updateSnack = async (id, data) => {
  const res = await axiosInstance.patch(`/snacks/${id}`, data);
  return res.data;
};