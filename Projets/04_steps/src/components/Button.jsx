export default function Button({ bgColor, textColor, handelClick, children }) {
	return (
		<button
			style={{
				backgroundColor: bgColor,
				color: textColor,
			}}
			onClick={handelClick}
		>
			{children}
		</button>
	);
}
