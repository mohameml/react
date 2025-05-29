# Cour : **useFetcher:**

## 1. **Définition:**

-   `useFetcher` est un **hook fourni par React Router v6.4+** qui permet de :

    -   Faire des requêtes (GET, POST, etc.) **sans naviguer** vers une autre page.
    -   Gérer l’état de la requête (pending, success, error).
    -   Faciliter l’envoi de formulaires asynchrones (comme `fetch` mais avec les avantages de React Router : loaders, actions, etc.).

> Il est très utile dans les composants imbriqués, les formulaires AJAX, les modales, les composants qui ne doivent **pas naviguer**.

-   **Cas d’usage:**

    -   Envoyer un formulaire sans rediriger la page
    -   Rafraîchir une portion de page (data revalidation)
    -   Requête AJAX dans une modale ou un composant sidebar

-   **Syntaxe:**

    ```tsx
    const fetcher = useFetcher();
    ```

    -   `fetcher.load(url)` : pour faire un GET sur une route loader.
    -   `fetcher.state` : `"idle"`, `"submitting"` ou `"loading"`.
    -   `fetcher.data` : réponse du loader ou de l’action.
    -   `fetcher.Form` : un composant `<form>` spécial lié au système de routes.
    -   `fetcher.submit(data, options)` : pour envoyer une requête (POST, PUT, etc.).

## 2. **Exemple complet:**

> Objectif : Rechercher un utilisateur par nom sans recharger la page

-   `routes.jsx`

    ```tsx
    import { createBrowserRouter } from "react-router-dom";
    import App from "./App";
    import { searchLoader, searchAction } from "./search";

    const router = createBrowserRouter([
    	{
    		path: "/",
    		element: <App />,
    		children: [
    			{
    				path: "search",
    				loader: searchLoader,
    				action: searchAction,
    			},
    		],
    	},
    ]);

    export default router;
    ```

-   `search.js`

    ```js
    // search.js
    export async function searchLoader({ request }) {
    	const url = new URL(request.url);
    	const query = url.searchParams.get("q");

    	if (!query) return null;

    	const res = await fetch(`https://api.example.com/users?q=${query}`);
    	const users = await res.json();

    	return users;
    }

    export async function searchAction({ request }) {
    	const formData = await request.formData();
    	const query = formData.get("q");

    	const res = await fetch(`https://api.example.com/users?q=${query}`);
    	const users = await res.json();

    	return users;
    }
    ```

-   `SearchBar.jsx`

    ```tsx
    import { useFetcher } from "react-router-dom";

    export default function SearchBar() {
    	const fetcher = useFetcher();

    	// useEffect(function () {
    	//	fetcher.load("/users");
    	//	// fetcher.state
    	// }, []);

    	return (
    		<div>
    			<fetcher.Form method="post" action="/search">
    				<input
    					type="text"
    					name="q"
    					placeholder="Nom de l'utilisateur"
    				/>
    				<button type="submit">Rechercher</button>
    			</fetcher.Form>

    			{fetcher.state === "submitting" && <p>Recherche en cours...</p>}

    			{fetcher.data && (
    				<ul>
    					{fetcher.data.map((user) => (
    						<li key={user.id}>{user.name}</li>
    					))}
    				</ul>
    			)}
    		</div>
    	);
    }
    ```
