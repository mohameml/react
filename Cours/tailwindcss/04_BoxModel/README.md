# Cour 04 : **BoxModel**

## 1. Définition du **Box Model** & à quoi il sert

> Le **Box Model** est un concept fondamental en CSS. Chaque élément HTML est considéré comme une **boîte rectangulaire** composée de :

-   **Content** : le contenu réel (texte, image…)
-   **Padding** : espace **interne** entre le contenu et la bordure
-   **Border** : la **bordure** de l’élément
-   **Margin** : espace **externe** entre l’élément et les autres

En Tailwind CSS, chaque partie du box model se gère avec des **classes utilitaires**, pour espacer, aligner et styliser les blocs sans écrire de CSS personnalisé.

## 2. Tableau des classes essentielles du Box Model

| **Nom de la classe**        | **Définition**                                                         | **Syntaxe**                             |
| --------------------------- | ---------------------------------------------------------------------- | --------------------------------------- |
| `p`, `px`, `py`, `pt`, etc. | Définit le **padding** (espace intérieur)                              | `p-4`, `px-2`, `pt-6`                   |
| `m`, `mx`, `my`, `mt`, etc. | Définit la **margin** (espace extérieur)                               | `m-4`, `mx-auto`, `mb-8`                |
| `space-{x/y}`               | Ajoute de l’**espacement entre enfants directs** (horizontal/vertical) | `space-x-4`, `space-y-2`                |
| `border`, `border-{side}`   | Ajoute une **bordure** (entière ou partielle)                          | `border`, `border-t`, `border-r-2`      |
| `border-{color}`            | Définit la **couleur de la bordure**                                   | `border-gray-300`, `border-blue-500`    |
| `border-{radius}`           | Définit le **rayon de bordure** (coins arrondis)                       | `rounded`, `rounded-lg`, `rounded-full` |
| `display`                   | Définit le **type de boîte** (inline, block, flex, grid, etc.)         | `block`, `inline-block`, `flex`, `grid` |

## 3. Exemples à retenir et à réutiliser

### ✅ Carte avec padding, bordure et coins arrondis

```html
<div class="p-6 border border-gray-300 rounded-lg">
	<h2 class="text-lg font-bold">Titre</h2>
	<p class="text-gray-700">Contenu de la carte avec du padding.</p>
</div>
```

### ✅ Deux éléments espacés horizontalement

```html
<div class="flex space-x-4">
	<button class="p-2 bg-blue-500 text-white rounded">Bouton 1</button>
	<button class="p-2 bg-blue-500 text-white rounded">Bouton 2</button>
</div>
```

### ✅ Centrer un élément horizontalement

```html
<div class="mx-auto w-1/2 bg-gray-100 p-4">
	Élement centré horizontalement avec `mx-auto`
</div>
```

### ✅ Affichage d’un élément en `flex`

```html
<div class="flex items-center justify-between p-4 border">
	<span>Logo</span>
	<nav>Menu</nav>
</div>
```

### ✅ Bordure colorée avec coins arrondis

```html
<div class="border border-red-500 rounded-md p-3">Message d'erreur</div>
```
