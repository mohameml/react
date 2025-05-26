import { createSlice } from "@reduxjs/toolkit";

// ============== initalState ========================
const initialStateCustomer = {
	fullName: "",
	nationalID: "",
	createdAt: "",
};

const customerSlice = createSlice({
	name: "customer",
	initialState: initialStateCustomer,
	reducers: {
		createCustomer: {
			prepare(fullName, nationalID) {
				return {
					payload: {
						fullName,
						nationalID,
						createdAt: new Date().toISOString(),
					},
				};
			},
			reducer(state, action) {
				state.fullName = action.payload.fullName;
				state.nationalID = action.payload.nationalID;
				state.createdAt = action.payload.createdAt;
			},
		},
		updateName(state, action) {
			state.fullName = action.payload;
		},
	},
});

const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

export { createCustomer, updateName };

/*

// ==================== reducer ===========================

export default function customerReducer(state = initialStateCustomer, action) {
	switch (action.type) {
		case "customer/createCustomer":
			return {
				...state,
				fullName: action.payload.fullName,
				nationalID: action.payload.nationalID,
				createdAt: action.payload.createdAt,
			};

		case "customer/updateName":
			return {
				...state,
				fullName: action.payload,
			};

		default:
			return state;
	}
}

// ================= Actions =================

function createCustomer(fullName, nationalID) {
	return {
		type: "customer/createCustomer",
		payload: {
			fullName,
			nationalID,
			createdAt: new Date().toISOString(),
		},
	};
}

function updateName(fullName) {
	return { type: "customer/updateName", payload: fullName };
}

export { createCustomer, updateName };

*/
