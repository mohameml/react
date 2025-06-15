import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<div
			style={{
				margin: "20px",
				border: "2px solid #3498db",
				padding: "20px",
			}}
		>
			<ul
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Link to="/render_props_pattern">Render Props Pattern</Link>
				<Link to="/HOC_pattern">HOC Pattern</Link>
				<Link to="/compound_pattern">Compound Component Pattern</Link>
			</ul>
		</div>
	);
}
