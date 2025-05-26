# Cour : **useMemo**

-   **Définition de `useMemo`:**

    > `useMemo` est un **hook** de React qui permet de **mémoriser une valeur calculée**, pour éviter de recalculer cette valeur à chaque rendu si ce n'est pas nécessaire.

-   Il est utilisé pour :

    -   optimiser les performances,
    -   éviter des calculs coûteux inutiles,
    -   ou stabiliser des objets (par exemple à passer en props).

-   **Syntaxe de `useMemo`:**

    ```jsx
    const memoizedValue = useMemo(() => {
    	// Code de calcul
    	return valeurCalculee;
    }, [dependencies]);
    ```

    -   `() => { ... }` : fonction qui retourne la valeur à mémoriser.
    -   `[dependencies]` : tableau des dépendances. Le calcul ne sera refait que si l'une des dépendances change.

-   **Exemple simple:**

    ```jsx
    import React, { useState, useMemo } from "react";

    function SlowSquare({ number }) {
    	// simulate une opération coûteuse
    	const slowSquare = (n) => {
    		console.log("Calcul en cours...");
    		let result = 0;
    		for (let i = 0; i < 1e9; i++) {
    			result += 1; // juste pour consommer du temps
    		}
    		return n * n;
    	};

    	// useMemo évite de refaire le calcul si number n'a pas changé
    	const squared = useMemo(() => slowSquare(number), [number]);

    	return (
    		<div>
    			Le carré de {number} est {squared}
    		</div>
    	);
    }

    function App() {
    	const [number, setNumber] = useState(2);
    	const [count, setCount] = useState(0);

    	return (
    		<div>
    			<SlowSquare number={number} />
    			<button onClick={() => setCount(count + 1)}>
    				Incrémenter compteur : {count}
    			</button>
    			<button onClick={() => setNumber(number + 1)}>
    				Changer nombre : {number}
    			</button>
    		</div>
    	);
    }

    export default App;
    ```

    -   Cliquer sur **Incrémenter compteur** ne relance **pas** le calcul (grâce à `useMemo`).
    -   Cliquer sur **Changer nombre** relance le calcul (car `number` a changé).
