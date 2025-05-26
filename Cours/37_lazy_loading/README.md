## Cour : **Lazy Loading**

## 1. **Définition : Lazy Loading**

> **Lazy Loading (chargement paresseux)** consiste à **charger un module uniquement lorsque c’est nécessaire**, plutôt qu’au chargement initial de l’application.

-   **Pourquoi l'utiliser ?:**

    -   ⚡ Améliore les **temps de chargement** initiaux.
    -   📦 Réduit la **taille du bundle principal**.
    -   🔁 Permet un **chargement progressif** des composants, routes, images, etc.

-   **Optimiser la taille du bundle:**

    -   **Taille du bundle** = taille des fichiers JavaScript envoyés au client.

    -   Si ce bundle est trop gros :

        -   Temps de chargement long,
        -   Mauvaise UX (en particulier sur mobile ou connexions lentes).

## 2. **import dynamique:**

-   Un **import dynamique** est une fonction asynchrone :

    ```js
    import("./chemin/vers/module.js").then((module) => {
    	// utilisation du module importé
    });
    ```

    Ou en `async/await` :

    ```js
    const module = await import("./chemin/vers/module.js");
    ```

-   **Objectifs de l'import dynamique:**

    -   📦 **Code splitting** (diviser le code en plusieurs fichiers)
    -   ⚡ **Lazy loading** (ne charger que ce qui est nécessaire au moment voulu)
    -   📁 **Charger un module seulement dans certaines conditions** (if, switch, clic utilisateur, etc.)
    -   🤖 **Charger un module en fonction d'une variable**

-   **Comparaison : import statique vs dynamique**

    | Type             | Exemple                            | Quand ?                         |
    | ---------------- | ---------------------------------- | ------------------------------- |
    | ✅ **Statique**  | `import module from './module.js'` | Toujours chargé au démarrage    |
    | 🕒 **Dynamique** | `import('./module.js')`            | Chargé **au moment de l’appel** |

-   **Exemple simple:**

    ```js
    button.addEventListener("click", async () => {
    	const { default: bigModule } = await import("./BigComponent.js");
    	bigModule.doSomething();
    });
    ```

    ➡️ Ici, `BigComponent.js` **n'est pas chargé tant que l'utilisateur ne clique pas** sur le bouton.

-   **En React : utilisé avec `React.lazy`**

    ```js
    const MyComponent = React.lazy(() => import("./MyComponent"));
    ```

    ➡️ Le `import()` dynamique retourne une **promesse** avec le module.
    React l’utilise pour déclencher le chargement **à la demande**, comme tu l’as vu avec le lazy loading.

## 3. **Lazy Loading avec React:**

-   **Avec `React.lazy` et `Suspense` (pour les composants):**

    ```jsx
    import { Suspense, lazy } from "react";

    // Lazy-load du composant
    const LazyComponent = lazy(() => import("./MyComponent"));

    function App() {
    	return (
    		<div>
    			<Suspense fallback={<div>Chargement...</div>}>
    				<LazyComponent />
    			</Suspense>
    		</div>
    	);
    }
    ```

    -   `React.lazy()` permet de charger un composant **à la demande**.
    -   `Suspense` affiche un fallback pendant le chargement.

-   **React Router (pour découper par page):**

    ```jsx
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import React, { Suspense } from "react";

    const Home = React.lazy(() => import("./pages/Home"));
    const About = React.lazy(() => import("./pages/About"));

    function App() {
    	return (
    		<BrowserRouter>
    			<Suspense fallback={<div>Chargement...</div>}>
    				<Routes>
    					<Route path="/" element={<Home />} />
    					<Route path="/about" element={<About />} />
    				</Routes>
    			</Suspense>
    		</BrowserRouter>
    	);
    }
    ```

    > ✅ Cela évite que toutes les pages soient chargées dans le bundle initial.
