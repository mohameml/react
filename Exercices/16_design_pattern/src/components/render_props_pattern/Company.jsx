import { faker } from "@faker-js/faker";
import { useState } from "react";

const companies = Array.from({ length: 15 }, () => {
	return {
		companyName: faker.company.name(),
		phrase: faker.company.catchPhrase(),
	};
});

export default function CompanyItem({ company, defaultVisibility }) {
	const [isVisible, setIsVisisble] = useState(defaultVisibility);

	return (
		<li
			className="company"
			onMouseEnter={() => setIsVisisble(true)}
			onMouseLeave={() => setIsVisisble(false)}
		>
			<p className="company-name">{company.companyName}</p>
			{isVisible && (
				<p className="company-phrase">
					<strong>About:</strong> {company.phrase}
				</p>
			)}
		</li>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export { companies };
