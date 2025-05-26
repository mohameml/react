# Cour : **memo**

-   **Définition de `React.memo`:**

    > `React.memo` est une **fonction de haut niveau** (HOC : Higher-Order Component) qui permet de **mémoriser** (cacher) un composant React **fonctionnel**. Il empêche la ré-exécution du composant **si ses props n'ont pas changé**.

    > C’est une forme d’**optimisation des performances** par **mémoïsation**.

-   **Cas d’usage:** Utiliser `React.memo` est utile lorsque :

    -   Ton composant est **pur** (il rend toujours le même résultat avec les mêmes props).
    -   Le composant est **re-rendu trop souvent** inutilement (par exemple, à cause de la re-rendu du parent).
    -   Le composant est **coûteux en performance** (grands arbres DOM, appels complexes, etc).

-   **Syntaxe:**

    ```jsx
    import React from "react";

    const MonComposant = (props) => {
    	// logiques de rendu
    	return <div>{props.message}</div>;
    };

    export default React.memo(MonComposant);
    ```

-   **Exemple :**

    -   **Sans `memo` : re-render inutile**

        ```jsx
        const App = () => {
        	const [count, setCount] = React.useState(0);
        	return (
        		<>
        			<button onClick={() => setCount(count + 1)}>
        				Incrémenter
        			</button>
        			<HeavyComponent text="Hello" />
        		</>
        	);
        };
        ```

        -   À chaque clic, même si `text` ne change pas, `HeavyComponent` se re-render.

    -   **Avec `memo` : évite les re-render inutiles**

        ```jsx
        const HeavyComponent = React.memo(({ text }) => {
        	console.log("Message render"); // Ne s'affiche plus inutilement
        	return <p>{text}</p>;
        });
        ```

-   **À retenir:**

    | ⚠️ Ce que `memo` NE fait pas                           | ✅ Ce que `memo` fait                                                        |
    | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
    | Ne bloque pas les changements de state ou context      | Empêche le re-render si les props sont strictement identiques                |
    | Ne fonctionne que pour les **composants fonctionnels** | Utile avec composants "feuilles" (leaf : un composant qui n’a pas d’enfants) |
    | Ne remplace pas l'optimisation globale                 | Optimisation fine et locale                                                  |
