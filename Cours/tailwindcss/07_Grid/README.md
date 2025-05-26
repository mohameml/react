# Cour : **Grid**

## 1. Définition de **CSS Grid** & à quoi ça sert

> **Grid Layout** est un système de mise en page en 2 dimensions (lignes et colonnes).

-   Contrairement à Flexbox (orientation 1D), Grid permet de créer des **structures complexes**, comme des grilles d’images, des dashboards, etc.

## 2. 📑 Tableau des classes principales de Grid

Tu as tout à fait raison — le tableau des classes était mal formaté et certains noms étaient corrompus (notamment avec les backticks et les variantes comme `place-items-{...}` ou `auto-cols-{...}`).

Voici la version **corrigée et propre** du tableau pour le cours sur **Grid avec Tailwind CSS** :

## 2. 📑 Tableau des classes principales de Grid (corrigé)

| **Nom de la classe**              | **Définition**                                             | **Exemples de syntaxe**         |
| --------------------------------- | ---------------------------------------------------------- | ------------------------------- |
| `grid`                            | Active un conteneur en **mode grille**                     | `grid`                          |
| `grid-cols-{n}`                   | Définit le **nombre de colonnes**                          | `grid-cols-1`, `grid-cols-3`    |
| `grid-rows-{n}`                   | Définit le **nombre de lignes** (optionnel)                | `grid-rows-2`, `grid-rows-4`    |
| `gap-{n}`                         | Ajoute un **espacement uniforme** entre colonnes et lignes | `gap-4`, `gap-2`                |
| `gap-x-{n}` / `gap-y-{n}`         | Ajoute un **espacement horizontal ou vertical**            | `gap-x-6`, `gap-y-2`            |
| `col-span-{n}`                    | Un élément **s'étale sur n colonnes**                      | `col-span-2`, `col-span-3`      |
| `row-span-{n}`                    | Un élément **s'étale sur n lignes**                        | `row-span-2`, `row-span-3`      |
| `place-items-start/center/end`    | Centre ou aligne les éléments **dans la grille**           | `place-items-center`            |
| `auto-cols-auto / min / max / fr` | Définit le **comportement automatique** des **colonnes**   | `auto-cols-fr`, `auto-cols-max` |
| `auto-rows-auto / min / max / fr` | Définit le **comportement automatique** des **lignes**     | `auto-rows-fr`, `auto-rows-min` |

## 3. ✅ Exemples à retenir et à réutiliser

### ✅ Exemple 1 : Grille de 3 colonnes avec espacement

```html
<div class="grid grid-cols-3 gap-4">
	<div class="bg-blue-100 p-4">1</div>
	<div class="bg-blue-200 p-4">2</div>
	<div class="bg-blue-300 p-4">3</div>
</div>
```

### ✅ Exemple 2 : Grille responsive

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
	<div class="bg-green-100 p-4">A</div>
	<div class="bg-green-200 p-4">B</div>
	<div class="bg-green-300 p-4">C</div>
</div>
```

### ✅ Exemple 3 : Un élément qui s'étale sur plusieurs colonnes

```html
<div class="grid grid-cols-3 gap-4">
	<div class="col-span-2 bg-yellow-200 p-4">Je prends 2 colonnes</div>
	<div class="bg-yellow-300 p-4">Colonne normale</div>
</div>
```

### ✅ Exemple 4 : Centre tous les éléments de la grille

```html
<div class="grid grid-cols-2 place-items-center gap-4 h-48">
	<div class="bg-pink-200 p-2">Item 1</div>
	<div class="bg-pink-300 p-2">Item 2</div>
</div>
```
