import CreateCustomer from "./features/customers/CreateCustomer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import Customer from "./features/customers/Customer";
import { useSelector } from "react-redux";

function App() {
	const fullName = useSelector((state) => state.customer.fullName);

	if (!fullName) {
		return (
			<div>
				<h1>🏦 The React-Redux Bank ⚛️</h1>
				<CreateCustomer />
			</div>
		);
	}

	return (
		<div>
			<h1>🏦 The React-Redux Bank ⚛️</h1>
			<Customer />
			<AccountOperations />
			<BalanceDisplay />
		</div>
	);
}

export default App;
