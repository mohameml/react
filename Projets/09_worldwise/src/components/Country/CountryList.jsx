import React from "react";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import useCities from "../../hooks/useCities";

export default function CountryList() {
	const { countries, isLoading } = useCities();

	if (isLoading) return <Spinner />;

	if (!countries.length)
		return (
			<Message
				message={"Add your first city by clicking on a city on the map"}
			/>
		);

	return (
		<ul className={styles.countryList}>
			{countries.map((country) => (
				<CountryItem key={country.country} country={country} />
			))}
		</ul>
	);
}
