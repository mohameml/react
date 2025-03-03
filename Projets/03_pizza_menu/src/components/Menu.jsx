import pizzaData from "../data/data";
import Pizza from "./Pizza";
import React from "react";

import "../index.css";

export default function Menu() {
	// const pizzas = [];
	const pizzas = pizzaData;
	const pizzaItems = pizzas.map((pizza, index) => (
		<Pizza key={index} data={pizza} />
	));
	return (
		<menu className="menu">
			<h2>Our Menu</h2>
			{/* ======== Pizza Data ========== */}
			{pizzas.length > 0 && (
				<React.Fragment key={"blabla"}>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose
						from. All from our stone oven, all organic, all
						delicious.
					</p>
					<ul className="pizzas">{pizzaItems}</ul>
				</React.Fragment>
			)}
		</menu>
	);
}
