import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./User.module.css";

export default function User() {
	const { user, logout } = useAuth();

	const navigate = useNavigate();

	function handleClick() {
		logout();
		navigate("/");
	}

	if (!user) return null;

	return (
		<div className={styles.user}>
			<img src={user.avatar} alt={user.name} />
			<span>Welcome, {user.name}</span>
			<button onClick={handleClick}>Logout</button>
		</div>
	);
}
