# cour 14 : **système de Context de React:**

## 1. **Introduction:**

-   **Description:**

    > `Le système de Context` de React est une fonctionnalité puissante qui permet de partager des données à travers les composants, sans avoir à passer explicitement les props à chaque niveau de l'arborescence des composants. Il est particulièrement utile lorsque des données doivent être accessibles par plusieurs composants à différents niveaux de la hiérarchie, comme les thèmes, les utilisateurs authentifiés, ou les paramètres de configuration.

    -   L'objectif principal de Context est de résoudre le problème de `prop drilling`, où les props doivent être transmises manuellement à travers plusieurs niveaux de composants, même si seuls quelques composants au niveau inférieur en ont besoin. Context permet de contourner cette limitation en fournissant un moyen direct de transmettre des données à tout composant dans l'arborescence sans avoir à les passer explicitement à chaque niveau.

-   **Étapes d'utilisation de Context:**

    1. **Créer le Context:**

        > La première étape consiste à créer le Context. Cela se fait généralement en appelant `createContext()` et en exportant le résultat.

    2. **Définir un Consumer du Context avec `<Context.Provider>`**

        > Le composant `Provider` du Context est utilisé pour encapsuler la partie de l'arborescence des composants qui aura accès aux données du Context. Le `Provider` accepte une prop `value` qui représente les données à partager. Tous les composants enfants du `Provider` auront accès aux données fournies par le Context.

    3. **Utilisation avec `useContext`:**

        > Pour consommer les données fournies par le Context, les composants peuvent utiliser le hook `useContext` . `useContext` permet de récupérer directement les données du Context, facilitant ainsi leur utilisation au sein des composants.

## 2. **Création d'un `context`:**

-   **Description:**

    > La création d'un Context en React est une opération simple qui implique la création d'un objet de Context à l'aide de `createContext()`.

    -   Cet objet contient deux composants : `Provider` et `Consumer`.

    -   Le `Provider` est utilisé pour fournir des données à ses enfants, et le `Consumer` est utilisé pour consommer ces données. De plus, avec les hooks introduits dans React 16.8, vous pouvez utiliser `useContext` pour accéder aux données du Context dans des composants fonctionnels.

-   **Syntaxe:**

    Voici la syntaxe de base pour créer un Context en React :

    ```jsx
    import { createContext } from "react";

    // Création d'un Context avec une valeur par défaut (optionnelle)
    const MyContext = createContext(defaultValue);

    export default MyContext;
    ```

    -   `defaultValue:` La valeur par défaut du contexte

    -   La fonction `createContext` retourne un objet de contexte qui contient deux composants principaux :

        -   `Provider` : Un composant qui permet de fournir la valeur du contexte à ses enfants. Il accepte une prop `value` qui sera partagée avec tous les composants descendants qui consomment ce contexte.

        -   `Consumer` : Un composant qui permet de consommer la valeur du contexte. Dans les composants fonctionnels, il est souvent remplacé par le hook `useContext` pour une utilisation plus simple.

-   **Exemple:**

    **Créer le Context** Dans un fichier nommé `MyContext.js` :

    ```jsx
    import { createContext } from "react";

    // Création du Context avec une valeur par défaut (par exemple, un objet vide)
    const MyContext = createContext();

    export default MyContext;
    ```

## 3. **`context Provider`:**

-   **Description:**

    > Le `Provider` d'un contexte en React est un composant qui permet de fournir des données à tous les composants descendants qui consomment ce contexte. Il utilise une prop spéciale appelée `value` pour passer ces données. Tous les composants descendants peuvent accéder à ces données en utilisant le hook `useContext` (dans les composants fonctionnels) ou le composant `Consumer` (dans les composants de classe ou fonctionnels).

-   **Syntaxe:**

    ```jsx
    <MyContext.Provider value={/* valeur à partager */}>
    {/* Composants enfants */}
    </MyContext.Provider>
    ```

    -   **Attribut `value`** :

        Cet attribut est utilisé pour définir la valeur du contexte que vous souhaitez partager avec les composants descendants. Cette valeur peut être de n'importe quel type : un objet, une chaîne de caractères, un nombre, une fonction, etc. Lorsque la valeur change, tous les composants qui consomment ce contexte seront re-rendus avec la nouvelle valeur.

