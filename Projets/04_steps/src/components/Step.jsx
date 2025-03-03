import React from "react";

export default function Step({ currStep, step }) {
	return <div className={`${currStep >= step ? "active" : ""}`}>{step}</div>;
}
