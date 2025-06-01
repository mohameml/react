import supabase from "./supabase";

export async function getAllCabines() {

    const { data, error } = await supabase
        .from('cabines')
        .select('*');

    if (error) {
        console.error(error);
        throw new Error("Cabines could not be loaded");
    }

    return data

}


export async function createCabin(newCabin) {

    const { data, error } = await supabase
        .from('cabines')
        .insert([
            newCabin,
        ])

    if (error) {
        console.error(error);
        throw new Error("Cabine could not be created");
    }

    return data;

}


export async function deleteCabine(id) {

    const { data, error } = await supabase
        .from('cabines')
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error(`Error while deleting  cabin with id :${id}`)
    }


    console.log("data in supabase =", data);

    return data;
}