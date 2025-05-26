# Cour : **`redux-thunk`**

## 1. **Définition:**

> **Redux Thunk** est un **middleware** pour Redux qui permet d'écrire des **action creators asynchrones**.

-   Grâce à `redux-thunk`, **tu peux retourner une fonction au lieu d’un objet** dans un action creator.

-   Cette fonction reçoit deux arguments :

    -   `dispatch` (pour envoyer d'autres actions),
    -   `getState` (pour lire le state global si nécessaire).

-   Cela permet :

    -   de faire des appels API,
    -   de déclencher des actions conditionnellement,
    -   d'enchaîner plusieurs dispatchs dans une même action.

## 2. **Installation:**

-   Avec npm :

    ```bash
    npm install redux-thunk
    ```

-   **config:**

    Ensuite, tu dois connecter le middleware au **store Redux** :

    ```js
    import { createStore, applyMiddleware } from "redux";
    import thunk from "redux-thunk";
    import rootReducer from "./reducers";

    const store = createStore(rootReducer, applyMiddleware(thunk));
    ```

## 3. **Syntaxe – Action Creator avec `redux-thunk`:**

-   Sans redux-thunk (synchronous only) :

    ```js
    // Ceci est une action normale
    const increment = () => {
    	return { type: "INCREMENT" };
    };
    ```

-   Avec redux-thunk (asynchrone possible) :

    ```js
    // Ceci est une action "thunk"
    const fetchData = () => {
    	return async (dispatch, getState) => {
    		dispatch({ type: "FETCH_DATA_REQUEST" });

    		try {
    			const response = await fetch("https://api.example.com/data");
    			const data = await response.json();

    			dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    		} catch (error) {
    			dispatch({ type: "FETCH_DATA_FAILURE", error: error.message });
    		}
    	};
    };
    ```

## 4. **Exemple complet:**

-   **Reducer :**

    ```js
    const initialState = {
    	loading: false,
    	data: [],
    	error: null,
    };

    function dataReducer(state = initialState, action) {
    	switch (action.type) {
    		case "FETCH_DATA_REQUEST":
    			return { ...state, loading: true };
    		case "FETCH_DATA_SUCCESS":
    			return { ...state, loading: false, data: action.payload };
    		case "FETCH_DATA_FAILURE":
    			return { ...state, loading: false, error: action.error };
    		default:
    			return state;
    	}
    }
    ```

-   **Action Creator :**

    ```js
    export const fetchData = () => {
    	return async (dispatch, getState) => {
    		dispatch({ type: "FETCH_DATA_REQUEST" });

    		try {
    			const res = await fetch(
    				"https://jsonplaceholder.typicode.com/posts"
    			);
    			const data = await res.json();
    			dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    		} catch (err) {
    			dispatch({ type: "FETCH_DATA_FAILURE", error: err.message });
    		}
    	};
    };
    ```

-   **Dans un composant React :**

    ```js
    import React, { useEffect } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { fetchData } from "./actions";

    function Posts() {
    	const dispatch = useDispatch();
    	const { loading, data, error } = useSelector((state) => state.posts);

    	useEffect(() => {
    		dispatch(fetchData());
    	}, [dispatch]);

    	if (loading) return <p>Chargement...</p>;
    	if (error) return <p>Erreur : {error}</p>;

    	return (
    		<ul>
    			{data.map((post) => (
    				<li key={post.id}>{post.title}</li>
    			))}
    		</ul>
    	);
    }
    ```
