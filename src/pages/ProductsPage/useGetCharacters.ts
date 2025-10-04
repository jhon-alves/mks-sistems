import { useQuery } from "@tanstack/react-query";
import { services } from "../../services";

export function useGetCharacters() {
  const { data, isLoading } =  useQuery({
    queryKey: ['getCharacters'],
    queryFn: () => services.getCharacters()
  });
  
  return {
    characters: data?.data ?? [],
    loadingCharacters: isLoading
  };
}