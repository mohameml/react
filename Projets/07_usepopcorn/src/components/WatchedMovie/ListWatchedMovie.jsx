import React from "react";

import WatchedMovie from "./WatchedMovie";

export default function ListWatchedMovie({ watched, onDeleteWatchedMovie }) {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<WatchedMovie
					key={movie.imdbID}
					movie={movie}
					onDeleteWatchedMovie={onDeleteWatchedMovie}
				/>
			))}
		</ul>
	);
}
