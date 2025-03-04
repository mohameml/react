import React, { useState } from "react";
import Button from "../../UI/Button";

export default function Box({ children }) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="box">
			<Button onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? "-" : "+"}
			</Button>
			{isOpen && children}
		</div>
	);
}
