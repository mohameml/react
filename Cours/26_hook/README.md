# Cour 26 : **Hook**

## 1. **Introduction:**

> En React, un **Hook** est une fonction spéciale qui te permet **d’utiliser l’état (state) et d’autres fonctionnalités de React dans des composants fonctionnels**, sans avoir besoin de les convertir en classes.

-   Avant les Hooks (introduits en React 16.8), seul un composant **class** pouvait avoir de l’état local ou utiliser le cycle de vie (par exemple, `componentDidMount`).

-   Voici les principaux concepts :

    ✅ **useState**
    Permet d’ajouter un état local :

    ```js
    import { useState } from "react";

    function Counter() {
    	const [count, setCount] = useState(0); // état initial = 0

    	return (
    		<button onClick={() => setCount(count + 1)}>
    			Cliquez : {count}
    		</button>
    	);
    }
    ```

    ✅ **useEffect**
    Permet de gérer les effets de bord (side effects), comme les requêtes API ou le DOM :

    ```js
    import { useEffect } from "react";

    function Timer() {
    	useEffect(() => {
    		const timer = setInterval(() => {
    			console.log("tick");
    		}, 1000);
    		return () => clearInterval(timer); // nettoyage à la fin
    	}, []); // dépendances : [] = exécuté une seule fois (montage)
    }
    ```

    ✅ **useContext, useReducer, useMemo, useCallback, useRef**
    D’autres Hooks permettent de gérer le contexte global, des états plus complexes, ou des optimisations de performance.

-   **Règles des Hooks** :

    -   Tu dois **les appeler uniquement au niveau supérieur** (pas dans des boucles, conditions ou fonctions imbriquées).

    -   Tu dois **les appeler uniquement dans des composants fonctionnels** ou dans d’autres Hooks personnalisés (pas dans des fonctions classiques).

## 2. **custom hooks**

-   **Définition**

    > Un **custom hook** est une fonction JavaScript dont le nom commence par `use` et qui peut appeler d’autres hooks React (comme `useState`, `useEffect`, etc.).
    > Il permet **d’extraire** et **réutiliser** de la logique entre plusieurs composants.

-   **Exemple simple :**

    ```js
    function useCounter(initialValue = 0) {
    	const [count, setCount] = React.useState(initialValue);
    	const increment = () => setCount((c) => c + 1);
    	const decrement = () => setCount((c) => c - 1);
    	return { count, increment, decrement };
    }
    ```

-   **Propriétés**

    -   **Nom** : commence toujours par `use` (pour que React applique les règles des hooks).

    -   **Composabilité** : peut utiliser d’autres hooks à l’intérieur.

    -   **Pure logique** : il ne retourne **pas** de JSX, seulement des valeurs, des états, des fonctions.

    -   **Réutilisable** : permet de factoriser des comportements communs (par ex. gestion de formulaire, appel API, gestion d’animations…).

    -   **Respect des règles des hooks** : les hooks doivent être appelés **au même niveau**, pas dans des conditions ou boucles.

-   **Use cases typiques**

    -   Encapsuler des appels d’API (`useFetch`, `useUserData`).
    -   Partager des états complexes (`useForm`, `useTheme`).
    -   Isoler des comportements (`useHover`, `useWindowSize`, `useDebounce`).
    -   Ajouter des abonnements (`useWebSocket`, `useEventListener`).

-   **Exemple 1: useFetch (appel API)**

    ```js
    function useFetch(url) {
    	const [data, setData] = React.useState(null);
    	const [loading, setLoading] = React.useState(true);
    	const [error, setError] = React.useState(null);

    	React.useEffect(() => {
    		setLoading(true);
    		fetch(url)
    			.then((res) => res.json())
    			.then(setData)
    			.catch(setError)
    			.finally(() => setLoading(false));
    	}, [url]);

    	return { data, loading, error };
    }
    ```

-   **Exemple 2: useWindowSize (suivi taille fenêtre)**

    ```js
    function useWindowSize() {
    	const [size, setSize] = React.useState({
    		width: window.innerWidth,
    		height: window.innerHeight,
    	});

    	React.useEffect(() => {
    		const handleResize = () =>
    			setSize({
    				width: window.innerWidth,
    				height: window.innerHeight,
    			});
    		window.addEventListener("resize", handleResize);
    		return () => window.removeEventListener("resize", handleResize);
    	}, []);

    	return size;
    }
    ```
