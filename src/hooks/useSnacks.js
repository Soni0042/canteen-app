import { useQuery } from "@tanstack/react-query";
import { getSnacks } from "../api/snackApi";

export const useSnacks = () => {
  return useQuery({
    queryKey: ["snacks"],
    queryFn: getSnacks,
  });
};