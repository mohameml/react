import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
	useMapEvent,
} from "react-leaflet";
import { useState } from "react";
import useCities from "../../hooks/useCities";
import FlageEmoji from "../FlagEmoji/FlageEmoji";
import { useEffect } from "react";
import { useGeolocation } from "../../hooks/useGeolocation";

import Button from "../Button/Button";
import { useUrlPosition } from "../../hooks/useUrlPosition";

export default function Map() {
	const [mapPosition, setMapPosition] = useState([40, 0]);
	const { cities } = useCities();
	const {
		isLoading: isLoadingPosition,
		position: geolocationPosition,
		getPosition,
	} = useGeolocation();

	const [lat, lng] = useUrlPosition();

	// const [searchParams] = useSearchParams();
	// const lat = searchParams.get("lat");
	// const lng = searchParams.get("lng");

	useEffect(
		function () {
			if (lat && lng) setMapPosition([lat, lng]);
		},
		[lat, lng]
	);

	useEffect(
		function () {
			if (geolocationPosition)
				setMapPosition([
					geolocationPosition.lat,
					geolocationPosition.lng,
				]);
		},
		[geolocationPosition]
	);

	return (
		<div className={styles.mapContainer}>
			<Button type="position" onClick={getPosition}>
				{isLoadingPosition ? "Loading ..." : "Use Your Location"}
			</Button>
			<MapContainer
				center={mapPosition}
				zoom={6}
				scrollWheelZoom={true}
				className={styles.map}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>

				{cities.map((city) => {
					const position = [city.position.lat, city.position.lng];

					return (
						<Marker position={position} key={city.id}>
							<Popup>
								<span>
									<FlageEmoji flag={city.emoji} />
								</span>
								<span>{city.cityName}</span>
							</Popup>
						</Marker>
					);
				})}
				<ChangeCenter position={mapPosition} />
				<DetecteClick />
			</MapContainer>
		</div>
	);
}

function ChangeCenter({ position }) {
	const map = useMap();
	map.setView(position);
	return null;
}

function DetecteClick() {
	const navigate = useNavigate();
	useMapEvent({
		click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
	});
}
