# Cour 09 : **Loader**

## 1. **`loader` dans React Router:**

-   **Définition:**

    > Un **`loader`** est une **fonction asynchrone** associée à une route dans React Router. Elle est exécutée **avant le rendu du composant** de la route. Elle permet de **charger des données côté client ou serveur** et de les rendre disponibles à travers le hook `useLoaderData()` dans le composant.

    -   Elle permet de **centraliser la logique de fetching** en dehors des composants React, ce qui rend le code plus clair et améliore la gestion des erreurs et des états de chargement.

    -   Elle est particulièrement utile pour le **Server-Side Rendering (SSR)** ou pour éviter l’utilisation de `useEffect` + `useState`.

-   Syntaxe détaillée

    ```js
    async function loader({ request, params }) {
    	// récupération des données selon les paramètres ou l'URL
    	const data = await fetchDataSomehow(params.id);
    	return data;
    }
    ```

    | Argument  | Description                                                                                                                |
    | --------- | -------------------------------------------------------------------------------------------------------------------------- |
    | `request` | Objet représentant la requête HTTP (similaire à `Request` de l'API Fetch). Utile pour lire les headers, query params, etc. |
    | `params`  | Un objet contenant les **paramètres dynamiques de l’URL** (par exemple `:userId` devient `params.userId`).                 |

    | Retour        | Description                                                                                                                                                |
    | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `return data` | L’objet retourné peut être **tout type de données JSON-serializable**, qui sera ensuite accessible via `useLoaderData()` dans le composant lié à la route. |

-   **Exemple de loader:**

    ```js
    // routes/loaders.js
    export async function loader({ params }) {
    	const res = await fetch(`/api/users/${params.userId}`);
    	if (!res.ok) {
    		throw new Response("User not found", { status: 404 });
    	}
    	return res.json();
    }

    // App.jsx
    import { loader as userLoader } from "...";
    const router = createBrowserRouter([
    	{
    		path: "profile/:userId",
    		element: <UserProfile />,
    		loader: userLoader,
    	},
    ]);
    ```

## 2. **`useLoaderData`:**

-   **Définition:**

    > `useLoaderData` est un **hook fourni par React Router** qui permet de récupérer les données chargées par la fonction `loader` associée à la route en cours.

    -   Ce hook est appelé **dans le composant** de la route pour accéder directement aux données préchargées **sans avoir besoin de `useEffect` ni `useState`**.

-   **Syntaxe:**

    ```js
    import { useLoaderData } from "react-router-dom";

    const data = useLoaderData();
    ```

    | Élément           | Description                                                                                               |
    | ----------------- | --------------------------------------------------------------------------------------------------------- |
    | `useLoaderData()` | Retourne l’objet (ou la valeur) retourné par le `loader` correspondant à la route actuelle.               |
    | Retour            | Typiquement un objet ou une structure de données (tableau, chaîne, etc.). Peut être typé avec TypeScript. |

-   **Exemple avec composant:**

    ```js
    // routes/loaders.js
    export async function userLoader({ params }) {
    	const res = await fetch(`/api/users/${params.userId}`);
    	if (!res.ok) {
    		throw new Response("User not found", { status: 404 });
    	}
    	return res.json();
    }

    // App.jsx
    const router = createBrowserRouter([
    	{
    		path: "profile/:userId",
    		element: <UserProfile />,
    		loader: userLoader,
    	},
    ]);
    ```

    ```jsx
    // routes/UserProfile.jsx

    import { useLoaderData } from "react-router-dom";

    export default function UserProfile() {
    	const user = useLoaderData(); // user est l’objet retourné par userLoader

    	return (
    		<div>
    			<h1>Profil de {user.name}</h1>
    			<p>Email : {user.email}</p>
    		</div>
    	);
    }
    ```

## 3. **Loading avec `useNavigation`:**

-   **Définition:**

    > `useNavigation` est un **hook fourni par React Router (v6.4+)** qui permet de connaître **l’état de navigation global de l’application**.

    -   Il est très utile pour :

        -   Savoir si une navigation est en cours (ex: utilisateur clique sur un lien, soumet un formulaire).
        -   Afficher un **loader global** (comme un spinner ou "Loading...").
        -   Suivre les changements d’état entre deux routes.

-   **`navigation.state`:**

    -   Le hook `useNavigation` retourne un objet contenant plusieurs propriétés. La plus importante est **navigation.state**, elle peut avoir **quatre valeurs** :

    | Valeur         | Signification                                                                                     |
    | -------------- | ------------------------------------------------------------------------------------------------- |
    | `"idle"`       | Aucune navigation en cours.                                                                       |
    | `"loading"`    | Une navigation est en cours (changement de page, lien cliqué, etc.).                              |
    | `"submitting"` | Une soumission de formulaire (via une `action`) est en cours.                                     |
    | `"error"`      | Une erreur a été rencontrée (rarement renvoyée directement ici, mais utilisée avec errorElement). |

-   **Syntaxe :**

    ```js
    import { useNavigation } from "react-router-dom";

    const navigation = useNavigation();
    console.log(navigation.state); // "idle", "loading", "submitting"
    ```

-   **Exemple : Afficher "Loading..." dans `AppLayout`**

    Imaginons que tu as un `AppLayout` qui est le **layout global** de ton application (barre de navigation, footer, etc.). Tu veux afficher "Loading..." lorsqu’une navigation est en cours.

    ```jsx
    //AppLayout.jsx
    import { Outlet, useNavigation } from "react-router-dom";

    export default function AppLayout() {
    	const navigation = useNavigation();

    	return (
    		<div>
    			<header>
    				<h1>Mon Application</h1>
    			</header>

    			{/* Affichage d’un loader global si navigation en cours */}
    			{navigation.state === "loading" && <div>Loading...</div>}

    			<main>
    				<Outlet /> {/* Affiche le contenu des routes enfants */}
    			</main>

    			<footer>
    				<p>© 2025 Mon App</p>
    			</footer>
    		</div>
    	);
    }
    ```

## 4. **`redirect` en React Router:**

-   **Définition:**

    > La fonction **`redirect()`** de React Router est utilisée dans une **fonction `loader` ou `action`** pour **effectuer une redirection programmée** vers une autre URL.

-   **Syntaxe:**

    ```js
    import { redirect } from "react-router-dom";

    return redirect("/nouvelle-route");
    ```

    > Elle retourne un objet spécial que React Router comprend et interprète comme une redirection vers l’URL indiquée.

-   **Exemple dans un `loader()`:**

    ```js
    import { redirect } from "react-router-dom";

    export async function protectedLoader() {
    	const isAuthenticated = false; // logique de vérification

    	if (!isAuthenticated) {
    		return redirect("/login");
    	}

    	return null;
    }
    ```
