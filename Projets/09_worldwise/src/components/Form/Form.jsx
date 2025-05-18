import { useState } from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import ButtonBack from "../ButtonBack/ButtonBack";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { useEffect } from "react";
import FlageEmoji from "../FlagEmoji/FlageEmoji";
import { convertToEmoji } from "../../utils/utils";
import useCities from "../../hooks/useCities";
import { useNavigate } from "react-router-dom";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import "react-datepicker/dist/react-datepicker.css";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

import DatePicker from "react-datepicker";

export default function Form() {
	const [cityName, setCityName] = useState("");
	const [country, setCountry] = useState("");
	const [date, setDate] = useState(new Date());
	const [notes, setNotes] = useState("");
	const [isLoadingGoe, setIsLoadingGeo] = useState(false);
	const [geoerror, setGeoError] = useState(null);
	const [emoji, setEmoji] = useState("");

	const [lat, lng] = useUrlPosition();
	const { createCity, isLoading } = useCities();

	const navigate = useNavigate();

	const codeEmoji = convertToEmoji(emoji);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!cityName || !date) return;

		const cityData = {
			cityName,
			country,
			emoji: convertToEmoji(emoji),
			date,
			notes,
			position: {
				lat,
				lng,
			},
		};
		await createCity(cityData);
		navigate("/app/cities");
	};

	useEffect(
		function () {
			async function fetchCityData() {
				try {
					setIsLoadingGeo(true);
					setGeoError("");
					const res = await fetch(
						`${BASE_URL}?latitude=${lat}&longitude=${lng}`
					);
					const data = await res.json();

					if (!data.countryName)
						throw new Error(
							"That doesn't seem to be a city. Click somewhere else."
						);

					setCityName(data.city || data.locality || "");
					setCountry(data.countryName);
					setEmoji(data.countryCode);
				} catch (error) {
					console.log(error);
					setGeoError(error.message);
				} finally {
					setIsLoadingGeo(false);
				}
			}

			if (lat && lng) fetchCityData();
		},
		[lat, lng]
	);

	if (!lat && !lng)
		return <Message message="start by clicking somewhere on the map" />;

	if (isLoadingGoe) return <Spinner />;

	if (geoerror) return <Message message={geoerror} />;

	return (
		<form className={`${styles.form} ${isLoading ? styles.loading : ""}`}>
			<div className={styles.row}>
				<label htmlFor="cityName">City name</label>
				<input
					id="cityName"
					onChange={(e) => setCityName(e.target.value)}
					value={cityName}
				/>
				{codeEmoji && (
					<span className={styles.flag}>
						<FlageEmoji flag={codeEmoji} />
					</span>
				)}
			</div>

			<div className={styles.row}>
				<label htmlFor="date">When did you go to {cityName}?</label>
				<DatePicker
					id="date"
					selected={date}
					onChange={(date) => setDate(date)}
					dateFormat="dd/MM/yyyy"
				/>
			</div>

			<div className={styles.row}>
				<label htmlFor="notes">
					Notes about your trip to {cityName}
				</label>
				<textarea
					id="notes"
					onChange={(e) => setNotes(e.target.value)}
					value={notes}
				/>
			</div>

			<div className={styles.buttons}>
				<Button type="primary" onClick={handleSubmit}>
					Add
				</Button>
				<ButtonBack />
			</div>
		</form>
	);
}
