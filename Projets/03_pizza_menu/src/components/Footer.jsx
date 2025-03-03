import "../index.css";
import Order from "./Order";

export default function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closeHour = 22;

	const isOpen = hour >= openHour && hour <= closeHour;

	console.log(isOpen);

	return (
		<footer className="footer">
			{isOpen ? (
				<Order closeHour={closeHour} />
			) : (
				<p>We are closed!. Please visit us on {openHour}:00</p>
			)}
		</footer>
	);
}
