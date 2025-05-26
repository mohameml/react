# Cour : **useCallback**

-   **Définition de `useCallback`:**

    > `useCallback` est un **hook** de React qui permet de **mémoriser une fonction** pour éviter qu’elle ne soit recréée à chaque rendu.

-   C’est utile quand :

    -   Tu passes des fonctions à des composants enfants en `props`,
    -   Tu veux éviter des **rendus inutiles** de ces enfants (surtout avec `React.memo`),
    -   Tu veux garder une **référence stable** d'une fonction.

-   **Syntaxe de `useCallback`:**

    ```jsx
    const memoizedCallback = useCallback(() => {
    	// Code de la fonction
    }, [dependencies]);
    ```

    -   `() => { ... }` : la fonction à mémoriser.
    -   `[dependencies]` : tableau des dépendances. La fonction ne sera recréée que si l’une de ces dépendances change.

-   **Exemple simple:**

    Voici un exemple où un bouton déclenche une fonction mémorisée :

    ```jsx
    import React, { useState, useCallback } from "react";

    function Child({ onClick }) {
    	console.log("Child rendu");
    	return <button onClick={onClick}>Clique-moi</button>;
    }

    const MemoChild = React.memo(Child); // Empêche rerender si props identiques

    function App() {
    	const [count, setCount] = useState(0);

    	// Sans useCallback, la fonction serait recréée à chaque render
    	const handleClick = useCallback(() => {
    		console.log("Bouton cliqué !");
    	}, []); // Pas de dépendance → jamais recréée

    	return (
    		<div>
    			<MemoChild onClick={handleClick} />
    			<button onClick={() => setCount(count + 1)}>
    				Incrémenter compteur : {count}
    			</button>
    		</div>
    	);
    }

    export default App;
    ```

    -   Le composant `MemoChild` **ne se re-render** pas quand `count` change.
    -   Grâce à `useCallback`, la fonction `handleClick` reste **la même référence** entre les rendus → `React.memo` fonctionne.
