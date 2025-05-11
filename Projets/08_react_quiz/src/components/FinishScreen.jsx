import React from "react";

export default function FinishScreen({
	points,
	sumPoints,
	highscore,
	dispatch,
}) {
	const percentage = (points * 100) / sumPoints;

	let emoji;
	if (percentage === 100) emoji = "🥇";
	if (percentage >= 80 && percentage < 100) emoji = "🎉";
	if (percentage >= 50 && percentage < 80) emoji = "🙃";
	if (percentage >= 0 && percentage < 50) emoji = "🤨";
	if (percentage === 0) emoji = "🤦‍♂️";

	return (
		<>
			<p className="result">
				<span>{emoji}</span> Your scored <strong>{points}</strong> out
				of {sumPoints} ({percentage.toFixed(2)}%)
			</p>
			<p className="highscore">Your High score is : {highscore}</p>

			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "restart" })}
			>
				restart
			</button>
		</>
	);
}
