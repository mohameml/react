import React from "react";
import styles from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import CityItem from "./CityItem";
import Message from "../Message/Message";
import useCities from "../../hooks/useCities";

export default function CityList() {
	const { cities, isLoading, currentCity } = useCities();

	if (isLoading) return <Spinner />;

	if (!cities.length)
		return (
			<Message message="Add your first city by clicking on a city on the map" />
		);

	return (
		<ul className={styles.cityList}>
			{cities.map((city) => (
				<CityItem
					city={city}
					key={city.id}
					isme={
						currentCity !== undefined
							? currentCity.id == city.id
							: false
					}
				/>
			))}
		</ul>
	);
}
