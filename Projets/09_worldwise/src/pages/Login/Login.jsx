import styles from "./Login.module.css";
import PageNav from "../../components/PageNav/PageNav";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message/Message";

export default function Login() {
	// PRE-FILL FOR DEV PURPOSES
	const [email, setEmail] = useState("jack@example.com");
	const [password, setPassword] = useState("qwerty");

	const { isAuth, login, errorAuth } = useAuth();

	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();

		if (email && password) login(email, password);
	};

	useEffect(
		function () {
			if (isAuth) {
				navigate("/app", { replace: true });
			}
		},
		[isAuth, navigate]
	);

	return (
		<main className={styles.login}>
			<PageNav />
			<form className={styles.form}>
				<div className={styles.row}>
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>

				<div className={styles.row}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>

				<div>
					{/* <button>Login</button> */}
					<Button type="primary" onClick={handleClick}>
						Login
					</Button>
				</div>
			</form>
			{errorAuth && <Message message={errorAuth} />}
		</main>
	);
}
