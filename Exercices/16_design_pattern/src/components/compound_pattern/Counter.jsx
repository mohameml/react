import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

/*
- 1. create the Context 
- 2. create parent Component 
- 3. creaate the Child Component 
- 4. Add the child components  as properiers for the parent components 

*/

const CounterContext = createContext();

function Counter({ children }) {
	const [count, setCount] = useState(0);

	const increase = () => setCount((c) => c + 1);
	const decrease = () => setCount((c) => c - 1);

	return (
		<CounterContext.Provider
			value={{
				count,
				increase,
				decrease,
			}}
		>
			<span>{children}</span>
		</CounterContext.Provider>
	);
}

function Count() {
	const { count } = useContext(CounterContext);

	return <span>{count}</span>;
}

function Label({ children }) {
	return <span>{children}</span>;
}

function Increase({ icon }) {
	const { increase } = useContext(CounterContext);

	return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
	const { decrease } = useContext(CounterContext);

	return <button onClick={decrease}>{icon}</button>;
}

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
