import React, { useEffect, useRef, useState } from "react";
import StarRating from "../StarRating/index";
import Loader from "../../UI/Loader";
import { useKey } from "../../hooks/useKey";

const KEY = "33297e05";

export default function DetailsMovie({
	Id,
	onCloseMovie,
	onWatchedMovie,
	watched,
}) {
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(false);
	const [rating, setRating] = useState(null);

	const ratingRef = useRef(0);

	useEffect(() => {
		if (rating) ratingRef.current += 1;
	}, [rating]);

	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Director: director,
		Genre: genre,
		Actors: actors,
	} = movie;

	const isWatched = watched.filter((movie) => movie.imdbID == Id).length > 0;

	const handleAdd = () => {
		if (!rating) return;

		const movie = {
			imdbID: Id,
			Title: title,
			Year: year,
			Poster: poster,
			runtime: +runtime.split(" ")[0],
			imdbRating: imdbRating,
			userRating: rating,
			countRating: ratingRef.current,
		};

		onWatchedMovie(movie);

		onCloseMovie();
	};

	useKey("Escape", onCloseMovie);
	// useEffect(() => {
	// 	const callback = (e) => {
	// 		if (e.code === "Escape") {
	// 			console.log("CLOSING");
	// 			onCloseMovie();
	// 		}
	// 	};

	// 	document.addEventListener("keydown", callback);

	// 	return () => {
	// 		document.removeEventListener("keydown", callback);
	// 	};
	// }, [onCloseMovie]);

	useEffect(
		function () {
			const fetchDetails = async () => {
				try {
					setLoading(true);
					const response = await fetch(
						`http://www.omdbapi.com/?apikey=${KEY}&i=${Id}`
					);

					if (!response.ok) throw new Error("Network Error");

					const data = await response.json();
					// console.log(data);

					if (!data)
						throw new Error(
							"Something went wrong. Please try again"
						);

					setMovie(data);
				} catch (err) {
					console.log(err);
				} finally {
					setLoading(false);
				}
			};

			fetchDetails();
		},
		[Id]
	);

	useEffect(
		function () {
			if (!title) return;

			document.title = `Movie | ${title}`;

			return () => {
				document.title = "usePopCorn 🍿";
			};
		},
		[title]
	);

	return (
		<div className="details">
			{loading ? (
				<Loader />
			) : (
				<>
					<header className="">
						<button
							className="btn-back"
							onClick={() => onCloseMovie()}
						>
							&larr;
						</button>
						<img src={poster} alt={`Poster of ${movie} movie`} />
						<div className="details-overview">
							<h2>{title}</h2>
							<p>
								{released} &bull; {runtime}
							</p>
							<p>{genre}</p>
							<p>
								<span>⭐</span>
								{imdbRating} IMDb rating
							</p>
						</div>
					</header>
					<section>
						<div className="rating">
							{!isWatched ? (
								<>
									<StarRating
										maxRating={10}
										size={24}
										onSetRating={setRating}
									/>
									{rating && (
										<button
											className="btn-add"
											onClick={handleAdd}
										>
											+ Add to list
										</button>
									)}
								</>
							) : (
								<p>
									Your rated this movie :{" "}
									{
										watched.filter(
											(movie) => movie.imdbID == Id
										)[0].userRating
									}{" "}
									<span>⭐</span>
								</p>
							)}
						</div>

						<p>
							<em>{plot}</em>
						</p>
						<p>Starring {actors}</p>
						<p>Directed by {director}</p>
					</section>
				</>
			)}
		</div>
	);
}
