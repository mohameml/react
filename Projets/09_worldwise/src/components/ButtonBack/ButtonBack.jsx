import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function ButtonBack() {
	const navigate = useNavigate();

	return (
		<Button
			type="back"
			onClick={(e) => {
				e.preventDefault();
				navigate(-1);
			}}
		>
			&larr; Back
		</Button>
	);
}
