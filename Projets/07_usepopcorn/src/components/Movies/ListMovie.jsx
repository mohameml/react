import React from "react";
import Movie from "./Movie";

export default function ListMovie({ movies, onSelectedMovie }) {
	if (!movies) return null;

	return (
		<ul className="list list-movies">
			{movies.map((movie) => (
				<Movie
					key={movie.imdbID}
					movie={movie}
					onSelectedMovie={onSelectedMovie}
				/>
			))}
		</ul>
	);
}
