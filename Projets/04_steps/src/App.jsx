import "./index.css";

import Step from "./components/Step";
import Button from "./components/Button";
import Message from "./components/Message";
import { useState } from "react";

function App() {
	const messages = [
		"Learn React ⚛️",
		"Apply for jobs 💼",
		"Invest your new income 🤑",
	];

	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	const handelPrevious = () => {
		if (step == 1) return;
		setStep((step) => step - 1);
	};

	const handelNext = () => {
		if (step === 3) return;
		setStep((step) => step + 1);
	};

	const handelClose = () => {
		setIsOpen((isopen) => !isopen);
	};

	return (
		<>
			<button className="close" onClick={handelClose}>
				&times;
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<Step currStep={step} step={1} />
						<Step currStep={step} step={2} />
						<Step currStep={step} step={3} />
					</div>
					<Message step={step}>{messages[step - 1]}</Message>
					<div className="buttons">
						<Button
							bgColor={"#7950f2"}
							textColor={"#fff"}
							handelClick={handelPrevious}
						>
							<span>👈 Previous</span>
						</Button>
						<Button
							bgColor={"#7950f2"}
							textColor={"#fff"}
							handelClick={handelNext}
						>
							<span>Next 👉</span>
						</Button>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
