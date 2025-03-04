import React, { useState } from "react";
import PropTypes from "prop-types";

import Star from "./Star";

const containerStyle = {
	display: "flex",
	alignItems: "center",
	gap: "16px",
};

export default function StarRating({
	maxRating = 5,
	color = "#fcc419",
	size = 48,
	className = "",
	messages = [],
	defaultRating = 0,
	onSetRating,
}) {
	const [rating, setRating] = useState(defaultRating);
	const [tempRating, setTempRating] = useState(0);

	if (messages.length !== 0 && messages.length != maxRating) {
		throw new Error("length of messages must be equal to maxRating");
	}

	if (typeof defaultRating !== "number") {
		throw new Error("defaultRating must be a number");
	}

	if (defaultRating > maxRating) {
		throw new Error("defaultRating must be less then maxRating");
	}

	const handleClick = (index) => {
		setRating(index);
		if (onSetRating) onSetRating(index);
	};

	return (
		<div style={containerStyle} className={className}>
			<div
				style={{
					display: "flex",
				}}
			>
				{[...Array(maxRating)].map((_, i) => (
					<Star
						key={i}
						onClick={() => handleClick(i + 1)}
						full={
							tempRating ? i + 1 <= tempRating : i + 1 <= rating
						}
						onHoverIn={() => setTempRating(i + 1)}
						onHoverOut={() => setTempRating(0)}
						color={color}
						size={size}
					/>
				))}
			</div>
			<p
				style={{
					lineHeight: "1",
					margin: "0",
					color,
					fontSize: `${size / 1.5}px`,
				}}
			>
				{messages.length !== 0
					? messages[tempRating ? tempRating - 1 : rating - 1]
					: tempRating || rating || ""}
			</p>
		</div>
	);
}

StarRating.propTypes = {
	maxRating: PropTypes.number,
	color: PropTypes.string,
	size: PropTypes.number,
	className: PropTypes.string,
	messages: PropTypes.arrayOf(PropTypes.string),
	defaultRating: PropTypes.number,
	onSetRating: PropTypes.func,
};
