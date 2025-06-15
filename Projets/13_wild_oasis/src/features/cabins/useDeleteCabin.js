import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteCabine as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
        mutationFn: (id) => deleteCabinApi(id),
        onSuccess: () => {
            toast.success("Cabin successfully Delete");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),
    });


    return {
        isDeleting,
        deleteCabin
    }
}