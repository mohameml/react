import { useState } from "react";

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

export default function App() {
	const [movies, setMovies] = useState(tempMovieData);
	const [watched, setWatched] = useState(tempWatchedData);

	return (
		<>
			<NavBar>
				<Logo />
				<Search />
				<StatsBar length={movies.length} />
			</NavBar>
			<Main>
				<Box>
					<ListMovie movies={movies} />
				</Box>
				<Box>
					<WatchedSummary watched={watched} />
					<ListWatchedMovie watched={watched} />
				</Box>
			</Main>
		</>
	);
}
