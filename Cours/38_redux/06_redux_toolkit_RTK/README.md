# Cour : **Redux Toolkit**

## 1. **Définition:**

> **Redux Toolkit (RTK)** est la **boîte à outils officielle** de Redux, conçue pour simplifier l'utilisation de Redux en réduisant le boilerplate (code répétitif) et en intégrant les bonnes pratiques par défaut (immutabilité, middleware, DevTools, etc.).

-   Redux Toolkit facilite la création du `store`, des `actions`, des `reducers` et la gestion des effets asynchrones.

-   **Avantages par rapport à Redux classique:**

    | Redux Classique                        | Redux Toolkit                             |
    | -------------------------------------- | ----------------------------------------- |
    | `createStore` + configuration manuelle | `configureStore` tout-en-un               |
    | Actions et reducers écrits à la main   | Générés automatiquement via `createSlice` |
    | `redux-thunk` à installer séparément   | Inclus par défaut                         |
    | DevTools à configurer manuellement     | Intégrés automatiquement                  |
    | Verbosité importante                   | Moins de code, plus clair                 |
    | Risques de mutation de l'état          | Immer intégré (mutation sécurisée)        |

-   **Installation:**

    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

## 2. **Création du Store avec `configureStore`:**

-   **Définition:**

    > `configureStore` est une fonction de Redux Toolkit qui permet de créer un store Redux avec une **configuration prête à l’emploi** :

    -   `redux-thunk` intégré par défaut pour gérer les appels asynchrones.
    -   Intégration automatique avec Redux DevTools.
    -   Combine automatiquement plusieurs slices dans un reducer global.

-   **Syntaxe:**

    ```js
    import { configureStore } from "@reduxjs/toolkit";
    import myReducer from "./mySlice";

    const store = configureStore({
    	reducer: {
    		myFeature: myReducer, // nom du slice : reducer associé
    	},
    });
    ```

-   **Exemple:**

    ```js
    // store.js
    import accountReducer from "./features/accounts/accountSlice";
    import customerReducer from "./features/customers/customerSlice";

    import { configureStore } from "@reduxjs/toolkit";

    const store = configureStore({
    	reducer: {
    		account: accountReducer,
    		customer: customerReducer,
    	},
    });
    ```

## 3. **`createSlice`:**

-   **Définition:**

    > `createSlice` est une fonction de Redux Toolkit qui permet de **créer un reducer, un state initial et des actions automatiquement** à partir d’un objet de configuration.

    -   Cela évite de devoir créer manuellement les types d’action, les créateurs d’action (`action creators`) et les `reducers`.

-   **Syntaxe:**

    ```js
    import { createSlice } from "@reduxjs/toolkit";

    const mySlice = createSlice({
    	name: "nom_du_slice", // Nom utilisé dans le type d’action
    	initialState: {}, // Valeur initiale de l’état
    	reducers: {
    		actionName1: {

                prepare(var1 , var2 , var3) {
                    return {
                        payload : {var1 , var2 , var3}
                    }
                },
                reducer(state, action) => {
                    // logique pour modifier le state
                }

            },
    		actionName2: (state, action) => {
    			// autre logique
    		},
    	},
    });

    export const { actionName1, actionName2 } = mySlice.actions;
    export default mySlice.reducer;
    ```

    -   **createSlice** : Fonction de Redux Toolkit qui permet de créer facilement un "slice" de l'état global. Elle génère automatiquement les actions et le reducer associés.

    -   **name** : Nom unique du slice. Il est utilisé comme préfixe pour les types des actions générées (ex. `"nom_du_slice/actionName1"`).

    -   **initialState** : État initial de ce slice. Il peut être un objet, un tableau, ou toute autre structure de données, selon les besoins.

    -   **reducers** : Objet contenant les différentes fonctions (appelées "case reducers") qui définissent comment l'état doit être modifié en réponse aux actions.

    -   **prepare** : Fonction optionnelle qui permet de prétraiter les arguments de l'action avant qu’ils ne soient passés au reducer. Elle retourne un objet contenant au minimum une propriété `payload`.

    -   **reducer** : Fonction qui reçoit l’état actuel et une action, et retourne un nouvel état modifié. Elle contient la logique métier de mise à jour de l’état.

    -   **actions** : Objets/actions générés automatiquement à partir des noms de fonctions définis dans `reducers`. Ils peuvent être importés pour être dispatchés dans l'application.

    -   **mySlice.reducer** : Le reducer principal exporté par le slice, à connecter au store Redux. Il contient la logique de traitement des actions définies dans le slice.

-   **Exemple:**

    ```js
    // counterSlice.js
    import { createSlice } from "@reduxjs/toolkit";

    const counterSlice = createSlice({
    	name: "counter", // Nom du slice (utilisé pour les actions)
    	initialState: { value: 0 }, // État initial

    	reducers: {
    		increment: (state) => {
    			state.value += 1; // Grâce à Immer, mutation possible
    		},
    		decrement: (state) => {
    			state.value -= 1;
    		},
    		incrementByAmount: (state, action) => {
    			state.value += action.payload; // Accès à la valeur envoyée
    		},
    	},
    });

    // Export des actions générées automatiquement
    export const { increment, decrement, incrementByAmount } =
    	counterSlice.actions;

    // Export du reducer
    export default counterSlice.reducer;
    ```

    ```jsx
    import React from "react";
    import { useSelector, useDispatch } from "react-redux";
    import { increment, decrement, incrementByAmount } from "./counterSlice";

    function Counter() {
    	const count = useSelector((state) => state.counter.value); // accès au state
    	const dispatch = useDispatch();

    	return (
    		<>
    			<h1>{count}</h1>
    			<button onClick={() => dispatch(increment())}>+1</button>
    			<button onClick={() => dispatch(decrement())}>-1</button>
    			<button onClick={() => dispatch(incrementByAmount(5))}>
    				+5
    			</button>
    		</>
    	);
    }

    export default Counter;
    ```

-   **Exemple : Differance entre `Redux Classic` et `Redux Toolkit`:**

    -   **Redux Toolkit:**

        ```jsx
        import { createSlice } from "@reduxjs/toolkit";

        // ===============  initalState ===============
        const initalState = {
        	balance: 0,
        	loan: 0,
        	loanPurpose: "",
        };

        const accountSlice = createSlice({
        	name: "account",
        	initialState: initalState,
        	reducers: {
        		deposit(state, action) {
        			state.balance += action.payload;
        		},
        		withdraw(state, action) {
        			state.balance -= action.payload;
        		},
        	},
        });

        export const { deposit, withdraw, requestLoan, payLoan } =
        	accountSlice.actions;

        export default accountSlice.reducer;
        ```

    -   **Redux Classic:**

        ```jsx
        // ========================= Redux Classic =========================

        // ===============  initalState ===============
        const initalState = {
        	balance: 0,
        	loan: 0,
        	loanPurpose: "",
        };

        // ========== reducer ===================

        export default function accountReducer(state = initalState, action) {
        	switch (action.type) {
        		case "account/deposit":
        			return {
        				...state,
        				balance: state.balance + action.payload,
        				isLoading: false,
        			};

        		case "account/withdraw":
        			return {
        				...state,
        				balance: state.balance - action.payload,
        			};
        		default:
        			return initalState;
        	}
        }

        // =================== Actions =====================

        function deposit(amount, currency) {
        	if (currency === "USD")
        		return { type: "account/deposit", payload: amount };
        }

        function withdraw(amount) {
        	return { type: "account/withdraw", payload: amount };
        }

        export { deposit, withdraw };
        ```
