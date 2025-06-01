# Cour 01 : **Introduction:**

## 1. **Introduction:**

-   **Définition :**

    > **Tailwind CSS** est un **framework CSS utilitaire**. Contrairement à Bootstrap ou Bulma, il ne fournit pas de composants prédéfinis comme des boutons ou des cartes. Au lieu de cela, il offre une collection de **classes utilitaires** de bas niveau (ex : `p-4`, `text-center`, `bg-red-500`) que vous pouvez **combiner directement dans votre HTML** pour créer vos propres composants.

-   **Avantages :**

    -   **Personnalisation totale** : Vous gardez le contrôle total du design, contrairement aux composants figés d’autres frameworks.

    -   **Rapidité de développement** : Les classes prêtes à l’emploi permettent de construire des interfaces rapidement.

    -   **Code CSS minimal** : Plus besoin d’écrire du CSS personnalisé pour chaque composant.

    -   **Responsive intégré** : Grâce aux préfixes (`sm:`, `md:`, `lg:`...), on adapte facilement au mobile.

    -   **Facile à maintenir** : On évite la duplication de règles CSS.

## 2. **Installation :**

## 2.1 **Méthode rapide via CDN:**

Ajoutez ce lien dans la balise `<head>` de votre fichier HTML :

```html
<link href="https://cdn.tailwindcss.com" rel="stylesheet" />
```

## 2.2 **installer Tailwind CSS avec Vite :**

-   **Installer Tailwind CSS:**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

-   **`tailwind.config.js`:**

    Modifie le fichier pour qu’il scanne tes fichiers :

    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
    	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    	theme: {
    		extend: {},
    	},
    	plugins: [],
    };
    ```

-   **Ajouter Tailwind dans le CSS:**

    Crée un fichier CSS dans `src/index.css` (ou utilise celui existant) avec ces 3 directives Tailwind :

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    Puis, importe-le dans ton point d’entrée (souvent `main.jsx` ou `main.tsx`) :

    ```js
    import "./index.css";
    ```

## 3. **Exemple simple:**

-   **Code HTML :**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    	<head>
    		<meta charset="UTF-8" />
    		<title>Exemple Tailwind</title>
    		<script src="https://cdn.tailwindcss.com"></script>
    	</head>
    	<body class="bg-gray-100 flex items-center justify-center h-screen">
    		<div class="bg-white p-6 rounded-xl shadow-lg text-center">
    			<h1 class="text-2xl font-bold text-blue-600 mb-4">
    				Hello Tailwind!
    			</h1>
    			<p class="text-gray-700">
    				Ceci est une carte stylée avec Tailwind CSS.
    			</p>
    			<button
    				class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    			>
    				Cliquez ici
    			</button>
    		</div>
    	</body>
    </html>
    ```
