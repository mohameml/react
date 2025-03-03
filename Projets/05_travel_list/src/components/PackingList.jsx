import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
	items,
	onDeleteItem,
	onPackedItem,
	onClearList,
}) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;

	if (sortBy === "input") sortedItems = items;

	if (sortBy === "description")
		sortedItems = [...items].sort((a, b) =>
			a.description.localeCompare(b.description)
		);

	if (sortBy === "packed")
		sortedItems = [...items].sort(
			(item1, item2) => Number(item1.packed) - Number(item2.packed)
		);

	const handelSortBy = (e) => {
		setSortBy(e.target.value);
	};

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onPackedItem={onPackedItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={handelSortBy}>
					<option value="input">Sort by Input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button onClick={onClearList}>Clear list</button>
			</div>
		</div>
	);
}
