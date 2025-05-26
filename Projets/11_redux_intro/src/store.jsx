import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		account: accountReducer,
		customer: customerReducer,
	},
});

// import { combineReducers, createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// const rootReducer = combineReducers({
// 	account: accountReducer,
// 	customer: customerReducer,
// });

// const store = createStore(
// 	rootReducer,
// 	composeWithDevTools(applyMiddleware(thunk))
// );

export default store;
