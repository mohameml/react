# Cour : **la fonction `register`:**

## 1. **Définition : `register`**

> La fonction `register` est **le cœur de la logique de liaison des inputs** dans React Hook Form.

-   Elle permet d'enregistrer un champ dans le système de gestion du formulaire afin que React Hook Form puisse :

    -   Suivre sa valeur
    -   Gérer sa validation
    -   Détecter les changements
    -   Gérer les erreurs et le focus automatiquement

-   Elle s’utilise directement dans l’élément `<input />`, `<select />`, etc., en déstructurant ses attributs avec `{...register(...)}`.

## 2. **Syntaxe : `register(name, validationOptions?)`**

-   **Signature :**

    ```tsx
    register(name: string, options?: RegisterOptions)
    ```

    -   `name` : le nom unique du champ (ex: `"email"`, `"user.password"`, etc.)
    -   `options` : un objet contenant les **règles de validation** du champ.

-   **Liste complète des options de validation :**

    | Option          | Type                                            | Description                                                     |
    | --------------- | ----------------------------------------------- | --------------------------------------------------------------- |
    | `required`      | `boolean` ou `{ value: true, message: string }` | Champ obligatoire                                               |
    | `min`           | `{ value: number, message: string }`            | Valeur minimale (pour les nombres)                              |
    | `max`           | `{ value: number, message: string }`            | Valeur maximale (pour les nombres)                              |
    | `minLength`     | `{ value: number, message: string }`            | Longueur minimale (string)                                      |
    | `maxLength`     | `{ value: number, message: string }`            | Longueur maximale (string)                                      |
    | `pattern`       | `{ value: RegExp, message: string }`            | Expression régulière                                            |
    | `validate`      | `function` ou objet `{ [key]: function }`       | Validation personnalisée (retourne true ou un message d'erreur) |
    | `valueAsNumber` | `boolean`                                       | Convertit en nombre                                             |
    | `valueAsDate`   | `boolean`                                       | Convertit en date                                               |

-   **Exemple de syntaxe :**

    ```tsx
    <input
    	{...register("email", {
    		required: "Email requis",
    		pattern: {
    			value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    			message: "Email invalide",
    		},
    	})}
    />
    ```

## 3. **Exemple complet avec messages personnalisés**

```tsx
import React from "react";
import { useForm } from "react-hook-form";

export default function FormExample() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("✅ Données valides :", data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* Champ Email */}
			<div>
				<label>Email</label>
				<input
					type="email"
					{...register("email", {
						required: "L'email est requis",
						pattern: {
							value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
							message: "Format d'email invalide",
						},
					})}
				/>
				{errors.email && (
					<p style={{ color: "red" }}>{errors.email.message}</p>
				)}
			</div>

			{/* Champ Âge */}
			<div>
				<label>Âge</label>
				<input
					type="number"
					{...register("age", {
						required: "L'âge est requis",
						min: {
							value: 18,
							message: "Vous devez avoir au moins 18 ans",
						},
						max: {
							value: 65,
							message: "Vous devez avoir moins de 65 ans",
						},
					})}
				/>
				{errors.age && (
					<p style={{ color: "red" }}>{errors.age.message}</p>
				)}
			</div>

			{/* Champ personnalisé avec validate */}
			<div>
				<label>Mot de passe</label>
				<input
					type="password"
					{...register("password", {
						required: "Mot de passe requis",
						minLength: {
							value: 6,
							message: "Au moins 6 caractères",
						},
						validate: (value) =>
							value.includes("!") ||
							"Le mot de passe doit contenir un '!'",
					})}
				/>
				{errors.password && (
					<p style={{ color: "red" }}>{errors.password.message}</p>
				)}
			</div>

			<button type="submit">Envoyer</button>
		</form>
	);
}
```

### ✅ Résumé

| Élément                            | Explication                                        |
| ---------------------------------- | -------------------------------------------------- |
| `register(name, options)`          | Connecte un champ au formulaire avec validation    |
| `required`, `min`, `pattern`, etc. | Règles de validation natives                       |
| `validate`                         | Validation personnalisée                           |
| `message`                          | Permet d'afficher un message d’erreur personnalisé |
| `errors[name].message`             | Contient le message à afficher à l’utilisateur     |
