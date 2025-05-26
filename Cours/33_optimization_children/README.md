# Cour : **Technique d'Optimisation avec `children`**

-   **Description:**

    > Quand un composant parent re-rend, tous ses enfants re-rendent aussi, **même si leurs props ne changent pas**. Cela peut être coûteux si l'enfant est un composant lourd (`<ExpensiveComponent />`).

-   **Solution :**

    > Passer le composant coûteux en tant que **`children`** via **props**.

-   **Exemple:**

    -   à chaque click du `button` le component `ExpensiveComponent` se re-render ce qui pose une probléme d'optimisation.

    ```jsx
    // pb d'optimization :
    const App = () => {
    	const [count, setCount] = useState(0);

    	return (
    		<div>
    			<button onClick={() => setCount(count + 1)}>
    				Count: {count}
    			</button>
    			<ExpensiveComponent />
    		</div>
    	);
    };
    ```

-   **Solution:**

    ```jsx
    const Counter = ({ children }) => {
    	const [count, setCount] = useState(0);

    	return (
    		<div>
    			<button onClick={() => setCount(count + 1)}>
    				Count: {count}
    			</button>
    			{children}
    		</div>
    	);
    };

    const App = () => {
    	return (
    		<Counter>
    			<ExpensiveComponent />
    		</Counter>
    	);
    };
    ```

    -   Clic sur le bouton → `Parent` re-rend, mais **`ExpensiveComponent` ne re-rend pas**.
