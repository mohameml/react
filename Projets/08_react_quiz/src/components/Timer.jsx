import React from "react";
import { useEffect } from "react";

export default function Timer({ dispatch, secondes }) {
	const sec = secondes % 60;
	const minutes = (secondes - sec) / 60;

	const secondesStr = `${sec}`.length === 1 ? `0${sec}` : sec;
	const minutesStr = minutes !== 10 ? `0${minutes}` : minutes;

	useEffect(
		function () {
			const idTimer = setInterval(function () {
				dispatch({ type: "tick" });
			}, 1000);

			return () => clearInterval(idTimer);
		},
		[dispatch]
	);
	return (
		<div className="timer">
			{minutesStr}:{secondesStr}
		</div>
	);
}
