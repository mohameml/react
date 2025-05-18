import React from "react";

export default function FlageEmoji({ flag }) {
	if (flag === undefined) return;

	const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
		.map((char) => String.fromCharCode(char - 127397).toLowerCase())
		.join("");
	return (
		<img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
	);
}
