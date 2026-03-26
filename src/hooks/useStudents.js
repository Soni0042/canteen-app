import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../api/studentApi";

export const useStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
};