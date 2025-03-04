import "./index.css";
import data from "./data/data";
import ListFriend from "./components/ListFriend";
import Form from "./components/Form";
import Bill from "./components/Bill";
import { useState, useEffect } from "react";

export default function App() {
	const [friends, setFriends] = useState(() => {
		// Charger les données sauvegardées ou utiliser `data` par défaut
		const storedFriends = localStorage.getItem("friends");
		return storedFriends ? JSON.parse(storedFriends) : data;
	});

	const [selectedId, setSelectedId] = useState(null);
	const friendBill = friends.filter((f) => f.id === selectedId)[0];

	const handleAddFriend = (newFriend) => {
		setFriends([...friends, newFriend]);
	};

	const handleEditBill = (newFriend) => {
		setFriends((prevFriends) =>
			prevFriends.map((f) => (f.id === newFriend.id ? newFriend : f))
		);
		setSelectedId(null);
	};

	const handleSelecteId = (id) => {
		setSelectedId((prevId) => (prevId === id ? null : id));
		console.log(id);
	};

	// Sauvegarder `friends` dans `localStorage` à chaque changement
	useEffect(() => {
		localStorage.setItem("friends", JSON.stringify(friends));
	}, [friends]);

	return (
		<div className="app">
			<div className="sidebar">
				<ListFriend
					data={friends}
					selectedId={selectedId}
					onSelectedId={handleSelecteId}
				/>
				<Form onAddFriend={handleAddFriend} />
			</div>
			<Bill
				key={selectedId}
				friend={friendBill}
				onEditBlance={handleEditBill}
			/>
		</div>
	);
}
