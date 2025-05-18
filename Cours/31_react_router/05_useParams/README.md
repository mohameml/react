# Cour : hook **`useParams`**

-   **Description**

    > `useParams` est un **hook de React Router** qui permet de **lire les paramètres dynamiques de l’URL**.

    -   Il est utilisé dans les composants rendus par une route dynamique comme :

        ```jsx
        <Route path="/user/:id" element={<UserProfile />} />
        ```

        Dans cet exemple, `useParams()` te permet de récupérer l’`id` de l’URL dans `UserProfile`.

-   **Syntaxe**

    ```jsx
    import { useParams } from "react-router-dom";

    const params = useParams(); // params est un objet : { id: "42" }
    ```

-   **Exemple Complet**

    -   **Configuration des routes:**

        ```jsx
        import { BrowserRouter, Routes, Route } from "react-router-dom";
        import UserProfile from "./UserProfile";
        import Home from "./Home";

        function App() {
        	return (
        		<BrowserRouter>
        			<Routes>
        				<Route path="/" element={<Home />} />
        				<Route path="/user/:id" element={<UserProfile />} />
        			</Routes>
        		</BrowserRouter>
        	);
        }
        ```

    -   **Composant `UserProfile.js` utilisant `useParams`:**

        ```jsx
        import { useParams } from "react-router-dom";

        function UserProfile() {
        	const { id } = useParams(); // ← récupère l'ID depuis l'URL

        	return (
        		<div>
        			<h2>Profil utilisateur</h2>
        			<p>Identifiant : {id}</p>
        		</div>
        	);
        }
        ```

    -   **Composant `Home.js` avec des liens:**

        ```jsx
        import { Link } from "react-router-dom";

        function Home() {
        	return (
        		<div>
        			<h2>Accueil</h2>
        			<Link to="/user/123">Voir le profil 123</Link>
        		</div>
        	);
        }
        ```
