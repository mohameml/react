import { useState } from "react";
import "./App.css";

const faqs = [
	{
		title: "Where are these chairs assembled?",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
		id: 1,
	},
	{
		title: "How long do I have to return my chair?",
		text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
		id: 2,
	},
	{
		title: "Do you ship to countries outside the EU?",
		text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
		id: 3,
	},
];

export default function App() {
	return (
		<div>
			<Accordion data={faqs} />
		</div>
	);
}

function Accordion({ data }) {
	const [selectedId, setSelectedId] = useState(null);

	const handelClick = (id) => {
		setSelectedId((prevId) => (prevId === id ? null : id));
	};

	return (
		<div className="accordion">
			{data.map((item) => (
				<AccordionItem
					key={item.id}
					num={item.id}
					title={item.title}
					isSelected={item.id === selectedId}
					onClick={() => handelClick(item.id)}
				>
					{item.text}
				</AccordionItem>
			))}
			<AccordionItem
				key={23}
				num={23}
				title={"Example 01"}
				isSelected={23 === selectedId}
				onClick={() => handelClick(23)}
			>
				<p>Allows React developers to:</p>
				<ul>
					<li>Break up UI into components</li>
					<li>Make components reusuable</li>
					<li>Place state efficiently</li>
				</ul>
			</AccordionItem>
		</div>
	);
}

function AccordionItem({ num, title, isSelected, onClick, children }) {
	// const [isOpen, setIsOpen] = useState(false);

	// const handelClick = () => {
	//   setIsOpen((is) => !is);
	// };

	return (
		<div className={`item ${isSelected ? "open" : ""}`} onClick={onClick}>
			<p className="number">{num <= 9 ? `0${num}` : num}</p>
			<p className="title">{title}</p>
			<p className="icon">{isSelected ? "-" : "+"}</p>
			{isSelected && (
				<div className="content-box">
					<ul>{children}</ul>
				</div>
			)}
		</div>
	);
}
