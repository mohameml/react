# Cour :

## 1. **Définition:**

-   **`@apply`:**

    -   **`@apply`** Permet **d'injecter plusieurs classes utilitaires Tailwind dans une règle CSS personnalisée**

    -   **`@apply`** est utile quand on veut **réutiliser un ensemble de classes Tailwind** sans les répéter.

-   **`layer :`**

    -   Sert à **organiser et étendre Tailwind CSS** proprement via des couches (`base`, `components`, `utilities`).

    -   **`@layer`** permet d’ajouter ses propres styles tout en conservant les **bonnes priorités CSS** selon la philosophie Tailwind.

## 2. **Syntaxe :**

| **Nom**      | **Définition**                                                                 | **Syntaxe**                                                           |
| ------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| `@apply`     | Injecte plusieurs classes utilitaires Tailwind dans une classe CSS             | `.btn { @apply px-4 py-2 bg-blue-500 text-white rounded; }`           |
| `@layer`     | Regroupe les styles dans une des 3 couches (`base`, `components`, `utilities`) | `@layer components { .btn { @apply ... } }`                           |
| `base`       | Sert à **surcharger ou redéfinir** les styles de base                          | `@layer base { h1 { @apply text-2xl font-bold; } }`                   |
| `components` | Sert à créer des **composants réutilisables**                                  | `@layer components { .card { @apply shadow p-4 rounded bg-white; } }` |
| `utilities`  | Sert à créer ses **propres classes utilitaires**                               | `@layer utilities { .skew-10 { transform: skewY(-10deg); } }`         |

## 3. **Exemples:**

### ✅ Exemple 1 : Créer un composant `.btn` réutilisable

```css
/* style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
	.btn {
		@apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded;
	}
}
```

```html
<button class="btn">Bouton réutilisable</button>
```

### ✅ Exemple 2 : Ajouter un style de base à tous les titres

```css
@layer base {
	h1 {
		@apply text-3xl font-bold text-gray-800;
	}

	h2 {
		@apply text-2xl font-semibold;
	}
}
```

### ✅ Exemple 3 : Créer une utilitaire personnalisée `.skew-10`

```css
@layer utilities {
	.skew-10 {
		transform: skewY(-10deg);
	}
}
```

```html
<div class="skew-10 bg-red-100 p-4">Effet skew</div>
```
