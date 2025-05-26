# Cour 3 : **Typographie**

## 1. **Définition de la typographie:**

> **La typographie** en Tailwind CSS regroupe l’ensemble des **classes utilitaires** permettant de **contrôler l'apparence du texte** :

-   taille des caractères,
-   style et graisse de police,
-   couleur,
-   alignement,
-   espacement entre lettres et lignes,
-   casse du texte, etc.

Cela permet de créer une interface **lisible, cohérente et esthétique** sans écrire de CSS personnalisé.

## 2. **Tableaux des classes typographiques essentielles:**

| **Nom de la classe**      | **Définition**                                                                   | **Syntaxe**                            |
| ------------------------- | -------------------------------------------------------------------------------- | -------------------------------------- |
| `text-{size}`             | Définit la **taille du texte**                                                   | `text-sm`, `text-lg`, `text-2xl`       |
| `font-{weight}`           | Définit la **graisse de la police** (épaisseur du texte)                         | `font-light`, `font-bold`              |
| `text-{color}`            | Définit la **couleur du texte**                                                  | `text-gray-700`, `text-blue-600`       |
| `text-{alignment}`        | Définit l’**alignement du texte**                                                | `text-left`, `text-center`             |
| `leading-{size}`          | Définit l’**espacement vertical** entre les lignes                               | `leading-tight`, `leading-loose`       |
| `tracking-{size}`         | Définit l’**espacement horizontal** entre les lettres                            | `tracking-tight`, `tracking-wider`     |
| `font-{family}`           | Définit la **famille de police**                                                 | `font-sans`, `font-serif`              |
| `uppercase/lowercase/...` | Définit la **transformation de texte** (majuscule, minuscule, capitalisation)    | `uppercase`, `lowercase`, `capitalize` |
| `prose`                   | Applique des **styles typographiques riches** (nécessite le plugin `typography`) | `prose`, `prose-lg`, `prose-invert`    |

## 3. **Exemples à retenir et à réutiliser:**

Voici quelques exemples pratiques **à mémoriser** pour tes projets :

### ✅ Titre principal lisible

```html
<h1 class="text-3xl font-bold text-gray-800">Bienvenue sur mon site</h1>
```

### ✅ Paragraphe classique

```html
<p class="text-base leading-relaxed text-gray-700">
	Ceci est un paragraphe standard avec une bonne lisibilité.
</p>
```

### ✅ Bouton avec texte majuscule

```html
<button class="uppercase text-sm font-semibold tracking-wider">
	S'inscrire
</button>
```

### ✅ Bloc de texte typographié (plugin `@tailwindcss/typography`)

```html
<article class="prose">
	<h2>À propos</h2>
	<p>
		Ce texte est automatiquement stylisé avec une belle mise en forme
		typographique.
	</p>
</article>
```

> 📦 Pour utiliser `prose`, installe le plugin :

```bash
npm install @tailwindcss/typography
```

Et ajoute-le dans `tailwind.config.js` :

```js
plugins: [require("@tailwindcss/typography")];
```
