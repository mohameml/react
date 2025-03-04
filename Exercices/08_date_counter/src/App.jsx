import { useState } from "react";
import "./App.css";

export default function App() {
	return (
		<div className="container">
			<Counter />
		</div>
	);
}

function Counter() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	// const [date, setDate] = useState(new Date(2024, 1, 1));
	const date = new Date(2024, 0, 1);
	date.setDate(date.getDate() + count);

	return (
		<>
			<div className="step">
				<button onClick={() => setStep((s) => s - 1)}>-</button>
				<p>Step : {step}</p>
				<button onClick={() => setStep((s) => s + 1)}>+</button>
			</div>
			<br />
			<div className="step">
				<button onClick={() => setCount(count - step)}>-</button>
				<p>Count :{count}</p>
				<button onClick={() => setCount(count + step)}>+</button>
			</div>
			<h2>{`${count} days from the ${date.toDateString()}`}</h2>
		</>
	);
}
