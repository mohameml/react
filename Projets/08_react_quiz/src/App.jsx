import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useReducer } from "react";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { reducer, initalState } from "./reducer/reducer";

export default function App() {
	const [
		{ questions, status, index, answer, points, highscore, timer },
		dispatch,
	] = useReducer(reducer, initalState);

	const numQuestions = questions.length;

	const sumPoints = questions.reduce(
		(somme, question) => somme + question.points,
		0
	);

	useEffect(function () {
		fetch(`http://localhost:9000/questions`)
			.then((res) => res.json())
			.then((data) => dispatch({ type: "dataRecevied", payload: data }))
			.catch((err) => {
				console.error(err);
				dispatch({ type: "dataFaild" });
			});
	}, []);

	useEffect(function () {
		const saveHighScore = Number(localStorage.getItem("highscore") || 0);
		dispatch({ type: "setHighScore", payload: saveHighScore });
	}, []);

	useEffect(
		function () {
			if (status === "finished") {
				localStorage.setItem("highscore", highscore);
			}
		},
		[status, highscore]
	);

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<StartScreen
						numQuestions={numQuestions}
						dispatch={dispatch}
					/>
				)}
				{status === "active" && (
					<>
						<Progress
							index={index}
							numQuestions={numQuestions}
							points={points}
							sumPoints={sumPoints}
							answer={answer}
						/>
						<Question
							question={questions[index]}
							dispatch={dispatch}
							answer={answer}
						/>
						<Footer>
							<Timer dispatch={dispatch} secondes={timer} />
							<NextButton
								dispatch={dispatch}
								answer={answer}
								index={index}
								numQuestions={numQuestions}
							/>
						</Footer>
					</>
				)}
				{status === "finished" && (
					<FinishScreen
						points={points}
						sumPoints={sumPoints}
						highscore={highscore}
						dispatch={dispatch}
					/>
				)}
			</Main>
		</div>
	);
}
