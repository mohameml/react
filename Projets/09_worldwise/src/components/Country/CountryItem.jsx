import styles from "./CountryItem.module.css";
// import { flagemojiToPNG } from "../../utils/utils";
import FlageEmoji from "../FlagEmoji/FlageEmoji";

function CountryItem({ country }) {
	return (
		<li className={styles.countryItem}>
			<span>
				{/* {flagemojiToPNG(country.emoji)} */}
				<FlageEmoji flag={country.emoji} />
			</span>
			<span>{country.country}</span>
		</li>
	);
}

export default CountryItem;
