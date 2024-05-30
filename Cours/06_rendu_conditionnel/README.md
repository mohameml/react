# cour 06 : **Le Rendu Conditionnel en React**

## 1. Description

> Le rendu conditionnel en React permet d'afficher des composants ou des éléments en fonction de certaines conditions. Cela rend les interfaces utilisateur plus dynamiques et interactives.

- Le rendu conditionnel peut être implémenté de plusieurs manières en React :

  - **Opérateur ternaire (`?:`)** : Pour les conditions simples.
  - **Opérateur `&&` (ET logique)** : Pour les conditions où un seul élément doit être rendu.
  - **Instructions `if`** : Pour des conditions plus complexes.

## 2. **Syntaxe:**

- **Opérateur ternaire:**

  L'opérateur ternaire est souvent utilisé pour des conditions simples où vous avez une alternative "si vrai" et "si faux".

  ```jsx
  {
    condition ? <ComposantSiVrai /> : <ComposantSiFaux />;
  }
  ```

- **Opérateur `&&`:**

  L'opérateur `&&` est utilisé lorsque vous voulez rendre un élément seulement si la condition est vraie.

  ```jsx
  {
    condition && <Composant />;
  }
  ```

- **Instructions `if`:**

  Pour des conditions plus complexes, vous pouvez utiliser des instructions `if` à l'intérieur du rendu du composant.

  ```jsx
  function MonComposant() {
    if (condition) {
      return <ComposantSiVrai />;
    } else {
      return <ComposantSiFaux />;
    }
  }
  ```

## 3. **Exemples :**

- **Exemple avec l'opérateur ternaire:**

  ```jsx
  import React from "react";

  function Greeting({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
      </div>
    );
  }

  export default Greeting;
  ```

- **Exemple avec l'opérateur `&&`:**

  ```jsx
  import React from "react";

  function Notification({ hasNotification }) {
    return <div>{hasNotification && <p>You have new notifications!</p>}</div>;
  }

  export default Notification;
  ```

- **Exemple avec une instruction `if`:**

  ```jsx
  import React from "react";

  function UserStatus({ isLoggedIn }) {
    if (isLoggedIn) {
      return <h1>Welcome back, user!</h1>;
    } else {
      return <h1>Please log in.</h1>;
    }
  }

  export default UserStatus;
  ```

- **Exemple plus complexe avec une fonction**

  ```jsx
  import React from "react";

  function RenderBasedOnStatus({ status }) {
    function renderContent() {
      if (status === "loading") {
        return <p>Loading...</p>;
      } else if (status === "success") {
        return <p>Data loaded successfully!</p>;
      } else if (status === "error") {
        return <p>Error loading data.</p>;
      } else {
        return <p>Unknown status.</p>;
      }
    }

    return <div>{renderContent()}</div>;
  }

  export default RenderBasedOnStatus;
  ```
