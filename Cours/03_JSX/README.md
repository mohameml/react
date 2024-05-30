# cour 03 **`JSX`:**

## 1. **Definition:**

> JSX, ou JavaScript XML, est une extension de syntaxe pour JavaScript utilisée avec React. Il permet d'écrire du HTML directement dans le code JavaScript, rendant la création d'interfaces utilisateur plus intuitive et proche de la structure HTML traditionnelle.

## 2. **Syntaxe du JSX:**

1. **Éléments HTML dans JavaScript** : Vous pouvez écrire des éléments HTML directement dans votre code JavaScript.

   ```jsx
   const element = <h1>Hello, World!</h1>;
   ```

2. **Expressions JavaScript** : Les expressions JavaScript peuvent être incluses dans le JSX en les entourant d'accolades `{}`.

   ```jsx
   const name = "Alice";
   const element = <h1>Hello, {name}!</h1>;
   ```

3. **Attributs et Classes** :Les attributs sont définis de manière similaire à HTML, mais avec quelques différences notables, comme `className` au lieu de `class`.

   ```jsx
   const element = (
     <div className="container nomclass2" nomAttr={value}>
       Content
     </div>
   );
   ```

4. **Fragments** : Pour retourner plusieurs éléments sans un conteneur HTML additionnel, vous pouvez utiliser `React.Fragment` ou la syntaxe courte `<> </>`.

   ```jsx
   import React from "react";

   function MyComponent() {
     return (
       <>
         <h1>Hello, World!</h1>
         <p>This is a React component.</p>
       </>
     );
   }
   ```

## 3. **Régles:**

- En React, lors de l'utilisation de l'interpolation des expressions JavaScript dans JSX avec des accolades `{}`, vous pouvez utiliser des expressions simples mais pas des objets JavaScript directement.

- en JSX, chaque balise doit être fermée correctement : `<input type="text" />`

- en JSX , chaque composant doit retourner **un seul élément HTML parent**

- en JSX et React, les noms d'attributs CSS sont écrits en `camelCase`, pas en kebab-case comme on pourrait le voir dans un fichier CSS régulier comme `backgroundColor`.
