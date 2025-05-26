# Cour 05 : **Responsive Design**

## 1. 📱 Définition du **Responsive Design** & à quoi il sert

> Le **Responsive Design** est une technique de conception qui permet à une interface web de **s’adapter automatiquement à toutes les tailles d’écran** (mobile, tablette, ordinateur).

-   En Tailwind CSS, cela se fait **facilement avec des préfixes** qui appliquent des classes CSS **à partir de certaines largeurs d’écran**.

-   Cela permet de créer des interfaces **fluides et adaptatives** sans média queries personnalisées.

## 2. 📑 Tableau des classes Responsive

| **Nom (préfixe)** | **Définition**                                                       | **Syntaxe**                     |
| ----------------- | -------------------------------------------------------------------- | ------------------------------- |
| `sm:`             | Applique les styles à **partir de ≥ 640px** (petites tablettes)      | `sm:text-lg`, `sm:p-4`          |
| `md:`             | Applique les styles à **partir de ≥ 768px** (tablettes)              | `md:flex`, `md:text-xl`         |
| `lg:`             | Applique les styles à **partir de ≥ 1024px** (ordinateurs portables) | `lg:grid`, `lg:w-1/2`           |
| `xl:`             | Applique les styles à **partir de ≥ 1280px** (grands écrans)         | `xl:text-2xl`, `xl:px-8`        |
| `2xl:`            | Applique les styles à **partir de ≥ 1536px** (écrans très larges)    | `2xl:container`, `2xl:text-3xl` |

> 🧠 _Astuce :_ Le style **par défaut** s’applique à **tous les écrans**, puis on ajoute des ajustements avec les préfixes (mobile-first).

## 3. ✅ Exemples à retenir et à réutiliser

### ✅ Exemple 1 : Texte qui change de taille selon l’écran

```html
<h1 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
	Titre responsive
</h1>
```

### ✅ Exemple 2 : Affichage en colonne sur mobile, en ligne sur ordinateur

```html
<div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
	<div class="p-4 bg-gray-200">Bloc 1</div>
	<div class="p-4 bg-gray-300">Bloc 2</div>
</div>
```

### ✅ Exemple 3 : Conteneur centré qui change de largeur

```html
<div class="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto bg-white p-6">
	Carte responsive
</div>
```

### ✅ Exemple 4 : Masquer un élément selon la taille

```html
<p class="block md:hidden text-red-600">
	Ce texte s’affiche uniquement sur mobile
</p>
<p class="hidden md:block text-green-600">
	Ce texte s’affiche uniquement sur écran ≥ 768px
</p>
```
