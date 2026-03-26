import { useQuery } from "@tanstack/react-query";
import { getStudentById } from "../api/studentApi";

export const useStudentDetail = (id) => {
  return useQuery({
    queryKey: ["student", id],
    queryFn: () => getStudentById(id),
    enabled: !!id,
  });
};


