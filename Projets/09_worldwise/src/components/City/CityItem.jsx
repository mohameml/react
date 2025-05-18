import React from "react";
import styles from "./CityItem.module.css";
import { formatDate } from "../../utils/utils";
import FlageEmoji from "../FlagEmoji/FlageEmoji";
import { Link } from "react-router-dom";
import useCities from "../../hooks/useCities";

export default function CityItem({ city, isme }) {
	const { cityName, emoji, date, id, position } = city;

	const { lat, lng } = position;

	const { deleteCity } = useCities();

	const handleClick = async (e) => {
		e.preventDefault();
		await deleteCity(id);
	};

	return (
		<li>
			<Link
				className={`${styles.cityItem} ${
					isme ? styles["cityItem--active"] : ""
				}`}
				to={`${id}?lat=${lat}&lng=${lng}`}
			>
				<span className={styles.emoji}>
					<FlageEmoji flag={emoji} />
				</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={styles.date}>{formatDate(date)}</time>
				<button
					className={styles.deleteBtn}
					onClick={(e) => handleClick(e)}
				>
					&times;
				</button>
			</Link>
		</li>
	);
}
