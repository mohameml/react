# Cour : **useSearchParams:**

-   **Description**

    > `useSearchParams` est un **hook** de React Router qui permet de **lire et modifier les paramètres de requête** (query string) dans l'URL.

    -   Exemple d'URL :

        ```
        /products?category=books&sort=asc
        ```

    -   Ce hook est très utile pour :

        -   les **filtres** (ex: catégorie, date, etc.)
        -   la **pagination**
        -   les **options de tri**
        -   la **recherche**

-   **Syntaxe**

    ```jsx
    import { useSearchParams } from "react-router-dom";

    const [searchParams, setSearchParams] = useSearchParams();
    ```

    -   `searchParams` est une instance de **`URLSearchParams`**, utilisée pour lire les **paramètres de requête** (query string).
    -   `setSearchParams` permet de **mettre à jour les paramètres de l’URL** sans recharger la page.

-   **Méthodes utiles sur `searchParams` (lecture)**

    | Méthode               | Description                                                                                  |
    | --------------------- | -------------------------------------------------------------------------------------------- |
    | `get(name)`           | Retourne la valeur du paramètre (ou `null` si absent).                                       |
    | `has(name)`           | Vérifie si un paramètre est présent.                                                         |
    | `getAll(name)`        | Retourne un tableau de **toutes** les valeurs du paramètre (utile pour `?tag=js&tag=react`). |
    | `entries()`           | Retourne un itérateur `[clé, valeur]`.                                                       |
    | `keys()` / `values()` | Itérateurs sur toutes les clés ou toutes les valeurs.                                        |
    | `toString()`          | Retourne la query string (`"foo=bar&sort=asc"`).                                             |

-   **Méthodes utiles sur `setSearchParams` (écriture)**

    -   **Définir des paramètres :**

        ```js
        setSearchParams({ category: "books", sort: "asc" });
        ```

        > Remplace tous les anciens paramètres.

    -   **Préserver les anciens paramètres :**

        ```js
        setSearchParams((prev) => {
        	prev.set("page", "2");
        	return prev;
        });
        ```

        > Met à jour un paramètre **sans effacer les autres**.

    -   **Supprimer un paramètre :**

        ```js
        setSearchParams((prev) => {
        	prev.delete("sort");
        	return prev;
        });
        ```

-   **Exemple Complet :**

    -   **Composant `ProductList.js`:**

        ```jsx
        import { useSearchParams } from "react-router-dom";

        function ProductList() {
        	const [searchParams, setSearchParams] = useSearchParams();

        	// Lecture des paramètres
        	const category = searchParams.get("category");
        	const sort = searchParams.get("sort");

        	// Modification des paramètres
        	const handleSortChange = () => {
        		setSearchParams({
        			category,
        			sort: sort === "asc" ? "desc" : "asc",
        		});
        	};

        	return (
        		<div>
        			<h2>Liste des produits</h2>
        			<p>Catégorie : {category || "toutes"}</p>
        			<p>Tri : {sort || "par défaut"}</p>

        			<button onClick={handleSortChange}>
        				Changer tri (
        				{sort === "asc" ? "descendant" : "ascendant"})
        			</button>
        		</div>
        	);
        }
        ```

    -   **Lien pour tester dans une page de navigation:**

        ```jsx
        import { Link } from "react-router-dom";

        function Home() {
        	return (
        		<div>
        			<h2>Accueil</h2>
        			<Link to="/products?category=books&sort=asc">
        				Voir les livres triés (asc)
        			</Link>
        		</div>
        	);
        }
        ```

    -   **Configuration des routes:**

        ```jsx
        import { BrowserRouter, Routes, Route } from "react-router-dom";
        import Home from "./Home";
        import ProductList from "./ProductList";

        function App() {
        	return (
        		<BrowserRouter>
        			<Routes>
        				<Route path="/" element={<Home />} />
        				<Route path="/products" element={<ProductList />} />
        			</Routes>
        		</BrowserRouter>
        	);
        }
        ```
