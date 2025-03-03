export default function Card({ question, isSelected, onClick }) {
	return (
		<div onClick={onClick} className={isSelected ? "selected" : ""}>
			<p>{isSelected ? question.answer : question.question}</p>
		</div>
	);
}
