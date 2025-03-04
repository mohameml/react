import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

import StarRating from "./components/StarRating/index.jsx";

// export default function Test() {
// 	const [movieRating, setMovieRating] = useState(0);

// 	return (
// 		<div>
// 			<StarRatingr
// 				color="blue"
// 				maxRating={10}
// 				onSetRating={setMovieRating}
// 			/>
// 			<p>This movie whas rating {movieRating} stars</p>
// 		</div>
// 	);
// }

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<StarRating
			maxRating={"sssisis"}
			// messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
		/>

		{/* <StarRatingr maxRating={10} size={24} color="red" defaultRating={3} /> */}

		{/* <Test /> */}
		{/* ================ Error ============ */}
		{/* <StarRatingr
			maxRating={5}
			messages={["Terrible", "OK", "Good", "Amazing"]}
		/> */}

		{/* =========== Error ============ */}
		{/* <StarRatingr maxRating={10} size={24} color="red" defaultRating={"3"} /> */}

		{/* =========== Error ============== */}
		{/* <StarRatingr maxRating={10} size={24} color="red" defaultRating={11} /> */}

		{/* <App /> */}
	</StrictMode>
);
