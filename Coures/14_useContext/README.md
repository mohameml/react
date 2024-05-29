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
    const MyContext = React.createContext({});

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

-   **Exemple:**

    -   **Créer le Contexte:**

        ```jsx
        // MyContext.js
        import { createContext } from "react";

        // Création du contexte avec une valeur par défaut
        const MyContext = createContext("valeur par défaut");

        export default MyContext;
        ```

    -   **Utiliser le `Provider` pour Partager des Données:**

        ```jsx
        // App.js
        import React, { useState } from "react";
        import MyContext from "./MyContext";
        import ChildComponent from "./ChildComponent";

        const App = () => {
            const [sharedState, setSharedState] = useState(
                "Bonjour, le monde !"
            );

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

## 5. **Exemple Complet :**

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
