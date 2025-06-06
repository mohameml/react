import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding"
import { getPosition } from "../../utils/helpers";


const initialState = {
    username: "",
    status: "idle", // idle , fullfiled , reject 
    position: {},
    address: "",
    error: ""
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(
                fetchAddress.pending, (state) => {
                    state.status = 'Loading';
                }
            ).addCase(fetchAddress.fulfilled, (state, action) => {
                state.address = action.payload.address
                state.position = action.payload.position
                state.status = "idle";
            }).addCase(fetchAddress.rejected, (state) => {
                state.status = 'error';
                state.error = "There was a problem getting your address. Make sure to fill this field."
            })
    }

})

export default userSlice.reducer;

export const { updateName } = userSlice.actions;


// action fetchAddress 
export const fetchAddress = createAsyncThunk('user/fetchAddress', async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
    };

    console.log("psotion", position)

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in

    // RQ : The Return Object will be come the payload for reducer in the case of fulfilled. 
    return { position, address };

})

