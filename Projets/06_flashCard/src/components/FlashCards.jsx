import React from "react";
import Card from "./Card";
import { useState } from "react";
import questions from "../data/Questions";

export default function FlashCards() {
	const [selectedId, setSelectedId] = useState(null);

	function handleClick(id) {
		setSelectedId(id === selectedId ? null : id);
	}

	return (
		<div className="flashcards">
			{questions.map((Q) => (
				<Card
					key={Q.id}
					question={Q}
					isSelected={selectedId === Q.id}
					onClick={() => handleClick(Q.id)}
				/>
			))}
		</div>
	);
}
