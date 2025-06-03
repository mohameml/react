# Cour : **Introduction:**

## 1. **Introduction à React Hook Form**

-   **Définition :**

    > React Hook Form (RHF) est une **bibliothèque de gestion de formulaires** pour React, conçue pour rendre les formulaires **rapides, légers** et **faciles à valider**.

-   **À quoi sert-il ?:** Il permet de :

    -   Créer et gérer des formulaires de manière performante.
    -   Gérer l'état du formulaire sans `useState` à chaque champ.
    -   Ajouter facilement des règles de validation.
    -   Intégrer des schémas de validation (`Yup`, `Zod`, etc.).

-   **Quand l'utiliser ?:**

    -   Quand tu développes des formulaires complexes ou interactifs.
    -   Si tu veux améliorer les performances de ton app React.

-   **Avantages :**

    -   Simple à utiliser et apprendre.
    -   Performant (évite les re-render inutiles).
    -   Léger (peu de dépendances).
    -   Supporte les validations synchrones et asynchrones.
    -   Compatible avec TypeScript.

## 2. **Hook `useForm`**

-   **Définition :**

    > `useForm` est le **hook principal** fourni par React Hook Form. Il permet d'initialiser le formulaire et de récupérer les fonctions nécessaires pour le gérer (comme `register`, `handleSubmit`, etc.).

-   **Syntaxe de base :**

    ```js
    import { useForm } from "react-hook-form";

    const {
    	register,
    	handleSubmit,
    	watch,
    	formState: { errors },
    } = useForm();
    ```

-   **Exemple simple :**

    ```jsx
    import React from "react";
    import { useForm } from "react-hook-form";

    function ContactForm() {
    	const {
    		register,
    		handleSubmit,
    		formState: { errors },
    	} = useForm();

    	const onSubmit = (data) => {
    		console.log(data);
    	};

    	return (
    		<form onSubmit={handleSubmit(onSubmit)}>
    			<input
    				{...register("name", { required: true })}
    				placeholder="Name"
    			/>
    			{errors.name && <span>This field is required</span>}
    			<input type="submit" />
    		</form>
    	);
    }
    ```

## 3. **Fonction `register`:**

-   **Définition :**

    > La fonction `register` permet d’**enregistrer un champ de formulaire** dans le système de React Hook Form. Elle connecte le champ aux fonctionnalités du hook (`validation`, `state`, etc.).

-   **Syntaxe :**

    ```js
    <input {...register("champ", options)} />
    ```

-   **Options possibles :**

-   `required`: champ obligatoire.
-   `minLength`, `maxLength`
-   `pattern`: regex pour valider.
-   `validate`: fonction personnalisée.

-   **Exemple :**

    ```jsx
    <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />;
    {
    	errors.email && <span>Email invalide</span>;
    }
    ```

## 4. **Fonction `handleSubmit`**

-   **Définition :**

    > `handleSubmit` est une fonction de `useForm` qui **encapsule ta fonction de soumission** (`onSubmit`). Elle s’assure que la validation est correcte avant d’appeler ta fonction.

-   **Syntaxe :**

    ```js
    <form onSubmit={handleSubmit(onSubmit)}>
    ```

-   **Exemple :**

    ```jsx
    const onSubmit = (data) => {
    	console.log("Données du formulaire :", data);
    };

    <form onSubmit={handleSubmit(onSubmit)}>
    	<input {...register("username", { required: true })} />
    	<button type="submit">Envoyer</button>
    </form>;
    ```
