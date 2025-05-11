import { useEffect, useState } from "react";

const KEY = "33297e05";

export function useMovies(query) {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		const fetchMovies = async () => {
			try {
				setIsLoading(true);
				setError("");

				const response = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
					{
						signal: controller.signal,
					}
				);
				if (!response.ok)
					throw new Error(
						"Something went wrong with fetching movies"
					);

				const data = await response.json();
				if (data.Response === "False") {
					throw new Error("Movie not found");
				}
				setMovies(data.Search);
			} catch (error) {
				if (error.name != "AbortError") {
					setError(error.message);
				}
			} finally {
				setIsLoading(false);
			}
		};
		if (!query) {
			setError("");
			setMovies([]);
			return;
		}

		fetchMovies();

		return () => {
			controller.abort();
		};
	}, [query]);

	return { isLoading, movies, error };
}
