# Cour : **Error Handling:**

## 1. **`errorElement :`**

-   **Définition:**

    > Dans **React Router v6.4+**, `errorElement` est une **propriété de route** qui vous permet de **définir un composant d'erreur personnalisé**. Ce composant est affiché lorsqu’une erreur se produit pendant :

    -   le chargement des données (`loader`)
    -   l'exécution d’une action (`action`)
    -   ou lors du rendu d’un élément de la route
    -   Une redirection vers une **route inconnue**.

-   **Syntaxe:**

    ```jsx
    {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, // 👈 composant affiché en cas d'erreur
    children: [
        {
            path: "dashboard",
            element: <Dashboard />,
            errorElement: <ErrorDashboardPage />, // 👈 composant affiché en cas d'erreur
        },
    ]
    }
    ```

-   **Exemple complet:**

    ```jsx
    // ErrorPage.jsx
    import React from "react";
    import { useRouteError } from "react-router-dom";

    export default function ErrorPage() {
    	const error = useRouteError();
    	return (
    		<div>
    			<h1>Oops!</h1>
    			<p>Une erreur s'est produite.</p>
    			<p>
    				<i>{error.statusText || error.message}</i>
    			</p>
    		</div>
    	);
    }
    ```

    ```jsx
    // routes.jsx
    import { createBrowserRouter, RouterProvider } from "react-router-dom";
    import Root from "./Root";
    import Dashboard from "./Dashboard";
    import ErrorPage from "./ErrorPage";

    const router = createBrowserRouter([
    	{
    		path: "/",
    		element: <Root />,
    		errorElement: <ErrorPage />,
    		children: [
    			{
    				path: "dashboard",
    				element: <Dashboard />,
    				loader: async () => {
    					throw new Error(
    						"Impossible de charger les données du dashboard !"
    					);
    				},
    			},
    		],
    	},
    ]);

    function App() {
    	return <RouterProvider router={router} />;
    }
    ```

## 2. **`useRouteError :`**

-   **Définition:**

    > `useRouteError` est un **hook React Router** permettant d’accéder à **l’erreur** qui a causé le rendu du `errorElement`. Il ne peut être utilisé **que dans le composant défini dans `errorElement`**.

-   **Syntaxe:**

    ```jsx
    const error = useRouteError();
    ```

-   **Exemple:**

    ```jsx
    // ErrorPage.jsx
    import React from "react";
    import { useRouteError } from "react-router-dom";

    export default function ErrorPage() {
    	const error = useRouteError();

    	return (
    		<div style={{ padding: "1rem", color: "red" }}>
    			<h2>Erreur rencontrée 🚨</h2>
    			<p>{error.statusText || error.message}</p>
    		</div>
    	);
    }
    ```
