# Cour : **redux**

## 1. **Intro:**

-   **Qu’est-ce que Redux ?:**

    > Redux est une **bibliothèque JavaScript de gestion d’état** prévisible. Elle permet de stocker l’ensemble de l’état de l’application dans un **store centralisé**, facilitant ainsi la gestion, la traçabilité et le débogage de l’état.

    > Redux est souvent utilisé avec React, mais il peut parfaitement être utilisé **sans React**, dans n’importe quelle application JavaScript.

-   **Installation:**

    Pour installer Redux dans un projet Node.js :

    ```bash
    npm install redux
    ```

    Ou avec yarn :

    ```bash
    yarn add redux
    ```

## 2. **Implémentation des composants de Redux:**

-   **initState**

    -   **Définition** :
        L’`initState` est l’état initial de l’application. Il sert de point de départ pour le reducer.

    -   **Syntaxe** :

        ```js
        const initialState = {
        	count: 0,
        	isLoggedIn: false,
        };
        ```

-   **reducer**

    -   **Définition** :
        Un **reducer** est une fonction pure qui prend l’état actuel et une action, et retourne un **nouvel état**. Il ne modifie jamais directement l’ancien état.

    -   **Syntaxe** :

        ```js
        function reducer(state = initialState, action) {
        	switch (action.type) {
        		case "INCREMENT":
        			return { ...state, count: state.count + 1 };
        		default:
        			return state;
        	}
        }
        ```

-   **action creators**

    -   **Définition** :
        Un **action creator** est une fonction qui retourne un objet **action**, c’est-à-dire une description de ce que l’on souhaite faire.

    -   **Syntaxe** :

        ```js
        const increment = () => ({ type: "INCREMENT" });
        const login = () => ({ type: "LOGIN" });
        ```

-   **rootReducer: `combineReducers`**

    -   **Definition:**

        `combineReducers :`une fonction fournie par Redux qui permet de combiner plusieurs reducers en un seul

    -   **Syntaxe** :

        ```js
        import { combineReducers } from "redux";

        const rootReducer = combineReducers({
        	user: userReducer,
        	counter: counterReducer,
        });
        ```

-   **store**

    -   **Définition** :
        Le **store** est le conteneur global de Redux. Il contient l’état et permet de **distribuer les actions** et **accéder à l’état** via les méthodes `dispatch()` et `getState()`.

    -   **Syntaxe** :

        ```js
        import { createStore } from "redux";

        const store = createStore(reducer);
        ```

-   **getState()**

    -   **Définition** :
        Méthode du store qui retourne l’**état actuel**.

    -   **Syntaxe** :

        ```js
        store.getState();
        ```

-   **dispatch()**

    -   **Définition** :
        Méthode du store permettant d’**envoyer une action**. Cela déclenche l’exécution du reducer et la mise à jour de l’état.

    -   **Syntaxe** :

        ```js
        store.dispatch({ type: "INCREMENT" });
        ```

## 3. **Exemple global complet:**

```js
// 1. Initial State
const initialState = {
	count: 0,
	isLoggedIn: false,
};

// 2. Reducer
function reducer(state = initialState, action) {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, count: state.count + 1 };
		case "LOGIN":
			return { ...state, isLoggedIn: true };
		case "LOGOUT":
			return { ...state, isLoggedIn: false };
		default:
			return state;
	}
}

// 3. Action Creators
const increment = () => ({ type: "INCREMENT" });
const login = () => ({ type: "LOGIN" });
const logout = () => ({ type: "LOGOUT" });

// 4. Création du Store
import { createStore } from "redux";
const store = createStore(reducer);

// 5. Utilisation
console.log("État initial :", store.getState());

store.dispatch(increment());
console.log("Après INCREMENT :", store.getState());

store.dispatch(login());
console.log("Après LOGIN :", store.getState());

store.dispatch(logout());
console.log("Après LOGOUT :", store.getState());
```
