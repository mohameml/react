// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect } from "react";
import { useState } from "react";

export default function App() {
	const [amount, setAmount] = useState(100);
	const [from, setFrom] = useState("EUR");
	const [to, setTo] = useState("USD");
	const [output, setOutput] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(
		function () {
			async function fetchCurrencyOutput() {
				try {
					setLoading(true);
					const response = await fetch(
						`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
					);

					if (!response.ok)
						throw new Error("Error Networking! Pleas Try again.");

					const data = await response.json();

					if (!data) throw new Error("Error in Fetching Data");

					console.log(data);
					console.log(data.rates[to]);
					setOutput(data.rates[to]);
				} catch (error) {
					console.log(error);
				} finally {
					setLoading(false);
				}
			}

			if (amount == 0 || from == to) {
				setOutput(null);
				return;
			}
			fetchCurrencyOutput();
		},
		[amount, from, to]
	);

	return (
		<div>
			<input
				type="text"
				value={amount}
				onChange={(e) => setAmount(+e.target.value)}
				disabled={loading}
			/>
			<select
				value={from}
				onChange={(e) => setFrom(e.target.value)}
				disabled={loading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<select
				value={to}
				onChange={(e) => setTo(e.target.value)}
				disabled={loading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			{loading && <p>Loading ...</p>}
			{output && !loading && (
				<p>
					{output} {to}
				</p>
			)}
		</div>
	);
}
