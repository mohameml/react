import React, { useEffect } from "react";

export default function DetailsMovie({ Id, onCloseMovie }) {
	// useEffect(
	// 	function () {
	// 		const fetchDetails = async () => {
	// 			try {
	// 				const response = await fetch("");

	// 				if (!response.ok) throw new Error("Network Error");

	// 				const data = await response.json();

	// 				if (!data)
	// 					throw new Error(
	// 						"Something went wrong. Please try again"
	// 					);
	// 			} catch (err) {}
	// 		};
	// 	},
	// 	[Id]
	// );
	return (
		<div className="details">
			<button className="btn-back" onClick={() => onCloseMovie()}>
				&larr;
			</button>

			{Id}
		</div>
	);
}
