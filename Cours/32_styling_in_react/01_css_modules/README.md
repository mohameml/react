# Cour : **CSS Modules en React**

## 1. **Définition de CSS Modules:**

> **CSS Modules** est une méthode de gestion du style en React (ou tout projet JS moderne) qui permet de **scoper localement** les classes CSS à un composant.

-   Cela évite les conflits de noms entre différents fichiers CSS (ex: `.button`, `.header`) et rend le CSS plus maintenable.

-   **Exemple problème sans CSS Modules :**

    ```css
    /* styles.css */
    .button {
    	color: red;
    }
    ```

    ```jsx
    // App.jsx
    import "./styles.css";
    <button className="button">Click me</button>;

    // Autre composant
    import "./autreStyles.css";
    /* contient aussi .button => conflit potentiel */
    ```

    > **Avec CSS Modules**, chaque classe est transformée en nom unique automatiquement.

## 2. **Structure et Syntaxe:**

-   **Nom du fichier:**

    Pour utiliser CSS Modules, il faut nommer les fichiers avec l’extension :

    ```
    [Nom].module.css
    ```

    Exemple : `Button.module.css`

-   **Importation et usage:**

    -   **Fichier CSS :**

        ```css
        /* Button.module.css */
        .button {
        	background-color: blue;
        	color: white;
        	padding: 10px;
        }
        ```

    -   **Composant React :**

        ```jsx
        // Button.jsx
        import styles from "./Button.module.css";

        function Button() {
        	return <button className={styles.button}>Click me</button>;
        }
        ```

    > La classe `.button` est convertie en quelque chose comme `Button_button__3fR9X` et évite tout conflit global.

-   **Exemples pratiques:**

    ```css
    /* Card.module.css */
    .card {
    	border: 1px solid gray;
    	border-radius: 8px;
    	padding: 16px;
    }
    .title {
    	font-weight: bold;
    }
    ```

    ```jsx
    // Card.jsx
    import styles from "./Card.module.css";

    function Card() {
    	return (
    		<div className={styles.card}>
    			<h2 className={styles.title}>Titre de la carte</h2>
    			<p>Contenu de la carte.</p>
    		</div>
    	);
    }
    ```

### RQ : **Fonctionnement technique**

-   Webpack ou Vite transforme automatiquement :

    ```css
    .title {
    	color: red;
    }
    ```

    En :

    ```css
    .title__1x2ab {
    	color: red;
    }
    ```

    Et dans le JS :

    ```js
    styles = {
    	title: "title__1x2ab",
    };
    ```

## 3. Avantages et inconvénients

-   ✅ Avantages

    -   Scoping automatique (pas de conflit de classes).
    -   Simple et natif (pas de lib externe).
    -   Lisible, maintenable.
    -   Compatible avec TypeScript.

-   ❌ Inconvénients

    -   Pas de dynamic styling (ex: `:hover` dynamiques avec props) — pour cela on utilise styled-components.
    -   Un peu plus verbeux qu’un CSS global.

## 4. **la fonction `:global()`:**

> Dans **CSS Modules**, toutes les classes sont **scopées localement** par défaut. Mais parfois, on souhaite que **certaines classes restent globales** (visibles partout dans l’app). C’est là qu’intervient **`:global`**.

-   **Syntaxe de `:global`:**

    ```css
    /* styles.module.css */
    :global(.my-global-class) {
    	color: red;
    }
    ```

    Cela signifie que `.my-global-class` **ne sera pas renommée** automatiquement par le système de CSS Modules. Elle sera visible globalement, comme dans un CSS classique.

-   **Exemple complet:**

    ```css
    /* styles.module.css */
    .button {
    	color: white;
    	background-color: blue;
    }

    :global(.danger) {
    	background-color: red;
    }
    ```

    ```jsx
    // Button.jsx
    import styles from "./styles.module.css";

    function Button() {
    	return (
    		<div>
    			<button className={styles.button}>Normal</button>
    			<button className="danger">Danger</button> {/* Global class */}
    		</div>
    	);
    }
    ```
