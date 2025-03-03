# Cour : 📌 **Cours sur `localStorage` dans React**

## 1.**Définition et utilisation**

-   **Définition**

    > Le `localStorage` est une API du navigateur permettant de **stocker des données de manière persistante**. Contrairement au `sessionStorage`, les données restent **même après un rechargement ou une fermeture du navigateur**.

-   Le `localStorage` permet de **stocker des paires clé-valeur** en **local** sur le navigateur de l'utilisateur. Il est souvent utilisé pour :

    -   **Sauvegarder les préférences utilisateur** (ex : mode sombre).
    -   **Garder des données entre les sessions** (ex : panier d'achat).
    -   **Stocker les états de l’application** (ex : liste de tâches, authentification).

## 2.**`localStorage`:**

-   **Ajouter une donnée dans `localStorage`**

    ```js
    localStorage.setItem("clé", "valeur");
    ```

-   **Récupérer une donnée**

    ```js
    const valeur = localStorage.getItem("clé");
    ```

-   **Supprimer une donnée**

    ```js
    localStorage.removeItem("clé");
    ```

-   **Vider complètement le `localStorage`**

    ```js
    localStorage.clear();
    ```

-   **Stocker un objet (avec `JSON.stringify`)**

    Le `localStorage` **ne peut stocker que des chaînes de caractères**. Pour stocker un objet :

    ```js
    const user = { id: 1, name: "Alice" };
    localStorage.setItem("user", JSON.stringify(user));
    ```

-   **Récupérer un objet (avec `JSON.parse`)**

    ```js
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    console.log(user); // { id: 1, name: "Alice" }
    ```

## 3.**Exemple complet en React:**

-   **Persistance d'un `state` avec `localStorage`**

    ```jsx
    import { useState, useEffect } from "react";

    const App = () => {
    	// étape 1 : récupération du data from localeStorge :
    	const [items, setItems] = useState(() => {
    		// Charger les données sauvegardées ou utiliser `data` par défaut
    		const storedItems = localStorage.getItem("items");
    		return storedItems ? JSON.parse(storedItems) : data;
    	});

    	// étape 2 : à chaque fois items change on update items dans le localStorge :
    	useEffect(() => {
    		localStorage.setItem("items", items);
    	}, [items]);

    	return (
    		<div>
    			<input
    				type="text"
    				value={name}
    				onChange={(e) => setName(e.target.value)}
    				placeholder="Entrez votre nom"
    			/>
    			<p>Nom enregistré : {name}</p>
    		</div>
    	);
    };

    export default App;
    ```

-   📌 **Explication**

    ✅ **Au chargement**, on récupère le `items` depuis `localStorage`.  
    ✅ **À chaque modification**, on met à jour `localStorage`.  
    ✅ **Les données sont persistantes même après un rafraîchissement**.
