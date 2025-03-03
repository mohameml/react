import React, { useState } from "react";
import Button from "../ui/Button";

export default function Form({ onAddFriend }) {
	const [friend, setFriend] = useState({
		name: "",
		image: "https://i.pravatar.cc/48",
	});

	const [isOpen, setIsOpen] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFriend({ ...friend, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!friend.name || !friend.image) return;

		const newFriend = { ...friend, id: crypto.randomUUID(), balance: 0 };
		console.log(newFriend);
		onAddFriend(newFriend);
		setFriend({
			name: "",
			image: "https://i.pravatar.cc/48",
		});
		setIsOpen(false);
	};

	return (
		<>
			{isOpen && (
				<form className="form-add-friend" onSubmit={handleSubmit}>
					{/* ============ Name Input ================ */}
					<label htmlFor="name">👫 Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={friend.name}
						onChange={handleChange}
					/>

					{/* ============== URL Image Input ================== */}
					<label htmlFor="urlImage">🌄 Image URL</label>
					<input
						type="url"
						id="urlImage"
						name="image"
						value={friend.image}
						onChange={handleChange}
					/>
					{/* ====== Button Submit ===== */}
					{/* <button className="button">Add</button> */}
					<Button>Add</Button>
				</form>
			)}
			<Button onClick={() => setIsOpen((is) => !is)}>
				{isOpen ? "Close" : "Add friend"}
			</Button>

			{/* <button className="button" onClick={() => setIsOpen((is) => !is)}>
				{isOpen ? "Close" : "Add friend"}
			</button>
			 */}
		</>
	);
}
