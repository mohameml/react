# Cour : **useMutate:**

## 1. **Définition de `useMutation`:**

> Le hook `useMutation` sert à effectuer des **mutations de données** (écriture sur le serveur), contrairement à `useQuery` qui sert à lire des données.

-   Il est utilisé pour :

    -   **Créer** une ressource (POST),
    -   **Mettre à jour** une ressource (PUT/PATCH),
    -   **Supprimer** une ressource (DELETE),

    -   et gérer automatiquement les états associés : `isPending`, `isSuccess`, `isError`, etc.

-   **Syntaxe détaillée de `useMutation`:**

    ```ts
    const mutation = useMutation({
        mutationFn: async (data) => { ... },      // fonction asynchrone (POST, PUT, etc.)
        onSuccess: (data, variables, context) => {},
        onError: (error, variables, context) => {},
        onSettled: (data, error, variables, context) => {},

    })
    ```

    -   `mutationFn` : fonction qui exécute la requête (ex : axios.post).
    -   `variables` : les données passées à `.mutate(variables)`.

-   **Exemple complet:**

    ```tsx
    import { useMutation } from "@tanstack/react-query";
    import axios from "axios";

    const addUser = async (newUser) => {
    	const res = await axios.post(
    		"https://jsonplaceholder.typicode.com/users",
    		newUser
    	);
    	return res.data;
    };

    function AddUserForm() {
    	const mutation = useMutation({
    		mutationFn: addUser,
    		onSuccess: (data) => {
    			console.log("Utilisateur ajouté", data);
    		},
    		onError: (error) => {
    			console.error("Erreur lors de l’ajout", error);
    		},
    	});

    	const handleSubmit = (e) => {
    		e.preventDefault();
    		const user = {
    			name: e.target.name.value,
    			email: e.target.email.value,
    		};
    		mutation.mutate(user);
    	};

    	return (
    		<form onSubmit={handleSubmit}>
    			<input name="name" placeholder="Nom" />
    			<input name="email" placeholder="Email" />
    			<button type="submit">Ajouter</button>

    			{mutation.isPending && <p>Ajout en cours...</p>}
    			{mutation.isError && <p>Erreur : {mutation.error.message}</p>}
    			{mutation.isSuccess && <p>Utilisateur ajouté !</p>}
    		</form>
    	);
    }
    ```
