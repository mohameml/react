import StarRating from "./components/StarRating";
import { useState } from "react";

function App() {
	return (
		<>
			<StarRating maxRating={10} />

			<StarRating
				maxRating={5}
				messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
			/>

			<StarRating
				maxRating={10}
				size={24}
				color="red"
				defaultRating={3}
			/>

			{/* ==== use onSetRating ===== */}
			<Test />

			{/* ================ Error ============ */}
			{/* <StarRating
				maxRating={5}
				messages={["Terrible", "OK", "Good", "Amazing"]}
			/>
			 */}

			{/* =========== Error ============ */}
			{/* <StarRatingr maxRating={10} size={24} color="red" defaultRating={"3"} /> */}

			{/* =========== Error ============== */}
			{/* <StarRatingr maxRating={10} size={24} color="red" defaultRating={11} /> */}
		</>
	);
}

function Test() {
	const [movieRating, setMovieRating] = useState(0);

	return (
		<div>
			<StarRating
				color="blue"
				maxRating={10}
				onSetRating={setMovieRating}
			/>
			<p>This movie whas rating {movieRating} stars</p>
		</div>
	);
}

export default App;
