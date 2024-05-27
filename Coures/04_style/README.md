# cour 04 : **Style:**

## 1. **la propriété `style` :`inline-style`**

- **Description:**

  > En React, la propriété `style` est utilisée pour appliquer des styles en ligne à un élément JSX. Cela permet de définir des styles directement dans le code JavaScript, ce qui peut être utile pour personnaliser l'apparence des composants de manière dynamique.

- **Syntaxe:**

  La syntaxe pour utiliser la propriété `style` est la suivante :

  ```jsx
  <div
    style={
      {
        /* styles CSS en camelCase */
      }
    }
  >
    Contenu
  </div>
  ```

  - La propriété `style` est un objet JavaScript défini à l'intérieur d'accolades `{}`.
  - Les clés de l'objet sont les noms des propriétés CSS en camelCase.
  - Les valeurs sont les valeurs des propriétés CSS, généralement des chaînes de caractères.

- **Exemple:**

  ```jsx
  import React from "react";

  function MyComponent() {
    const myStyle = {
      backgroundColor: "lightblue",
      color: "darkblue",
      padding: "10px",
      borderRadius: "5px",
      textAlign: "center",
    };

    return (
      <div style={myStyle}>
        <h1>Welcome</h1>
        <p>This is a styled div.</p>
      </div>
    );
  }

  export default MyComponent;
  ```

## 2. **la propriété `className`:`extern-Style`**

- **Description:**

  > La propriété `className` en JSX est utilisée pour attribuer une classe CSS à un élément JSX. Cette classe peut ensuite être stylée dans un fichier CSS externe à l'aide de l'instruction `import` de JavaScript. Cela permet de séparer les préoccupations, en gardant le code JavaScript (React) distinct du code CSS.

- **Syntaxe:**

  La syntaxe pour utiliser la propriété `className` est la suivante :

  ```jsx
  <div className="nom-de-classe-1 nom-de-classe-2">Contenu</div>
  ```

- **Example 1:**

  - **fichier CSS `styles.css` :**

    ```css
    /* styles.css */
    .myClass {
      color: blue;
      font-size: 18px;
    }
    ```

  - Nous pouvons alors importer ce fichier CSS dans notre composant React et utiliser la classe `myClass` sur un élément JSX de la manière suivante :

    ```jsx
    import React from "react";
    import "./styles.css"; // Importation du fichier CSS

    function MyComponent() {
      return <div className="myClass">Contenu du composant</div>;
    }

    export default MyComponent;
    ```

- **Example 2:**

  ```jsx
  export default function MyFirstComponent() {
    return (
      <div>
        <h1 className={person.name === "sidi" ? "redBg" : "yellowBg"}>
          Name : {person.name}
        </h1>
      </div>
    );
  }
  ```
