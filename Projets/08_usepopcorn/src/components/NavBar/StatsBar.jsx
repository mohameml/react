import React from "react";

export default function StatsBar({ length }) {
	return (
		<p className="num-results">
			Found <strong>{length}</strong> results
		</p>
	);
}
