# Cour : **HOC:**

## 1. **Définition HOC (Higher-Order Component):**

> Un **Higher-Order Component (HOC)** est un **pattern avancé de React** qui permet de **réutiliser la logique de composants**.

> C’est **une fonction** qui prend un composant et retourne un **nouveau composant** enrichi.

-   **Signature :**

    ```jsx
    const EnhancedComponent = withSomething(WrappedComponent);
    ```

-   **Pourquoi utiliser un HOC ?** Un HOC permet de :

    -   Réutiliser de la logique sans la dupliquer.
    -   Appliquer des **cross-cutting concerns** (authentification, fetch, logs…).
    -   Séparer **logique métier** et **présentation**.
    -   Garder des composants simples et modulaires.

## 2. **Exemple simple de HOC**

> Objectif : ajouter un message de chargement

-   Composant initial :

    ```jsx
    const UserList = ({ users }) => (
    	<ul>
    		{users.map((user) => (
    			<li key={user.id}>{user.name}</li>
    		))}
    	</ul>
    );
    ```

-   HOC : `withLoader`

    ```jsx
    const withLoader = (Component) => {
    	return function WithLoaderComponent({ isLoading, ...props }) {
    		if (isLoading) return <p>Loading...</p>;
    		return <Component {...props} />;
    	};
    };
    ```

-   Composition :

    ```jsx
    const UserListWithLoader = withLoader(UserList);

    // Usage
    <UserListWithLoader isLoading={true} users={[]} />;
    ```
