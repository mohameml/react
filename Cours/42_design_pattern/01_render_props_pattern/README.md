# Cour : **Render Props Pattern:**

## 1. Définition & Utilisation

-   **Définition:**

    > Le **Render Props Pattern** est un pattern React qui permet de **déléguer le rendu** d'un composant à une fonction passée via une **prop appelée `render`** (ou parfois `children`).

    👉 Cette fonction reçoit des **données** ou **états** internes du composant, et retourne du **JSX**.

-   **À quoi ça sert ?:**

    -   Séparer **logique** et **interface**.
    -   Réutiliser un composant **avec des rendus personnalisés**.

-   **Avantages:**

    | Avantage                          | Détail                                                                   |
    | --------------------------------- | ------------------------------------------------------------------------ |
    | 💡 Flexibilité                    | On peut facilement modifier le rendu sans toucher à la logique           |
    | 🔁 Réutilisabilité                | `ItemList` est générique et réutilisable dans plein de contextes         |
    | 🧼 Séparation des responsabilités | Le composant s'occupe **uniquement de la logique de liste**, pas de l'UI |

-   **Syntaxe Générale:**

    ```jsx
    function MyComponent({ render }) {
    	const data = "Hello Render Props!";
    	return render(data);
    }
    ```

    Et à l’utilisation :

    ```jsx
    <MyComponent render={(text) => <p>{text}</p>} />
    ```

## 2. **Exemple Complet : `ItemList` avec rendu personnalisé**

> Créer un composant `ItemList` qui **affiche une liste** d’items, mais où **le rendu de chaque item est délégué** à une fonction `render`.

-   Composant `ItemList.js`

    ```jsx
    import React from "react";

    function ItemList({ items, render }) {
    	return (
    		<ul>
    			{items.map((item, index) => (
    				<li key={index}>{render(item)}</li>
    			))}
    		</ul>
    	);
    }

    export default ItemList;
    ```

-   Utilisation avec rendu personnalisé

    ```jsx
    import React from "react";
    import ItemList from "./ItemList";

    const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];

    function App() {
    	return (
    		<div>
    			<h1>Liste des fruits</h1>

    			<h2>✅ Rendu normal</h2>
    			<ItemList
    				items={fruits}
    				render={(fruit) => <span>{fruit}</span>}
    			/>

    			<h2>🎨 Rendu stylisé</h2>
    			<ItemList
    				items={fruits}
    				render={(fruit) => (
    					<strong style={{ color: "orange" }}>
    						{fruit.toUpperCase()}
    					</strong>
    				)}
    			/>
    		</div>
    	);
    }

    export default App;
    ```
