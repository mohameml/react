import React from "react";

export default function Stats({ items }) {
	if (!items.length) {
		return (
			<footer className="stats">
				<em>Start adding some items to your packing list 🚀</em>
			</footer>
		);
	}

	const itemsLength = items.length;
	const packedItems = items.filter((item) => item.packed).length;

	const pc = Math.round((packedItems / itemsLength) * 100);

	return (
		<footer className="stats">
			{itemsLength !== packedItems ? (
				<em>
					you have {itemsLength} items on your list, and your alredy
					packed {packedItems} ({pc}%)
				</em>
			) : (
				<em>You got everything! Ready to go ✈️</em>
			)}
		</footer>
	);
}
