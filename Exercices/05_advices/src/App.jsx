import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
	const [advice, setAdvice] = useState("");
	const [nb, setNb] = useState(0);

	async function getAdvice() {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();
		const adviceData = data.slip.advice;
		console.log(data.slip.advice);
		setAdvice(adviceData);
		setNb((c) => c + 1);
	}

	useEffect(() => {
		getAdvice();
	}, []);

	return (
		<div className="App">
			<Message advice={advice} nb={nb} />
			<CustomButton getAdvice={getAdvice} />
		</div>
	);
}

function Message(props) {
	const { advice, nb } = props;

	return (
		<div className="container">
			<h3>{advice}</h3>
			<div className="cn-bn">
				<p className="nb">{nb}</p>
			</div>
		</div>
	);
}

function CustomButton(props) {
	const { getAdvice } = props;
	return (
		<div className="btn-container">
			<button className="btn" onClick={getAdvice}>
				Get advice
			</button>
		</div>
	);
}
