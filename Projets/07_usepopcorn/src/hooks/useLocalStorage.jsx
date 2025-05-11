import { useEffect, useState } from "react";

export function useLocalStorage(initState, key) {
	const [value, setValue] = useState(() => {
		const value = localStorage.getItem(key);

		return value ? JSON.parse(value) : initState;
	});

	useEffect(
		function () {
			localStorage.setItem(key, JSON.stringify(value));
		},
		[value, key]
	);

	return [value, setValue];
}
