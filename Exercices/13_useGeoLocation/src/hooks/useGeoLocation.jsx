import { useState } from "react";

export function useGeolocation(callback) {
	const [isLoading, setIsLoading] = useState(false);
	const [position, setPosition] = useState({});
	const [error, setError] = useState(null);

	function getPosition() {
		callback?.();

		if (!navigator.geolocation)
			return setError("Your browser does not support geolocation");

		setIsLoading(true);
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				setPosition({
					lat: pos.coords.latitude,
					lng: pos.coords.longitude,
				});
				setIsLoading(false);
			},
			(error) => {
				setError(error.message);
				setIsLoading(false);
			}
		);
	}

	return {
		isLoading,
		position,
		getPosition,
		error,
	};
}
