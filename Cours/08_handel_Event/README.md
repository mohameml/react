# Cour : **`Event`**

> En React, la gestion des événements est similaire à celle en JavaScript standard, mais avec quelques différences notables.

## 1. **Définition et syntaxe générale:**

> En React, les événements sont gérés via des attributs camelCase au lieu de lowercase (comme en HTML). De plus, on utilise généralement des fonctions pour gérer ces événements.

-   **Exemple de syntaxe :**

    ```jsx
    import React from "react";

    function ButtonComponent() {
    	const handleClick = () => {
    		alert("Bouton cliqué !");
    	};

    	return <button onClick={handleClick}>Cliquez-moi</button>;
    }

    export default ButtonComponent;
    ```

-   **Différences avec le JavaScript natif :**

    -   **CamelCase** : `onClick` au lieu de `onclick`
    -   **Passage de fonction** : En React, on passe une **référence** de fonction (`onClick={handleClick}`) au lieu d’appeler la fonction immédiatement (`onClick={handleClick()}`).
    -   **`event` natif est encapsulé** : React utilise un système de `SyntheticEvent`, une version optimisée et normalisée de l'événement natif.

## 2. **Tableau des événements classiques en React:**

| Événement      | Description                                        | Exemple                                |
| -------------- | -------------------------------------------------- | -------------------------------------- |
| `onClick`      | Se déclenche lors d’un clic                        | `<button onClick={handleClick}>`       |
| `onChange`     | Se déclenche quand un champ change                 | `<input onChange={handleChange} />`    |
| `onSubmit`     | Se déclenche lors de la soumission d’un formulaire | `<form onSubmit={handleSubmit}>`       |
| `onMouseEnter` | Se déclenche quand la souris entre dans un élément | `<div onMouseEnter={handleHover}>`     |
| `onMouseLeave` | Se déclenche quand la souris quitte un élément     | `<div onMouseLeave={handleHover}>`     |
| `onKeyDown`    | Se déclenche quand une touche est pressée          | `<input onKeyDown={handleKeyPress} />` |
| `onKeyUp`      | Se déclenche quand une touche est relâchée         | `<input onKeyUp={handleKeyRelease} />` |
| `onFocus`      | Se déclenche quand un élément reçoit le focus      | `<input onFocus={handleFocus} />`      |
| `onBlur`       | Se déclenche quand un élément perd le focus        | `<input onBlur={handleBlur} />`        |
| `onScroll`     | Se déclenche lors du défilement                    | `<div onScroll={handleScroll}>`        |
