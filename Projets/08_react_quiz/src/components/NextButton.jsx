import React from "react";

export default function NextButton({ answer, dispatch, numQuestions, index }) {
	if (answer === null) return null;

	if (index < numQuestions - 1)
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "nextQuestion" })}
			>
				Next
			</button>
		);

	if (index == numQuestions - 1)
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "finished" })}
			>
				Finish
			</button>
		);
}
