# cour 07 : **Rendu de Liste**

## 1. **Description:**

> Le rendu de liste en React permet d'afficher dynamiquement un ensemble d'éléments basé sur des données sous forme de tableau. Cela est utile pour afficher des listes d'éléments, des collections de données, etc.

- **Rendu de Liste**: Affichage d'éléments en boucle en utilisant des tableaux de données.
- **Clés Uniques**: Chaque élément rendu dans une liste doit avoir une clé unique (`key`) pour aider React à identifier quels éléments ont changé, été ajoutés ou supprimés. Cela améliore les performances lors du rendu de listes.

## 2. **Syntaxe:**

Le rendu de liste en React se fait généralement à l'aide de la méthode `map()` sur un tableau pour créer un tableau de composants JSX.

- **Syntaxe de base:**

  ```jsx
  {
    array.map((item) => return <Component key={uniqueKey} prop1={item.prop1} />);
  }
  ```

## 2. **Exemples :**

- **Exemple avec une liste simple:**

  ```jsx
  import React from "react";

  function NameList() {
    const names = ["Alice", "Bob", "Charlie", "David"];

    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }

  export default NameList;
  ```

- **Exemple avec une liste d'objets:**

  ```jsx
  import React from "react";

  function UserList() {
    const users = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 },
    ];

    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    );
  }

  export default UserList;
  ```

- **Exemple avec un composant enfant:**

  ```jsx
  import React from "react";

  function User({ user }) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
      </div>
    );
  }

  function UserList() {
    const users = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 },
    ];

    return (
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }

  export default UserList;
  ```

- **Explications:**

  1. **Utilisation de `map()`**: La méthode `map()` itère sur chaque élément du tableau et retourne un nouvel élément JSX pour chaque élément de la liste.

  2. **Clés Uniques**: Les clés (`key`) sont nécessaires pour aider React à identifier chaque élément de la liste. Les clés doivent être uniques parmi les éléments frères. Elles ne sont pas accessibles dans les composants enfants.

  3. **Composant Enfant**: La liste peut être rendue par un composant enfant pour améliorer la lisibilité et la modularité.

### RQ : **Pratiques Recommandées**

- **Clés Uniques**: Utilisez des identifiants uniques des données (comme `id`) pour les clés, plutôt que l'index de l'élément dans le tableau. Utiliser l'index peut poser des problèmes si l'ordre des éléments change.
- **Encapsulation**: Encastrer des éléments de liste dans des composants enfants peut rendre le code plus propre et plus maintenable.
