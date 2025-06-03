import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

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




export async function createEditCabin(newCabin, id) {

    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    // https://bzmstybjiyifxxxyrwkg.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`



    // 1. Create Cabine : 
    let query = supabase.from("cabines");

    if (!id)
        query = query
            .insert([
                { ...newCabin, image: imagePath },
            ])


    if (id) {
        query = query
            .update({ ...newCabin, image: imagePath })
            .eq('id', id)
    }


    const { data, error } = await query
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Cabine could not be created");
    }
    // 2. Upload image : 

    if (hasImagePath) return data;

    const { error: errorUpload } = await supabase
        .storage
        .from("cabin-images")
        .upload(imageName, newCabin.image)

    // 3. In case there is an Error while uploading the file : 
    if (errorUpload) {
        await supabase
            .from('cabines')
            .delete()
            .eq("id", data.id);

        console.error(errorUpload);
        throw new Error("Cabine image could not be uploaded and the cabin was net created");

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

    return data;
}