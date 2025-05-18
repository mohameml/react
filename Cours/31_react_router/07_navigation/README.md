# cour 07 : **Navigation:**

## 1. **`useNavigate:`**

-   **Définition :**

    > `useNavigate` est un **hook de React Router** qui permet de **naviguer par programmation** vers une autre page/URL. Il remplace l’ancienne méthode `useHistory().push()`.

    > Il est utile pour **rediriger** l’utilisateur après une action (formulaire, bouton, etc.).

-   **Syntaxe :**

    ```jsx
    import { useNavigate } from "react-router-dom";

    const navigate = useNavigate();

    // Aller vers une route :
    navigate("/home");

    // Avec options (par ex. remplacer l'historique) :
    navigate("/login", { replace: true });

    // Aller en arrière :
    navigate(-1); // équivalent à window.history.back()
    ```

    | Fonction                          | Rôle                                                                                                                            |
    | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
    | `navigate(path)`                  | Va vers une route                                                                                                               |
    | `navigate(path, {replace: true})` | Remplace l’URL dans l’historique (comme une redirection) ie : `l'utilisateur ne peut pas revenir en arrière avec le bouton "←"` |
    | `navigate(-1)`                    | Revenir en arrière                                                                                                              |

-   **Exemple Complet**

    ```jsx
    import { useNavigate } from "react-router-dom";
    import { useState } from "react";

    function LoginForm() {
    	const [username, setUsername] = useState("");
    	const navigate = useNavigate();

    	const handleSubmit = (e) => {
    		e.preventDefault();

    		// logique d'authentification...
    		if (username === "admin") {
    			// Redirection vers la page d'accueil
    			navigate("/dashboard");
    		} else {
    			alert("Nom d'utilisateur invalide");
    		}
    	};

    	return (
    		<form onSubmit={handleSubmit}>
    			<input
    				type="text"
    				placeholder="Nom d'utilisateur"
    				value={username}
    				onChange={(e) => setUsername(e.target.value)}
    			/>
    			<button type="submit">Connexion</button>
    		</form>
    	);
    }
    ```

## 2. **`Navigate:`**

-   **Définition :**

    > La composante **`<Navigate />`** permet de faire une **redirection automatique** dans un composant React, **sans bouton ni événement**. Elle est **déclarative**, contrairement au hook `useNavigate` (qui est impératif).

-   **Syntaxe**

    ```jsx
    import { Navigate } from "react-router-dom";

    <Navigate to="/chemin" replace={true} />;
    ```

    | Prop      | Description                                                                                |
    | --------- | ------------------------------------------------------------------------------------------ |
    | `to`      | Le chemin vers lequel rediriger                                                            |
    | `replace` | (optionnel) Remplace l’entrée actuelle dans l’historique au lieu d’en ajouter une nouvelle |

-   **Exemple 1 : Redirection simple**

    ```jsx
    import { Navigate } from "react-router-dom";

    function NotFoundPage() {
    	return <Navigate to="/404" />;
    }
    ```

    ➡️ Redirige vers la page "/404" dès que le composant est rendu.

-   **Exemple 2 : Redirection conditionnelle (ex: auth)**

    ```jsx
    import { Navigate } from "react-router-dom";

    function Profile({ isAuthenticated }) {
    	if (!isAuthenticated) {
    		return <Navigate to="/login" replace />;
    	}

    	return <h1>Mon profil</h1>;
    }
    ```

    ➡️ Si l’utilisateur n’est pas authentifié, il est redirigé automatiquement vers `/login`.

-   **Exemple 3 : Redirection dans les routes**

    ```jsx
    import { Routes, Route, Navigate } from "react-router-dom";

    <Routes>
    	<Route path="/" element={<Home />} />
    	<Route path="/start" element={<Navigate to="/home" replace />} />
    </Routes>;
    ```

    ➡️ Toute tentative d’aller vers `/start` redirige automatiquement vers `/home`.
