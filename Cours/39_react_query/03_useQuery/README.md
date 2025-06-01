# Cour : **useQuery**

## 1. **Définition de `useQuery`:**

> `useQuery` est le **hook principal** de React Query pour effectuer des **requêtes de données (GET)**. Il permet de **fetcher, mettre en cache, re-fetcher automatiquement** des données venant d’une API.

-   **Syntaxe complète de `useQuery`**

    ```ts
    const {
    	data, // les données retournées
    	error, // l'erreur si la requête échoue
    	isLoading, // true pendant le premier chargement
    } = useQuery({
    	queryKey: ["clé_unique"], // identifiant unique de la requête
    	queryFn: maFonctionAsync, // fonction qui retourne une Promise
    });
    ```

    -   **`queryKey`:** identifiant unique de la requête

    -   **`queryFn`:** fonction qui retourne une Promise

-   **Exemple complet:**

    ```tsx
    import { useQuery } from "@tanstack/react-query";
    import axios from "axios";

    const fetchUsers = async () => {
    	const res = await axios.get(
    		"https://jsonplaceholder.typicode.com/users"
    	);
    	return res.data;
    };

    function UsersList() {
    	const { data, error, isLoading, isError, refetch, isFetching } =
    		useQuery({
    			queryKey: ["users"],
    			queryFn: fetchUsers,
    			staleTime: 1000 * 60 * 5, // 5 minutes
    		});

    	if (isLoading) return <p>Chargement...</p>;
    	if (isError) return <p>Erreur: {error.message}</p>;

    	return (
    		<div>
    			<h2>Liste des utilisateurs</h2>
    			<ul>
    				{data.map((user) => (
    					<li key={user.id}>{user.name}</li>
    				))}
    			</ul>
    			{isFetching && <p>Maj des données...</p>}
    			<button onClick={() => refetch()}>Refetch</button>
    		</div>
    	);
    }
    ```
