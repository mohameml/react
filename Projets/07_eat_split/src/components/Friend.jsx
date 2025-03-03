import Button from "../ui/Button";

export default function Friend({ persone, onSelectedFriend, selectedId }) {
	const isMeSelected = selectedId === persone.id;

	let message;
	let colorName;

	if (persone.balance < 0) {
		message = `You owe ${persone.name} ${-persone.balance}€`;
		colorName = "red";
	} else if (persone.balance > 0) {
		message = `${persone.name} owes you ${persone.balance}€`;
		colorName = "green";
	} else {
		message = `You and ${persone.name} are even`;
		colorName = "";
	}

	return (
		<li>
			<h3>{persone.name}</h3>
			<p className={colorName}>{message}</p>
			<img src={persone.image} alt={`image of ${persone.name}`} />

			<Button onClick={() => onSelectedFriend(persone.id)}>
				{isMeSelected ? "Close" : "Select"}
			</Button>

			{/* <button
					className="button"
					onClick={() => onSelectedFriend(persone.id)}
				>
					{isMeSelected ? "Close" : "Select"}
				</button>
				 */}
		</li>
	);
}
