# cour 15 : **React Router**

## 1. **Introduction:**

-   **Description et Définition:**

    > **React Router** est une bibliothèque de routage pour les applications React. Elle permet de créer une application à page unique (SPA) avec une navigation dynamique basée sur des URL spécifiques. En utilisant React Router, vous pouvez définir des routes qui affichent différents composants ou vues en fonction de l'URL actuelle, ce qui rend votre application plus interactive et fluide.

-   **Caractéristiques principales de React Router:**

    -   **Définition de Routes** : Associe des chemins d'URL spécifiques à des composants React.
    -   **Navigation Dynamique** : Permet de naviguer entre les différentes pages de l'application sans recharger la page entière.
    -   **Nested Routing** : Supporte les routes imbriquées pour des layouts complexes.
    -   **Gestion de l'Historique** : Gère l'historique de navigation, permettant d'utiliser les boutons de retour et d'avance du navigateur.

-   **Installation:**

    Pour utiliser React Router dans votre application React, vous devez d'abord l'installer via npm ou yarn.

    ```bash
    npm install react-router-dom
    ```

-   **Configuration de React Router:**

    Après l'installation, vous devez configurer React Router en ajoutant le `BrowserRouter` dans votre fichier `index.js` :

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import "./index.css";
    import App from "./App";
    // vous devez ajouter cette ligne de code
    import { BrowserRouter } from "react-router-dom";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
    	<React.StrictMode>
    		// et celui
    		<BrowserRouter>
    			<App />
    		</BrowserRouter>
    	</React.StrictMode>
    );
    ```

## 2. **`Routes` et `Route`:**

-   **Description:**

    > Dans React Router, les composants `Routes` et `Route` sont essentiels pour définir la structure de navigation de votre application. Le composant `Routes` agit comme un conteneur pour plusieurs composants `Route`, qui définissent chacun un chemin (URL) et le composant à rendre lorsque ce chemin est accédé.

-   **Syntaxe:**

    ```jsx
    import { Routes, Route } from "react-router-dom";

    <Routes>
    	<Route path="/somepath1" element={<SomeComponent1 />} />
    	<Route path="/somepath2" element={<SomeComponent2 />} />
    	<Route path="/somepath3" element={<SomeComponent3 />} />
    </Routes>;
    ```

    -   **`Routes`** : Conteneur pour les routes. Remplace l'ancien `Switch` dans les versions précédentes de React Router.
    -   **`Route`** : Définit un chemin d'URL et le composant à rendre pour ce chemin.

-   **Exemple:**

    ```jsx
    function App {

        return (
            <div>
                <div>
                    <Component />
                </div>
                <Routes>
                    <Route path="/hello" element={<Hello />} />
                    <Route
                        path="/sidi"
                        element={
                            <div>
                                <h1>Hello Sidi</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iste, voluptas!
                                </p>
                            </div>
                        }
                    />
                </Routes>
            </div>
        )
    }
    ```

    -   **RQ:** le component `<Component />` sera rendu dans tout le `url`

## 3. **Page :Not Found 404:**

-   **Description de l'erreur 404:**

    > L'erreur 404 est un code de statut HTTP qui indique que le serveur n'a pas trouvé la ressource demandée. Dans une application web, cela signifie généralement que l'utilisateur a essayé d'accéder à une URL qui n'existe pas. Une page 404 personnalisée améliore l'expérience utilisateur en fournissant une rétroaction claire et en guidant l'utilisateur vers d'autres parties du site.

-   **Syntaxe pour gérer les pages 404 avec React Router:**

    Dans React Router, vous pouvez définir une route de type `catch-all` pour gérer les erreurs 404 en utilisant le chemin `*`. Cela capture toutes les URL qui ne correspondent à aucune des routes définies précédemment et affiche une page de "Not Found".

    ```jsx
    <Route path="*" element={<NotFound />} />
    ```
