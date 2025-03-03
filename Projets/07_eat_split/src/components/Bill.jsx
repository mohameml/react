import React, { useState } from "react";
import Button from "../ui/Button";

export default function Bill({ friend, onEditBlance }) {
	const [form, setForm] = useState({
		totale: "",
		expense: "",
		isHePaying: false,
	});

	if (!friend) {
		return null;
	}

	const friendExpense =
		form.totale - form.expense === 0 ? "" : form.totale - form.expense;

	const handleChange = (e) => {
		const { name, value, type } = e.target;
		if (type === "select-one") {
			setForm({ ...form, isHePaying: value === "him" ? true : false });
			return;
		}

		setForm({ ...form, [name]: Number(value) });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.expense || !form.totale) return;

		const balance = form.isHePaying ? -1 * form.expense : friendExpense;
		const newFriend = { ...friend, balance: friend.balance + balance };
		onEditBlance(newFriend);

		setForm({
			totale: "",
			expense: "",
			isHePaying: false,
		});
	};

	return (
		<form className="form-split-bill" onSubmit={handleSubmit}>
			<h2>Split a bill with {friend.name}</h2>

			<label htmlFor="value">💰 Bill value</label>
			<input
				type="text"
				name="totale"
				id="value"
				value={form.totale}
				onChange={handleChange}
			/>

			<label htmlFor="expense">🧍‍♀️ Your expense</label>
			<input
				type="text"
				id="expense"
				name="expense"
				value={form.expense}
				onChange={(e) => {
					const value = Number(e.target.value);
					const expense = value > form.totale ? form.expense : value;
					setForm({ ...form, expense });
				}}
			/>

			<label htmlFor="friendExpense">👫 {friend.name}'s expense</label>
			<input
				type="text"
				id="friendExpense"
				disabled
				value={friendExpense}
			/>

			<label htmlFor="select">🤑 Who is paying the bill</label>
			<select
				id="select"
				value={form.isHePaying ? "him" : "me"}
				name="isHePaying"
				onChange={handleChange}
			>
				<option value="me">You</option>
				<option value="him">{friend.name}</option>
			</select>

			<Button>Split bill</Button>
			{/* <button className="button">Split bill</button> */}
		</form>
	);
}
