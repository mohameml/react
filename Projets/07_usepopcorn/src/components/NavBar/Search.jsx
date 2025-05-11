import { useRef } from "react";
import { useKey } from "../../hooks/useKey";

export default function Search({ query, setQuery }) {
	const inputRef = useRef(null);

	useKey("Enter", function () {
		if (document.activeElement === inputRef.current) return;
		inputRef.current.focus();
		setQuery("");
	});

	// useEffect(
	// 	function () {
	// 		const callback = (e) => {
	// 			if (document.activeElement === inputRef.current) return;

	// 			if (e.code === "Enter") {
	// 				inputRef.current.focus();
	// 				setQuery("");
	// 			}
	// 		};

	// 		document.addEventListener("keydown", callback);

	// 		return () => {
	// 			document.removeEventListener("keydown", callback);
	// 		};
	// 	},
	// 	[setQuery]
	// );

	// useEffect(function () {
	// 	// const el = document.querySelector(".search");
	// 	// el.focus();
	// }, []);

	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => {
				setQuery(e.target.value);
			}}
			ref={inputRef}
		/>
	);
}
