# Cour : **hook useForm**

## 1. **Définition : `useForm`**

> `useForm` est un **hook principal de la bibliothèque [React Hook Form](https://react-hook-form.com/)**.

-   Il sert à :

    -   Gérer les états de formulaire (valeurs, erreurs, validation, etc.)
    -   Simplifier la manipulation et la validation des inputs dans un formulaire React.
    -   Minimiser les re-renderings et améliorer les performances.

-   **Principaux avantages :**

    -   **Très performant**
    -   **Facile à intégrer**
    -   **Supporte la validation native, custom, et via des schémas comme Yup/Zod**

## 2. Syntaxe complète

-   **Utilisation de base :**

    ```tsx
    const {
    	register,
    	handleSubmit,
    	watch,
    	setValue,
    	getValues,
    	reset,
    	resetField,
    	setError,
    	clearErrors,
    	formState: {
    		errors,
    		isSubmitting,
    		isValid,
    		dirtyFields,
    		touchedFields,
    	},
    } = useForm(options);
    ```

-   Détail des propriétés retournées par `useForm` :

    | Nom                                 | Description                                                                                 |
    | ----------------------------------- | ------------------------------------------------------------------------------------------- |
    | `register(name, options?)`          | Connecte un input au système RHF. Gère sa valeur et sa validation.                          |
    | `handleSubmit(onValid, onInvalid?)` | Fonction pour gérer la soumission. Appelle `onValid(data)` si OK, sinon `onInvalid(errors)` |
    | `watch(name?)`                      | Observe la valeur d’un champ ou de tous les champs du formulaire.                           |
    | `setValue(name, value)`             | Change manuellement la valeur d’un champ.                                                   |
    | `getValues(name?)`                  | Récupère la valeur d’un champ ou de tous les champs.                                        |
    | `reset(data?, config?)`             | Réinitialise tous les champs (valeurs et erreurs).                                          |
    | `resetField(name)`                  | Réinitialise un champ spécifique.                                                           |
    | `setError(name, error)`             | Définit une erreur manuellement sur un champ.                                               |
    | `clearErrors(name?)`                | Efface les erreurs d’un champ ou de tous les champs.                                        |
    | `formState`                         | Objet contenant plusieurs infos sur l'état du formulaire (voir ci-dessous).                 |

-   `formState` contient :

    | Propriété       | Description                                                       |
    | --------------- | ----------------------------------------------------------------- |
    | `errors`        | Objet contenant les erreurs de validation.                        |
    | `isSubmitting`  | `true` pendant que le formulaire est en cours de soumission.      |
    | `isValid`       | `true` si le formulaire est valide. (attention, dépend de `mode`) |
    | `dirtyFields`   | Liste des champs modifiés.                                        |
    | `touchedFields` | Champs visités par l'utilisateur.                                 |

## 3. **Exemple complet:**

> Exemple simple avec validation native :

```tsx
import React from "react";
import { useForm } from "react-hook-form";

export default function MyForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Formulaire validé ✅ :", data);
	};

	const onError = (errors) => {
		console.log("Erreurs de validation ❌ :", errors);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit, onError)}>
			<div>
				<label>Email :</label>
				<input
					type="email"
					{...register("email", {
						required: "Email requis",
						pattern: {
							value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
							message: "Format invalide",
						},
					})}
				/>
				{errors.email && <p>{errors.email.message}</p>}
			</div>

			<div>
				<label>Mot de passe :</label>
				<input
					type="password"
					{...register("password", {
						required: "Mot de passe requis",
						minLength: {
							value: 6,
							message: "Minimum 6 caractères",
						},
					})}
				/>
				{errors.password && <p>{errors.password.message}</p>}
			</div>

			<button type="submit">Envoyer</button>
		</form>
	);
}
```

### ✅ Résumé

| Élément            | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| `useForm()`        | Hook pour gérer l’état du formulaire                          |
| `register`         | Connecte les champs à React Hook Form                         |
| `handleSubmit`     | Gère la logique de soumission                                 |
| `formState.errors` | Contient les erreurs des champs                               |
| `mode`             | Contrôle le moment de validation (`onSubmit`, `onBlur`, etc.) |
