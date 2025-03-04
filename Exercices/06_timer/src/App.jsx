import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<MyTimer />
		</div>
	);
}

function MyTimer() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(function () {
		setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
	}, []);

	return (
		<div>
			<h1>Timer :</h1>
			<h2>{time}</h2>
		</div>
	);
}
