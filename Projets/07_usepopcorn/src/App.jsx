import { useEffect, useState } from "react";

// =============== Data =================
import tempMovieData from "./data/movieData";
import tempWatchedData from "./data/watchedData";

// =============== Components ==============
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import ListWatchedMovie from "./components/WatchedMovie/ListWatchedMovie";
import Box from "./components/Box/Box";
import WatchedSummary from "./components/WatchedMovie/WatchedSummary";
import ListMovie from "./components/Movies/ListMovie";
import Logo from "./components/NavBar/Logo";
import StatsBar from "./components/NavBar/StatsBar";
import Search from "./components/NavBar/Search";
import Loader from "./UI/Loader";
import ErrorMessage from "./components/Error/Error";
import DetailsMovie from "./components/Movies/DetailsMovie";

const KEY = "33297e05";
// const url = `http://www.omdbapi.com/?apikey=${KEY}`;

export default function App() {
	const [selectedId, setSelectedId] = useState(null);
	const [query, setQuery] = useState("inception");
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState(tempWatchedData);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleChnageId = (Id) => {
		setSelectedId((prevId) => (prevId === Id ? null : Id));
	};

	const handleCloseMovie = () => {
		setSelectedId(null);
	};

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				setIsLoading(true);
				setError("");

				const response = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
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
				setError(error.message);
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
			console.log("Cleanup function");
		};
	}, [query]);

	return (
		<>
			<NavBar>
				<Logo />
				<Search query={query} setQuery={setQuery} />
				<StatsBar length={movies.length} />
			</NavBar>
			<Main>
				<Box>
					{isLoading && <Loader />}
					{!isLoading && !error && (
						<ListMovie
							movies={movies}
							onSelectedMovie={handleChnageId}
						/>
					)}
					{error && <ErrorMessage message={error} />}
				</Box>
				<Box>
					{selectedId ? (
						<DetailsMovie
							Id={selectedId}
							onCloseMovie={handleCloseMovie}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<ListWatchedMovie watched={watched} />
						</>
					)}
				</Box>
			</Main>
		</>
	);
}
