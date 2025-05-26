import { useEffect, useReducer, createContext, useCallback } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initState = {
	cities: [],
	isLoading: false,
	error: "",
	currentCity: {},
};

// 4 PB :
// 1. non speration du state locale and API logic
// 2. terible error handeling
// 3. repaet your self
// 4. manula sync between state and server

function reducer(state, action) {
	switch (action.type) {
		case "loading":
			return {
				...state,
				isLoading: true,
			};
		case "cities/loaded":
			return {
				...state,
				isLoading: false,
				cities: action.payload,
			};

		case "city/loaded":
			return {
				...state,
				isLoading: false,
				currentCity: action.payload,
			};

		case "city/created":
			return {
				...state,
				isLoading: false,
				cities: [...state.cities, action.payload],
				currentCity: action.payload,
			};

		case "city/deleted":
			return {
				...state,
				isLoading: false,
				cities: state.cities.filter(
					(city) => city.id !== action.payload
				),
				currentCity: {},
			};

		case "rejected":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			throw new Error(`Unkown action type :${action.type}`);
	}
}

function CitiesProvider({ children }) {
	const [{ cities, isLoading, error, currentCity }, dispatch] = useReducer(
		reducer,
		initState
	);

	const countries = [
		...new Map(
			cities.map((city) => [
				city.country,
				{ country: city.country, emoji: city.emoji },
			])
		).values(),
	];

	useEffect(function () {
		getAllCities();
	}, []);

	async function getAllCities() {
		try {
			dispatch({ type: "loading" });
			const response = await fetch(`${BASE_URL}/cities`);
			const data = await response.json();

			dispatch({ type: "cities/loaded", payload: data });
		} catch {
			dispatch({
				type: "rejected",
				payload: "Error while fetching cities.",
			});
		}
	}

	const getCity = useCallback(
		async function getCity(id) {
			if (Number(id) === currentCity.id) return;

			try {
				dispatch({ type: "loading" });

				const response = await fetch(`${BASE_URL}/cities/${id}`);
				const data = await response.json();

				dispatch({ type: "city/loaded", payload: data });
			} catch {
				dispatch({
					type: "rejected",
					payload: "Error while fetching city data.",
				});
			}
		},
		[currentCity.id]
	);

	async function createCity(newCity) {
		try {
			const response = await fetch(`${BASE_URL}/cities`, {
				method: "POST",
				body: JSON.stringify(newCity),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.json();

			dispatch({ type: "city/created", payload: data });
		} catch {
			dispatch({
				type: "rejected",
				payload: "Error while creating city.",
			});
		}
	}

	async function deleteCity(id) {
		try {
			dispatch({ type: "loading" });

			const response = await fetch(`${BASE_URL}/cities/${id}`, {
				method: "Delete",
			});
			await response.json();

			dispatch({ type: "city/deleted", payload: id });
		} catch {
			dispatch({
				type: "rejected",
				payload: "Error while deleting city.",
			});
		}
	}

	return (
		<CitiesContext.Provider
			value={{
				cities,
				isLoading,
				error,
				countries,
				currentCity,
				getCity,
				createCity,
				deleteCity,
			}}
		>
			{children}
		</CitiesContext.Provider>
	);
}

export { CitiesProvider, CitiesContext };
