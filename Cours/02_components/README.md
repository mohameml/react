# cour 02 : **les composants:**

## 1. **Introduction:**

-   **Description:**

    > Les composants sont les blocs de construction fondamentaux de toute application React. Ils permettent de diviser l'interface utilisateur en morceaux réutilisables et indépendants, chacun gérant son propre état et sa propre logique.

-   **Syntaxe:**

    -   **créer un composant:**

        ```jsx
        function MyComponent() {
        	return (
        		<div>
        			<h1>Hello, World!</h1>
        			<p>This is a functional component.</p>
        		</div>
        	);
        }

        export default MyComponent;
        ```

    -   **utiliser un composant:**

        ```jsx
        import nomDeComposante from "chemin/vers/Composante";
        ```

    -   chaque composant doit retourner **un seul élément HTML parent**
    -   L'instruction `export default` est utilisée pour exporter un élément principal d'un module.

-   **Exemple 1:**

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom";

    function App() {
    	return (
    		<div>
    			<MyFirstComponent />
    		</div>
    	);
    }
    function MyFirstComponent() {
    	return (
    		<div>
    			<h1>Hello World</h1>
    			<h2>Hi</h2>
    			<button>Click Me</button>
    		</div>
    	);
    }
    ```

-   **Exemple 2:**

    -   **fichier `MyFirstComponent.jsx`:**

        ```jsx
        function MyFirstComponent() {
        	return (
        		<div>
        			<h1>Hello World</h1>
        			<h2>Hi</h2>
        			<button>Click Me</button>
        		</div>
        	);
        }

        export default MyFirstComponent;
        ```

    -   **fichier `App.jsx`:**

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom";
    import MyFirstComponent from "./MyFirstComponent";

    function App() {
    	return (
    		<div>
    			<MyFirstComponent />
    		</div>
    	);
    }
    ```

## 2. **le composant `App`:**

-   **Description:**

    > En React, le composant `App` est souvent le composant racine de l'application. Il encapsule tous les autres composants et structure l'application.

-   **Définition du Composant App:**

    Voici un exemple de définition du composant `App` en utilisant un composant fonctionnel :

    ```jsx
    // App.js
    import React from "react";
    import MyComponent from "./MyComponent";

    function App() {
    	return (
    		<div className="App">
    			<header className="App-header">
    				<h1>Welcome to My React App</h1>
    			</header>
    			<main>
    				<MyComponent />
    			</main>
    		</div>
    	);
    }

    export default App;
    ```

-   **Rendu du Composant App en HTML:**

    Pour rendre le composant `App` en HTML, il doit être monté sur un élément du DOM réel. Cela se fait généralement dans le fichier d'entrée principal de l'application (souvent nommé `index.js` ou `main.js`). Voici comment cela se fait :

    ```js
    // index.js
    import React from "react";
    import ReactDOM from "react-dom/client";
    import "./index.css";
    import App from "./App";
    import reportWebVitals from "./reportWebVitals";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
    	<React.StrictMode>
    		<App />
    	</React.StrictMode>
    );
    ```

    -   `root.render()` est utilisé pour monter le composant `App` dans un élément du DOM avec l'ID `root`.
    -   Le fichier `index.html` contient cet élément `root`.
