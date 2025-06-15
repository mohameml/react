import Counter from "./Counter";

export default function AppCompound() {
	return (
		<div>
			<h1>Compound Component Pattern</h1>
			{/* <Counter
				iconIncrease="+"
				iconDecrease="-"
				label="My NOT so flexible counter"
				hideLabel={false}
				hideIncrease={false}
				hideDecrease={false}
			/> */}
			<Counter>
				<Counter.Label>
					My super flexbile counter built with the Compound Component
					Pattern
				</Counter.Label>
				<Counter.Count />
				<Counter.Decrease icon="-" />
				<Counter.Increase icon="+" />
			</Counter>
		</div>
	);
}
