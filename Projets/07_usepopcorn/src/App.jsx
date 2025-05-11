import { useState } from "react";

// =============== Data =================
// import tempMovieData from "./data/movieData";
// import tempWatchedData from "./data/watchedData";

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
import { useMovies } from "./hooks/useMovies";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
	const [selectedId, setSelectedId] = useState(null);
	const [query, setQuery] = useState("");

	// const [watched, setWatched] = useState(() => {
	// 	const watched = localStorage.getItem("watched");
	// 	return watched ? JSON.parse(watched) : [];
	// });

	const [watched, setWatched] = useLocalStorage([], "watched");

	const { isLoading, movies, error } = useMovies(query);

	function handleCloseMovie() {
		setSelectedId(null);
	}

	const handleChnageId = (Id) => {
		setSelectedId((prevId) => (prevId === Id ? null : Id));
	};

	const handleWatchedMovie = (movie) => {
		if (!movie) return;

		setWatched([...watched, movie]);
	};

	const handleDelteWatchedMovie = (id) => {
		setWatched((movies) => movies.filter((movie) => movie.imdbID !== id));
	};

	// useEffect(
	// 	function () {
	// 		localStorage.setItem("watched", JSON.stringify(watched));
	// 	},
	// 	[watched]
	// );

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
							watched={watched}
							onCloseMovie={handleCloseMovie}
							onWatchedMovie={handleWatchedMovie}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<ListWatchedMovie
								watched={watched}
								onDeleteWatchedMovie={handleDelteWatchedMovie}
							/>
						</>
					)}
				</Box>
			</Main>
		</>
	);
}
