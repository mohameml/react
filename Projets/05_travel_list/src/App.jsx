import "./App.css";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Logo from "./components/Logo";
import { useState } from "react";

function App() {
	const [items, setItems] = useState([]);

	const handelAddItem = (item) => {
		setItems((items) => [...items, item]);
	};

	const handelDeleteItem = (id) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	const handelPackedItem = (id) => {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	};

	const handelClearList = () => {
		const confirmed = window.confirm(
			"Are you shure you want to delete All Items ?:"
		);

		if (confirmed) setItems([]);
	};

	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handelAddItem} />
			<PackingList
				items={items}
				onDeleteItem={handelDeleteItem}
				onPackedItem={handelPackedItem}
				onClearList={handelClearList}
			/>
			<Stats items={items} />
		</div>
	);
}

export default App;
