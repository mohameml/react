# Cour 08 : **React Router Mode Data:**

## 1. **Introduction:**

-   **Définition:**

    > **React Router en mode "Data"** est une approche moderne introduite avec **React Router v6.4+**, qui étend les capacités de React Router au-delà du simple routage de composants. Ce mode permet une **gestion déclarative des données**, en intégrant directement des mécanismes de **chargement de données (loaders)**, de **soumission de données (actions)**, et de **gestion d'erreurs** dans la configuration des routes.

-   **À quoi sert React Router mode Data ?:**

    Le **mode Data** transforme React Router en une solution de **gestion de cycle de vie des données par route**, avec les fonctionnalités suivantes :

    -   **Loader Functions** :

        -   Permettent de charger les données **avant** que le composant de la route ne soit affiché.
        -   Évitent les `useEffect` et les états locaux dans les composants pour gérer l’asynchronisme.
        -   Idéal pour le **data fetching côté client** ou **server-side rendering (SSR)**.

    -   **Actions** :

        -   Gèrent les **soumissions de formulaires** ou d'autres mutations de données associées à une route.
        -   Centralisent la logique de mise à jour côté client.

    -   **Error Boundaries par route** :

        -   Gèrent proprement les erreurs de chargement ou de mutation au niveau des routes.

    -   **Amélioration UX (optimistic UI)** :

        -   Le système est conçu pour faciliter des expériences utilisateur réactives et fluides.

## 2. Définition de `createBrowserRouter`

-   **Définition:**

    > `createBrowserRouter` est une fonction fournie par **React Router v6.4+** qui permet de créer un routeur basé sur l'**API History HTML5** (c’est-à-dire `window.history.pushState` et `popstate`).

    -   Contrairement à l’approche classique où on enrobe ses routes dans `<BrowserRouter>`, cette fonction fait partie du **Data Router API**, introduite avec le **mode Data**, permettant de déclarer les routes et leurs **loaders**, **actions**, **error boundaries**, etc., directement dans la configuration.

-   **Syntaxe :**

    ```js
    import { createBrowserRouter } from "react-router-dom";

    const router = createBrowserRouter([
    	{
    		path: "/",
    		element: <RootComponent />,
    		errorElement: <ErrorPage />,
    		loader: rootLoader,
    		action: rootAction,
    		children: [
    			{
    				path: "dashboard",
    				element: <Dashboard />,
    				loader: dashboardLoader,
    				action: dashboardAction,
    			},
    			{
    				path: "profile/:userId",
    				element: <UserProfile />,
    				loader: profileLoader,
    				errorElement: <ProfileError />,
    			},
    		],
    	},
    ]);
    ```

    | Élément        | Description                                                                                                                                                                  |
    | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `path`         | Le chemin d’URL correspondant à la route (ex: "/", "dashboard", etc.). Peut inclure des paramètres dynamiques comme `:userId`.                                               |
    | `element`      | Le **composant React** à afficher lorsque la route correspond à l’URL.                                                                                                       |
    | `loader`       | Une **fonction de chargement de données**. Elle s’exécute avant que le composant soit affiché. Retourne les données consommables via `useLoaderData()`.                      |
    | `action`       | Une **fonction qui gère les mutations de données** (soumission de formulaires, requêtes POST, PUT, DELETE). Elle peut retourner des réponses ou déclencher des redirections. |
    | `errorElement` | Un composant qui sera affiché si une **erreur** se produit pendant le chargement des données ou dans l’action de la route.                                                   |
    | `children`     | Une liste de **sous-routes imbriquées**. Permet de structurer une application avec un layout parent (ex: barre de navigation).                                               |

-   **Exemple:**

    ```jsx
    import { RouterProvider, createBrowserRouter } from "react-router-dom";

    const router = createBrowserRouter([
    	{
    		path: "/",
    		element: <Root />,
    		errorElement: <ErrorPage />,
    		loader: rootLoader,
    		children: [
    			{
    				path: "dashboard",
    				element: <Dashboard />,
    				loader: dashboardLoader,
    				action: dashboardAction,
    			},
    			{
    				path: "profile/:userId",
    				element: <UserProfile />,
    				loader: profileLoader,
    				errorElement: <ErrorPage />,
    			},
    		],
    	},
    ]);

    export default function App() {
    	return <RouterProvider router={router} />;
    }
    ```

-   **Avantages de `createBrowserRouter` vs l’ancienne méthode (`<BrowserRouter>` + `<Routes>` + `<Route>`):**

    | Fonctionnalité                        | Ancienne méthode (`<BrowserRouter>` + `<Routes>`)            | Nouvelle méthode (`createBrowserRouter`)                                |
    | ------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
    | **Data fetching intégré**             | ❌ Non, il faut faire ça manuellement (ex: `useEffect`)      | ✅ Avec `loader()` pour précharger les données                          |
    | **Formulaires avec actions**          | ❌ Non intégré                                               | ✅ Avec `action()` pour gérer les formulaires                           |
    | **Gestion des erreurs**               | ❌ Doit être faite manuellement                              | ✅ Via `errorElement`                                                   |
    | **Définition déclarative des routes** | ✅ Oui                                                       | ✅ Oui, mais avec des fonctionnalités supplémentaires                   |
    | **Utilisation en dehors de JSX**      | ❌ Impossible de définir les routes en dehors d’un composant | ✅ On peut créer les routes dans un fichier séparé, logique plus claire |
