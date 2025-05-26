# Cour : **FlexBox:**

## 1. Définition de **Flexbox** & à quoi ça sert

> **Flexbox** (Flexible Box Layout) est un modèle de mise en page CSS qui permet de disposer des éléments dans une boîte **flexible** et **réactive**, en **ligne** ou en **colonne**.
> Il est utilisé pour **aligner, répartir, centrer, inverser** des éléments enfants de façon efficace, même quand la taille de l’écran change.

## 2. 📑 Tableau des classes Flexbox

| **Nom**               | **Définition**                                                   | **Syntaxe**              |
| --------------------- | ---------------------------------------------------------------- | ------------------------ |
| `flex`                | Active le mode **flex** pour un conteneur                        | `flex`                   |
| `flex-row`            | Aligne les enfants **horizontalement** (par défaut)              | `flex-row`               |
| `flex-col`            | Aligne les enfants **verticalement**                             | `flex-col`               |
| `flex-wrap`           | Permet aux enfants de **retourner à la ligne**                   | `flex-wrap`              |
| `justify-start`       | Aligne les enfants **au début** (horizontalement)                | `justify-start`          |
| `justify-center`      | Centre les enfants **horizontalement**                           | `justify-center`         |
| `justify-between`     | Répartit les enfants avec **espace entre eux**                   | `justify-between`        |
| `justify-around`      | Répartit les enfants avec **espace autour**                      | `justify-around`         |
| `items-start`         | Aligne les enfants **en haut** (verticalement)                   | `items-start`            |
| `items-center`        | Aligne les enfants **au centre** (verticalement)                 | `items-center`           |
| `items-end`           | Aligne les enfants **en bas** (verticalement)                    | `items-end`              |
| `gap-{x/y}`           | Ajoute un **espace** entre les éléments (horizontal/vertical)    | `gap-4`, `gap-x-2`, etc. |
| `flex-1`, `flex-none` | Définissent comment les éléments **grandissent ou rétrécissent** | `flex-1`, `flex-none`    |

## 3. ✅ Exemples à retenir et à réutiliser

### ✅ Exemple 1 : Deux éléments côte à côte, espacés

```html
<div class="flex justify-between items-center p-4 bg-gray-100">
	<span>Logo</span>
	<nav>Menu</nav>
</div>
```

### ✅ Exemple 2 : Centrage parfait (horizontal + vertical)

```html
<div class="flex justify-center items-center h-64 bg-gray-200">
	<p class="text-center">Je suis centré !</p>
</div>
```

### ✅ Exemple 3 : Affichage en colonne avec espacement

```html
<div class="flex flex-col gap-4">
	<div class="p-2 bg-blue-100">Bloc 1</div>
	<div class="p-2 bg-blue-200">Bloc 2</div>
	<div class="p-2 bg-blue-300">Bloc 3</div>
</div>
```

### ✅ Exemple 4 : Grille responsive avec `wrap`

```html
<div class="flex flex-wrap gap-2">
	<div class="w-1/3 bg-red-100 p-4">Item 1</div>
	<div class="w-1/3 bg-red-200 p-4">Item 2</div>
	<div class="w-1/3 bg-red-300 p-4">Item 3</div>
	<div class="w-1/3 bg-red-400 p-4">Item 4</div>
</div>
```
