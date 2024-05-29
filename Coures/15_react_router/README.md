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
                    ></Route>
                </Routes>
            </div>
        )
    }
    ```

    -   **RQ:** le component `<Component />` sera rendu dans tout le `url`

## 3. **`Link`:**

-   **Description:**

    > Le composant `Link` de React Router est utilisé pour créer des liens de navigation dans une application React. Contrairement aux balises `<a>` traditionnelles, `Link` utilise la manipulation de l'historique de navigation du navigateur pour permettre une navigation sans rechargement de page. Cela permet de maintenir une expérience utilisateur fluide dans les applications à page unique (SPA).

-   **Syntaxe:**

    ```jsx
    <Link to={"path"}>Contenu</Link>
    ```

    -   **`to`** : Attribut qui spécifie le chemin vers lequel le lien doit naviguer.

-   **Exemple:**

    ```jsx
    import "./App.css";
    import { Route, Routes, Link } from "react-router-dom";
    import Home from "./components/Home/Home";
    import About from "./components/About/About";
    import Posts from "./components/Posts/Posts";
    function App() {
        return (
            <>
                <div className="nav">
                    <Link to={"/"}>
                        <button>Home</button>
                    </Link>
                    <Link to={"about"}>
                        <button>About</button>
                    </Link>
                    <Link to={"/posts"}>
                        <button>Posts</button>
                    </Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </>
        );
    }
    ```

    ![alt text](image.png)
