import { useReducer } from "react";
import { createContext } from "react";

const FAKE_USER = {
	name: "Jack",
	email: "jack@example.com",
	password: "qwerty",
	avatar: "https://i.pravatar.cc/100?u=zz",
};

const AuthContext = createContext();

const initalSatate = {
	user: null,
	isAuth: false,
	errorAuth: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "login":
			return {
				...state,
				user: action.payload,
				isAuth: true,
			};
		case "logout":
			return {
				...state,
				user: null,
				isAuth: false,
			};
		case "error":
			return {
				...state,
				errorAuth: action.payload,
				isAuth: false,
			};

		default:
			throw new Error("Unkown action type");
	}
}

function AuthProvider({ children }) {
	const [{ user, isAuth, errorAuth }, dispatch] = useReducer(
		reducer,
		initalSatate
	);

	function login(email, password) {
		if (!email || !password) return;

		if (FAKE_USER.email === email && FAKE_USER.password === password) {
			dispatch({
				type: "login",
				payload: {
					name: FAKE_USER.name,
					email,
					password,
					avatar: FAKE_USER.avatar,
				},
			});
		} else {
			dispatch({
				type: "error",
				payload: "email or password is not correct",
			});
		}
	}

	function logout() {
		dispatch({ type: "logout" });
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuth,
				errorAuth,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthProvider };
