import React from "react";

import WatchedMovie from "./WatchedMovie";

export default function ListWatchedMovie({ watched }) {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<WatchedMovie key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
}
