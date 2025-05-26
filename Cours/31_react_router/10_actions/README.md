# Cour 10 : **Actions:**

## 1. **`actions` en React Router:**

-   **Définition:**

    > En React Router, une **`action`** est une **fonction asynchrone associée à une route**, qui est déclenchée **lorsqu’un formulaire (wrapped avec `Form`) est soumis**.

    > Elle remplace souvent `onSubmit` dans les composants React classiques.

-   Elle est utilisée pour gérer la **logique de soumission de formulaire**, comme :

    -   Créer un nouvel utilisateur
    -   Modifier des données (PATCH, PUT)
    -   Supprimer des données (DELETE)
    -   Valider les champs

-   **À quoi sert `action`:**

    -   Centraliser la logique de mutation (écriture) côté route.
    -   Gérer les **redirections**, les **erreurs** ou les **messages** après soumission.
    -   Fournir les **données de retour (ex: erreurs de validation)** via le hook `useActionData`.

## 2. **Mise en place (étapes complètes):**

-   **Wrapper le formulaire avec `Form` de `react-router-dom`:**

    ```jsx
    import { Form } from "react-router-dom";

    <Form method="post">
    	<input type="text" name="username" />
    	<button type="submit">Envoyer</button>
    </Form>;
    ```

    > `method="post"` permet de déclencher la `action` associée à la route.

-   **Définir une `action function`:**

    ```js
    export async function action({ request }) {
    	const formData = await request.formData();
    	const username = formData.get("username");

    	if (!username) {
    		return { error: "Nom d'utilisateur requis" };
    	}

    	// Ici on pourrait appeler une API, sauvegarder, etc.
    	return { success: true };
    }
    ```

-   **Déclarer `action` dans `createBrowserRouter`:**

    ```js
    import { createBrowserRouter } from "react-router-dom";
    import RegisterPage from "./pages/RegisterPage";
    import { registerAction } from "./actions/registerAction";

    const router = createBrowserRouter([
    	{
    		path: "/register",
    		element: <RegisterPage />,
    		action: registerAction,
    	},
    ]);
    ```

-   **Récupérer le résultat de l'action avec `useActionData`:**

    ```js
    import { useActionData } from "react-router-dom";

    const data = useActionData();
    ```

## 3. **`action function`:**

-   **Définition:**

    > Une **`action`** est une fonction asynchrone appelée lors de la soumission d’un `<Form method="post">` (ou `"put"`, `"delete"`, etc.).

    -   Elle reçoit un objet `{ request, params }`, traite les données du formulaire, et retourne une **réponse serializable**.

-   **Syntaxe:**

    ```js
    export async function myAction({ request, params }) {
    	const formData = await request.formData();
    	const data = Object.fromEntries(formData);

    	const newOrder = await createOrder(order);

    	return redirect(`/order/${newOrder.id}`);
    }
    ```

    | Élément   | Description                                                                                 |
    | --------- | ------------------------------------------------------------------------------------------- |
    | `request` | Objet `Request` de la requête (formData, headers, etc.)                                     |
    | `params`  | Paramètres dynamiques de l'URL (ex: `:userId`)                                              |
    | `return`  | Un objet JSON (par ex. `{ errors }`, `{ message }`, etc.), accessible via `useActionData()` |

-   **Exemple d’action simple avec validation:**

    ```js
    // Login.jsx:

    export async function action({ request }) {
    	const formData = await request.formData();
    	const email = formData.get("email");
    	const password = formData.get("password");

    	const errors = {};
    	if (!email) errors.email = "Email requis";
    	if (!password) errors.password = "Mot de passe requis";

    	if (Object.keys(errors).length > 0) {
    		return { errors };
    	}

    	// Authentifier l'utilisateur (hypothétique)
    	return { success: true };
    }
    ```

## 4. **`useActionData`:**

-   **Définition:**

    > `useActionData` est un **hook React** de React Router qui permet d'accéder à la **valeur retournée par la `action`** lors de la soumission d’un formulaire.

-   Il est souvent utilisé pour :

    -   Afficher des **messages d’erreur**
    -   Afficher un message de succès
    -   Réagir à la logique métier post-submission

-   **Syntaxe:**

    ```js
    import { useActionData } from "react-router-dom";

    const data = useActionData();
    ```

    > Le `data` contiendra le **retour de la fonction `action`**, typiquement `{ errors }`, `{ message }`, ou `{ success }`.

-   **Exemple:**

    ```jsx
    import { Form, useActionData } from "react-router-dom";

    export default function LoginPage() {
    	const data = useActionData();

    	return (
    		<Form method="post">
    			<div>
    				<label>Email</label>
    				<input name="email" type="email" />
    				{data?.errors?.email && (
    					<p style={{ color: "red" }}>{data.errors.email}</p>
    				)}
    			</div>

    			<div>
    				<label>Mot de passe</label>
    				<input name="password" type="password" />
    				{data?.errors?.password && (
    					<p style={{ color: "red" }}>{data.errors.password}</p>
    				)}
    			</div>

    			<button type="submit">Connexion</button>
    		</Form>
    	);
    }
    ```
