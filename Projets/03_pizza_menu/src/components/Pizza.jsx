import PropTypes from "prop-types";
import "../index.css";

export default function Pizza(props) {
	const { photoName, name, ingredients, price, soldOut } = props.data;

	return (
		<li className={`pizza ${soldOut ? "sold-out" : ""}`}>
			<img src={photoName} alt="imgae for order" />
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				{soldOut ? <span>Sold Out</span> : <span>{price + 3} €</span>}
			</div>
		</li>
	);
}

Pizza.propTypes = {
	data: PropTypes.object.isRequired,
};
