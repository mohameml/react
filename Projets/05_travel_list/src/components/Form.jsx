import React, { useState } from "react";

export default function Form({ onAddItem }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!description) return;

		const item = {
			description,
			quantity,
			packed: false,
			id: Date.now(),
		};

		onAddItem(item);

		setDescription("");
		setQuantity(1);
	};

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(+e.target.value)}
			>
				{[...Array(20)].map((_, i) => (
					<option key={i + 1} value={i + 1}>
						{i + 1}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => {
					setDescription(e.target.value);
				}}
			/>
			<button>Add</button>
		</form>
	);
}
