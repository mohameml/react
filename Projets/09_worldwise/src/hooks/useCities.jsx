import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export default function useCities() {
	const context = useContext(CitiesContext);
	if (context == undefined)
		throw new Error("useCities Context must be used with CitiesProvider");

	return context;
}
