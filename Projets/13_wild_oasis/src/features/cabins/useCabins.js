import { useQuery } from "@tanstack/react-query";
import { getAllCabines } from "../../services/apiCabins";

export function useCabins() {
    const {
        isLoading,
        data: cabins,
        error,
    } = useQuery({
        queryKey: ["cabins"],
        queryFn: getAllCabines,
    });

    return {
        isLoading,
        cabins,
        error
    }
}