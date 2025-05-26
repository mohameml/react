# Cour : **`react-redux`**

## 1. **react-redux : Définition et installation**

-   **Définition:**

    > `react-redux` est la **liaison officielle** entre **Redux** et **React**. Elle permet aux composants React d'accéder à l'état global (le `store`) et de déclencher des actions via des **hooks** dédiés (`useSelector`, `useDispatch`).

-   **Installation:**

    ```bash
    npm install redux react-redux
    ```

    Ou avec yarn :

    ```bash
    yarn add redux react-redux
    ```

## 2. **Architecture Redux dans un projet React**

> L’architecture recommandée est d’utiliser un **dossier `features/`** pour organiser les différentes parties de l’application. Chaque fonctionnalité (ex. `account`, `user`, `cart`, etc.) a son propre réducteur, état initial, et ses actions.

-   **Structure typique :**

    ```
    src/
    ├── app/
    │   └── store.jsx
    ├── features/
    │   ├── user/
    │   │   ├── userSlice.js
    │   │   └── ...
    │   └── account/
    │       ├── accountSlice.js
    │       └── ...
    ├── main.jsx
    └── App.jsx
    ```

-   **Exemple d’un fichier `userSlice.js`**

    ```js
    // features/user/userSlice.js
    const initialState = {
    	name: "",
    	loggedIn: false,
    };

    // Reducer
    export function userReducer(state = initialState, action) {
    	switch (action.type) {
    		case "LOGIN":
    			return { ...state, name: action.payload, loggedIn: true };
    		case "LOGOUT":
    			return { ...state, name: "", loggedIn: false };
    		default:
    			return state;
    	}
    }

    // Action creators
    export const login = (name) => ({ type: "LOGIN", payload: name });
    export const logout = () => ({ type: "LOGOUT" });
    ```

-   **Fichier `store.jsx`:**

    ```js
    // app/store.jsx
    import { createStore, combineReducers } from "redux";
    import { userReducer } from "../features/user/userSlice";
    import { accountReducer } from "../features/account/accountSlice";

    const rootReducer = combineReducers({
    	user: userReducer,
    	account: accountReducer,
    });

    export const store = createStore(rootReducer);
    ```

-   **Intégration avec `Provider` dans `main.jsx`:**

    ```jsx
    // main.jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App.jsx";
    import { Provider } from "react-redux";
    import { store } from "./app/store.jsx";

    ReactDOM.createRoot(document.getElementById("root")).render(
    	<Provider store={store}>
    		<App />
    	</Provider>
    );
    ```

## 3. **Hooks : `useSelector` et `useDispatch`**

-   **`useSelector`:**

    -   **Définition** :

        > Permet à un composant React d’**accéder à une partie de l’état global Redux**.

    -   **Syntaxe** :

        ```js
        import { useSelector } from "react-redux";

        const username = useSelector((state) => state.user.name);
        ```

-   **`useDispatch`:**

    -   **Définition** :

        > Permet de **dispatcher une action** depuis un composant React.

    -   **Syntaxe** :

        ```js
        import { useDispatch } from "react-redux";
        import { login } from "../features/user/userSlice";

        const dispatch = useDispatch();
        dispatch(login("Jean"));
        ```

-   **Exemple global dans un composant:**

    ```jsx
    // components/UserProfile.jsx
    import React from "react";
    import { useSelector, useDispatch } from "react-redux";
    import { login, logout } from "../features/user/userSlice";

    export default function UserProfile() {
    	const username = useSelector((state) => state.user.name);
    	const loggedIn = useSelector((state) => state.user.loggedIn);
    	const dispatch = useDispatch();

    	return (
    		<div>
    			{loggedIn ? (
    				<>
    					<p>Bienvenue {username}</p>
    					<button onClick={() => dispatch(logout())}>
    						Se déconnecter
    					</button>
    				</>
    			) : (
    				<button onClick={() => dispatch(login("Jean"))}>
    					Se connecter
    				</button>
    			)}
    		</div>
    	);
    }
    ```