-   **Détails :**

    -   **Niveau de la Hiérarchie** : Le `Provider` peut être utilisé à n'importe quel niveau de la hiérarchie des composants. Tous les composants descendants (enfants, petits-enfants, etc.) auront accès aux données du contexte via le `Provider`.

    -   **Multiples Providers** : Vous pouvez imbriquer plusieurs `Provider` de différents contextes pour fournir différents types de données à différentes parties de votre application.

    -   **Mise à Jour** : Lorsque la valeur du contexte change (par exemple, en appelant `setSharedState` dans l'exemple ci-dessus), tous les composants consommateurs seront re-rendus automatiquement avec la nouvelle valeur.



## 4. **utilisation d'un context:`useContext`**

-   **Description:**

    > Le hook `useContext` est une fonctionnalité de React qui permet de consommer les données d'un contexte dans un composant fonctionnel. Il simplifie l'accès aux valeurs du contexte en éliminant le besoin d'utiliser le composant `Consumer`. Avec `useContext`, vous pouvez directement accéder aux données partagées par un `Provider` sans devoir passer par une structure imbriquée.

-   **Syntaxe:**

    ```javascript
    const contextValue = useContext(MyContext);
    ```

    -   **`MyContext`** : Le contexte que vous souhaitez consommer, créé auparavant avec `createContext`.
    -   **`contextValue`** : La valeur actuelle du contexte, fournie par le `Provider` le plus proche dans l'arborescence des composants.

-   **Détails:**

    -   **Réactivité** : Lorsque la valeur du contexte change (par exemple, lorsqu'une nouvelle valeur est définie via `setSharedState`), tous les composants utilisant `useContext` avec ce contexte seront re-rendus pour refléter la nouvelle valeur.

    -   **Performance** : `useContext` optimise la consommation de contextes dans les composants fonctionnels, en évitant l'enchevêtrement des composants consommateurs (`Consumer`), ce qui rend le code plus lisible et plus facile à maintenir.

    -   **Combinaison avec d'autres Hooks** : Vous pouvez combiner `useContext` avec d'autres hooks comme `useState`, `useEffect`, etc., pour gérer l'état et les effets secondaires dans vos composants fonctionnels.

- **Exemple Complet :**

    -   **Étape 1 : Créer le Contexte**

        Dans un fichier nommé `MyContext.js` :

        ```javascript
        import React from "react";

        // Création du contexte avec une valeur par défaut
        const MyContext = React.createContext("valeur par défaut");

        export default MyContext;
        ```

    -   **Étape 2 : Utiliser le `Provider` pour Partager des Données**

        Dans un fichier nommé `App.js` :

        ```javascript
        import React, { useState } from "react";
        import MyContext from "./MyContext";
        import ChildComponent from "./ChildComponent";

        const App = () => {
            const [sharedState, setSharedState] = useState("Bonjour, le monde !");

            return (
                <MyContext.Provider value={{ sharedState, setSharedState }}>
                    <div>
                        <h1>Application avec Contexte</h1>
                        <ChildComponent />
                    </div>
                </MyContext.Provider>
            );
        };

        export default App;
        ```

    -   **Étape 3 : Consommer les Données du Contexte avec `useContext`**

        Dans un fichier nommé `ChildComponent.js` :

        ```javascript
        import React, { useContext } from "react";
        import MyContext from "./MyContext";

        const ChildComponent = () => {
            const { sharedState, setSharedState } = useContext(MyContext);

            return (
                <div>
                    <p>État partagé : {sharedState}</p>
                    <button onClick={() => setSharedState("Nouvelle valeur")}>
                        Changer l'état partagé
                    </button>
                </div>
            );
        };

        export default ChildComponent;
        ```

## 5. **Provider personnalisé:**


> créer un Provider personnalisé avec un Hook personnalisé (`custom hook`) simplifie l'utilisation de `Context API` dans une app React. Cela permet de **rendre l’usage du contexte plus propre, réutilisable et modulaire**.



- **Étape 1 : Créer le Context + Provider personnalisé**

    ```jsx
    // ThemeContext.jsx
    import { createContext, useContext, useState } from "react";

    // 1. Création du contexte
    const ThemeContext = createContext();

    // 2. Création du provider personnalisé
    export function ThemeProvider({ children }) {
        const [theme, setTheme] = useState("light");

        function toggleTheme() {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }

        const value = { theme, toggleTheme };

        return (
            <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
        );
    }
    ```


- **Étape 2 : Créer le Hook personnalisé**

    ```jsx
    // Toujours dans ThemeContext.jsx
    export function useTheme() {
        const context = useContext(ThemeContext);
        if (!context) {
            throw new Error("useTheme must be used within a ThemeProvider");
        }
        return context;
    }
    ```


- **Étape 3 : Utiliser le Provider dans ton App**

    ```jsx
    // App.jsx
    import { ThemeProvider } from "./context/ThemeContext";
    import Page from "./Page";

    export default function App() {
        return (
            <ThemeProvider>
                <Page />
            </ThemeProvider>
        );
    }
    ```


- **Étape 4 : Utiliser le Hook dans n’importe quel composant**

    ```jsx
    // Page.jsx
    import { useTheme } from "./context/ThemeContext";

    export default function Page() {
        const { theme, toggleTheme } = useTheme();

        return (
            <div
                className={
                    theme === "dark" ? "bg-black text-white" : "bg-white text-black"
                }
            >
                <h1>Thème actuel : {theme}</h1>
                <button onClick={toggleTheme}>Changer le thème</button>
            </div>
        );
    }
    ```



## 6. **Pattern `Context` + `Reducer`:**


- **Définition du pattern `Context + Reducer`**

    > Le pattern `Context + Reducer` est une **architecture de gestion d’état globale** dans une application React, qui combine :

    - [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer) — une alternative à `useState` pour les **états complexes avec logique métier** centralisée.
    - [`Context API`](https://reactjs.org/docs/context.html) — pour **partager cet état** entre plusieurs composants sans "prop drilling" (passage d’état via les props sur plusieurs niveaux).



- **Structure typique du pattern**

    - **`useReducer(reducer, initialState)`**

        * Gère un état complexe : plusieurs variables ou états dépendants.
        * Centralise toute la logique de transition d’état dans un `reducer(state, action)`.

    - **`createContext()`**

        * Crée un contexte React pour **exposer** l’état et les fonctions associées.

    3. **`Provider`**

        * Fournit l’état et les actions via `Context.Provider`.

    4. **Hook personnalisé (`useSomething`)**

        * Facilite l’utilisation du contexte ailleurs dans l’app sans répéter `useContext`.

- **Avantages du pattern**

    | Avantage          | Explication                                                            |
    | ----------------- | ---------------------------------------------------------------------- |
    | 🔄 Centralisation | Toute la logique d’état est dans le `reducer` → plus lisible, testable |
    | 🔗 Partage facile | Grâce au `Context`, tous les composants peuvent accéder à l’état       |
    | 🎯 Précision      | `useReducer` évite des bugs liés à des `useState` dispersés            |
    | 🧪 Testabilité    | Un `reducer` pur est facile à tester unitairement                      |
    | 🚀 Simplicité     | Suffit pour la plupart des cas où Redux est "overkill"                 |


-  **Limites**

    | Limite                 | Détail                                                                           |
    | ---------------------- | -------------------------------------------------------------------------------- |
    | 🌍 Re-rendus globaux   | Tous les composants consommateurs sont re-rendus à chaque changement de contexte |
    | 🧩 Pas de middleware   | Contrairement à Redux, pas de middleware comme `redux-thunk` ou `redux-saga`     |
    | 🔁 Code un peu verbeux | Si mal structuré, tu risques de dupliquer de la logique entre les actions        |


- **Exemple Complet:**

    ```jsx

    import { useEffect, useReducer, createContext } from "react";

    const BASE_URL = "http://example.com/api/v1";

    const CitiesContext = createContext();

    const initState = {
        cities: [],
        isLoading: false,
        error: "",
        currentCity: {},
    };

    function reducer(state, action) {
        switch (action.type) {
            case "loading":
                return {
                    ...state,
                    isLoading: true,
                };
            case "cities/loaded":
                return {
                    ...state,
                    isLoading: false,
                    cities: action.payload,
                };

            case "city/loaded":
                return {
                    ...state,
                    isLoading: false,
                    currentCity: action.payload,
                };

            case "city/created":
                return {
                    ...state,
                    isLoading: false,
                    cities: [...state.cities, action.payload],
                    currentCity: action.payload,
                };

            case "city/deleted":
                return {
                    ...state,
                    isLoading: false,
                    cities: state.cities.filter(
                        (city) => city.id !== action.payload
                    ),
                    currentCity: {},
                };

            case "rejected":
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload,
                };
            default:
                throw new Error(`Unkown action type :${action.type}`);
        }
    }

    export function CitiesProvider({ children }) {
        const [{ cities, isLoading, error, currentCity }, dispatch] = useReducer(
            reducer,
            initState
        );


        useEffect(function () {
            getAllCities();
        }, []);

        async function getAllCities() {
            try {
                dispatch({ type: "loading" });
                const response = await fetch(`${BASE_URL}/cities`);
                const data = await response.json();

                dispatch({ type: "cities/loaded", payload: data });
            } catch {
                dispatch({
                    type: "rejected",
                    payload: "Error while fetching cities.",
                });
            }
        }

        async function getCity(id) {
            if (Number(id) === currentCity.id) return;

            try {
                dispatch({ type: "loading" });

                const response = await fetch(`${BASE_URL}/cities/${id}`);
                const data = await response.json();

                dispatch({ type: "city/loaded", payload: data });
            } catch {
                dispatch({
                    type: "rejected",
                    payload: "Error while fetching city data.",
                });
            }
        }

        async function createCity(newCity) {
            try {
                const response = await fetch(`${BASE_URL}/cities`, {
                    method: "POST",
                    body: JSON.stringify(newCity),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();

                dispatch({ type: "city/created", payload: data });
            } catch {
                dispatch({
                    type: "rejected",
                    payload: "Error while creating city.",
                });
            }
        }

        async function deleteCity(id) {
            try {
                dispatch({ type: "loading" });

                const response = await fetch(`${BASE_URL}/cities/${id}`, {
                    method: "Delete",
                });
                await response.json();

                dispatch({ type: "city/deleted", payload: id });
            } catch {
                dispatch({
                    type: "rejected",
                    payload: "Error while deleting city.",
                });
            }
        }

        return (
            <CitiesContext.Provider
                value={{
                    cities,
                    isLoading,
                    error,
                    currentCity,
                    getCity,
                    createCity,
                    deleteCity,
                }}
            >
                {children}
            </CitiesContext.Provider>
        );
    }


    export  function useCities() {
        const context = useContext(CitiesContext);
        if (context == undefined)
            throw new Error("useCities Context must be used with CitiesProvider");

        return context;
    }


    ```