import { createSlice } from "@reduxjs/toolkit";

// ===============  initalState ===============
const initalState = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
	isLoading: false,
};

const accountSlice = createSlice({
	name: "account",
	initialState: initalState,
	reducers: {
		deposit(state, action) {
			state.balance += action.payload;
			state.isLoading = false;
		},
		withdraw(state, action) {
			state.balance -= action.payload;
		},
		requestLoan: {
			prepare(amount, purpose) {
				return {
					payload: { amount, purpose },
				};
			},

			reducer(state, action) {
				if (state.loan > 0) return;
				state.balance += action.payload.amount;
				state.loanPurpose = action.payload.purpose;
				state.loan = action.payload.amount;
			},
		},
		payLoan(state) {
			state.balance -= state.loan;
			state.loan = 0;
			state.loanPurpose = "";
		},
		convertingCurrency(state) {
			state.isLoading = true;
		},
	},
});

const { withdraw, requestLoan, payLoan } = accountSlice.actions;

function deposit(amount, currency) {
	if (currency === "USD") return { type: "account/deposit", payload: amount };

	return async (dispatch) => {
		try {
			dispatch({ type: "account/convertingCurrency" });
			const res = await fetch(
				`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${"USD"}`
			);
			const data = await res.json();
			const converted = data.rates.USD;

			// return action

			dispatch({ type: "account/deposit", payload: converted });
		} catch (err) {
			console.error(err);
		}
	};
}

export default accountSlice.reducer;

export { deposit, withdraw, requestLoan, payLoan };

// accountSlice [reducer , actions[deposit , withdraw ..etc] ,  ]

// ========================= Redux Classic =========================
/*
// ========== reducer ===================

export default function accountReducer(state = initalState, action) {
	switch (action.type) {
		case "account/deposit":
			return {
				...state,
				balance: state.balance + action.payload,
				isLoading: false,
			};

		case "account/withdraw":
			return {
				...state,
				balance: state.balance - action.payload,
			};

		case "account/requestLoan": {
			if (state.loan > 0) return state;

			return {
				...state,
				balance: state.balance + action.payload.amount,
				loan: action.payload.amount,
				loanPurpose: action.payload.loanPurpose,
			};
		}

		case "account/payLoan":
			return {
				...state,
				loan: 0,
				loanPurpose: "",
				balance: state.balance - state.loan,
			};

		case "account/convertingCurrency":
			return {
				...state,
				isLoading: true,
			};

		default:
			return initalState;
	}
}

// =================== Actions =====================

function deposit(amount, currency) {
	if (currency === "USD") return { type: "account/deposit", payload: amount };

	return async (dispatch, state) => {
		try {
			dispatch({ type: "account/convertingCurrency" });
			const res = await fetch(
				`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${"USD"}`
			);
			const data = await res.json();
			const converted = data.rates.USD;

			// return action

			dispatch({ type: "account/deposit", payload: converted });
		} catch (err) {
			console.error(err);
		}
	};
}

function withdraw(amount) {
	return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
	return {
		type: "account/requestLoan",
		payload: { amount: amount, loanPurpose: purpose },
	};
}

function payLoan() {
	return { type: "account/payLoan" };
}

export { deposit, withdraw, requestLoan, payLoan };
*/
