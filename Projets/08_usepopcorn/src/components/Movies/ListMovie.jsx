import React from "react";
import Movie from "./Movie";

export default function ListMovie({ movies }) {
	if (!movies) return null;

	return (
		<ul className="list">
			{movies.map((movie) => (
				<Movie key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
}
