# Cour : **useQueryClient**

## 1. **Définition de `useQueryClient`:**

> Le hook `useQueryClient` te permet d’accéder au **client React Query** (`queryClient`) dans tes composants React. Cet objet te donne **le contrôle global sur le cache** (lecture, mise à jour, suppression, invalidation…).

-   **Syntaxe:**

    ```tsx
    import { useQueryClient } from "@tanstack/react-query";

    const queryClient = useQueryClient();
    ```

-   **Exemple:**

    ```tsx
    const queryClient = useQueryClient();

    const handleClearUsers = () => {
    	queryClient.removeQueries({ queryKey: ["users"] }); // Supprime les données de cache associées à "users"
    };
    ```

-   **Exemple avec `useMutation`:**

    > Voici un exemple où l’on **ajoute un utilisateur**, puis on **invalide les données mises en cache** pour forcer leur refetch :

    ```tsx
    import { useMutation, useQueryClient } from "@tanstack/react-query";
    import axios from "axios";

    const addUser = async (user) => {
    	return await axios.post(
    		"https://jsonplaceholder.typicode.com/users",
    		user
    	);
    };

    function AddUser() {
    	const queryClient = useQueryClient();

    	const mutation = useMutation({
    		mutationFn: addUser,
    		onSuccess: () => {
    			queryClient.invalidateQueries({ queryKey: ["users"] }); // force un refetch des utilisateurs
    		},
    	});

    	return (
    		<button
    			onClick={() =>
    				mutation.mutate({ name: "Jean", email: "j@e.fr" })
    			}
    		>
    			Ajouter un utilisateur
    		</button>
    	);
    }
    ```

## 2. **méthodes de `queryClient` :**

> `queryClient` C’est une **instance centrale** créée avec `new QueryClient()` (souvent dans `main.jsx`). Elle permet de manipuler **manuellement** le cache.

-   **méthodes:**

    | Méthode                        | Description                                                                          |
    | ------------------------------ | ------------------------------------------------------------------------------------ |
    | `getQueryData(queryKey)`       | Lit les données en cache (ne déclenche pas de fetch)                                 |
    | `setQueryData(queryKey, data)` | Modifie directement les données dans le cache                                        |
    | `invalidateQueries(queryKey)`  | Marque la requête comme "stale" ⇒ relance automatique le fetch                       |
    | `removeQueries(queryKey)`      | Supprime complètement les données du cache (et les états associés)                   |
    | `resetQueries(queryKey)`       | Réinitialise une requête à son état initial (comme si elle n’avait jamais été faite) |

-   **Exemples de ces méthodes :**

    -   **Lire des données en cache :**

        ```ts
        const users = queryClient.getQueryData(["users"]);
        console.log(users);
        ```

    -   **Modifier les données manuellement (optimistic update) :**

        ```ts
        queryClient.setQueryData(["users"], (old) => [...old, newUser]);
        ```

    -   **Supprimer une requête du cache :**

        ```ts
        queryClient.removeQueries({ queryKey: ["users"] });
        ```

    -   **Exemple complet avec `setQueryData` (optimistic update):**

        ```tsx
        const mutation = useMutation({
        	mutationFn: addUser,
        	onMutate: async (newUser) => {
        		await queryClient.cancelQueries({ queryKey: ["users"] });
        		const previousUsers = queryClient.getQueryData(["users"]);

        		queryClient.setQueryData(["users"], (old) => [
        			...(old || []),
        			newUser,
        		]);

        		return { previousUsers };
        	},
        	onError: (err, newUser, context) => {
        		queryClient.setQueryData(["users"], context.previousUsers);
        	},
        	onSettled: () => {
        		queryClient.invalidateQueries({ queryKey: ["users"] });
        	},
        });
        ```
