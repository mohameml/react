Voici un **cours complet sur la configuration de Tailwind CSS**, avec une explication claire sur **l’ajout de polices, couleurs, breakpoints, etc.**, selon tes consignes :

---

## 1. ⚙️ Définition : À quoi sert le fichier `tailwind.config.js` ?

Ce fichier permet de **personnaliser Tailwind CSS** :

-   Ajouter des **nouvelles couleurs, polices, tailles**
-   Étendre ou remplacer les valeurs par défaut
-   Créer des **breakpoints responsives**
-   Ajouter des **plugins** et **presets**

Il est généré avec :

```bash
npx tailwindcss init
```

---

## 2. 🧱 Tableau des options principales

| **Clé**        | **Définition**                                       | **Syntaxe / Exemple**                             |
| -------------- | ---------------------------------------------------- | ------------------------------------------------- |
| `theme.extend` | Sert à **ajouter sans écraser** les styles existants | `theme: { extend: { colors: {...} } }`            |
| `colors`       | Ajoute ou remplace des couleurs personnalisées       | `colors: { brand: '#1DA1F2' }`                    |
| `fontFamily`   | Déclare de nouvelles familles de polices             | `fontFamily: { sans: ['Poppins', 'sans-serif'] }` |
| `screens`      | Déclare les breakpoints responsives personnalisés    | `screens: { 'xs': '475px', ... }`                 |
| `spacing`      | Ajoute de nouvelles tailles d’espacement             | `spacing: { '72': '18rem' }`                      |
| `borderRadius` | Ajoute de nouvelles tailles de bordures arrondies    | `borderRadius: { 'xl': '1rem' }`                  |
| `plugins`      | Permet d’ajouter des plugins Tailwind                | `plugins: [require('@tailwindcss/forms')]`        |

---

## 3. ✅ Exemples pratiques à retenir

### ✅ Ajouter une **police personnalisée**

```js
// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				fancy: ['"Playfair Display"', "serif"],
			},
		},
	},
};
```

```html
<p class="font-fancy">Texte avec la police Playfair</p>
```

---

### ✅ Ajouter une **couleur personnalisée**

```js
module.exports = {
	theme: {
		extend: {
			colors: {
				primary: "#0d9488",
				secondary: {
					100: "#f0fdfa",
					200: "#ccfbf1",
				},
			},
		},
	},
};
```

```html
<div class="bg-primary text-white">Fond couleur personnalisée</div>
```

---

### ✅ Ajouter un **breakpoint responsive** personnalisé

```js
module.exports = {
	theme: {
		extend: {
			screens: {
				xs: "475px",
				"3xl": "1600px",
			},
		},
	},
};
```

```html
<div class="xs:bg-yellow-100 3xl:bg-red-300">Fond change selon la taille</div>
```

---

### ✅ Ajouter un **espacement personnalisé**

```js
module.exports = {
	theme: {
		extend: {
			spacing: {
				72: "18rem",
				84: "21rem",
			},
		},
	},
};
```

```html
<div class="p-72">Padding géant personnalisé</div>
```

---

### ✅ Ajouter un **plugin Tailwind**

```bash
npm install @tailwindcss/forms
```

```js
// tailwind.config.js
module.exports = {
	plugins: [require("@tailwindcss/forms")],
};
```

---

## 📌 À retenir

-   Utilise toujours `extend` pour **ne pas écraser les styles par défaut**.
-   Toutes les valeurs ajoutées peuvent être utilisées comme des **classes Tailwind normales**.
-   Chaque propriété suit une structure : `theme -> extend -> propriété`.

Souhaites-tu un exemple complet de projet avec configuration personnalisée (typographie + couleurs + plugin) ?
