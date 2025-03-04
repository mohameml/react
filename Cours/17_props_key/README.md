# Cour : **Props Key:**

## 1. **Définition:**

> En React, l’utilisation de la prop `key` est principalement associée aux listes d'éléments pour optimiser les rendus et permettre à React de suivre les éléments de manière efficace. Cependant, tu peux aussi utiliser `key` dans des **composants classiques** (pas dans une liste) pour forcer un remontage et réinitialiser l'état d’un composant. Ce n'est pas son usage habituel, mais cela peut être très utile dans certains cas.

-   **But de `key` dans les composants classiques**

    > La principale fonction de `key` dans des composants **non-listés** est de forcer React à **recréer** le composant lorsqu'une `key` change. Cela peut être utile dans les cas où tu veux réinitialiser un composant (par exemple, pour forcer une réinitialisation du `state` ou effectuer une réinitialisation de certains effets secondaires).

## 2. **Forcer un remontage d’un composant classique avec `key`**

> React utilise la prop `key` pour identifier de manière unique chaque composant. Si tu changes la `key` d'un composant, React le considère comme **un nouveau composant** et le démonte/remonte, réinitialisant son état.

-   **Exemple:**

    ```jsx
    import React, { useState } from "react";

    const Form = ({ friend }) => {
    	const [formState, setFormState] = useState({
    		name: friend ? friend.name : "",
    		amount: "",
    	});

    	const handleSubmit = () => {
    		console.log("Form submitted with data:", formState);
    	};

    	return (
    		<div>
    			<h2>Form for {friend ? friend.name : "No Friend"}</h2>
    			<input
    				type="text"
    				value={formState.name}
    				onChange={(e) =>
    					setFormState({ ...formState, name: e.target.value })
    				}
    			/>
    			<input
    				type="number"
    				value={formState.amount}
    				onChange={(e) =>
    					setFormState({ ...formState, amount: e.target.value })
    				}
    			/>
    			<button onClick={handleSubmit}>Submit</button>
    		</div>
    	);
    };

    const App = () => {
    	const [selectedFriend, setSelectedFriend] = useState({
    		id: 1,
    		name: "John",
    	});

    	return (
    		<div>
    			<button
    				onClick={() =>
    					setSelectedFriend({
    						id: selectedFriend.id === 1 ? 2 : 1,
    						name: selectedFriend.id === 1 ? "Jane" : "John",
    					})
    				}
    			>
    				Switch Friend
    			</button>

    			{/* Chaque changement de selectedFriend force le remontage du composant Form */}
    			<Form key={selectedFriend.id} friend={selectedFriend} />
    		</div>
    	);
    };

    export default App;
    ```

-   **Explication du code**

    1.  **Changement de `selectedFriend`** : Quand tu appuies sur le bouton pour changer le `selectedFriend`, tu modifies l'objet `selectedFriend` (en changeant l'`id` et le `name`).
    2.  **La `key` change** : Lorsqu'`id` de `selectedFriend` change, la `key` du composant `Form` change aussi.
    3.  **Réinitialisation du `state`** : Comme la `key` change, React considère que le composant `Form` est un nouveau composant, et le réinitialise (en réinitialisant aussi son `state`).

## 3.**Avantages et inconvénients**

-   ✅ **Avantages :**

    -   **Simple et direct** : Utiliser `key` dans des composants non-listés est une manière simple de forcer un remontage et réinitialiser un composant.

    -   **Pas besoin de `useEffect`** : Pas besoin d'écouter des changements avec `useEffect` pour réinitialiser l'état.

-   ⚠️ **Inconvénients :**

    -   **Performance** : Chaque changement de `key` force un **démontage et un remontage** du composant, ce qui peut entraîner une légère perte de performance si le composant est complexe.

    -   **Pas toujours intuitif** : Utiliser `key` dans ce contexte n'est pas la manière la plus courante de gérer les mises à jour de composants, ce qui peut rendre le code moins lisible pour d'autres développeurs.

### RQ :

-   En React, **`useState` ne réexécute pas son initialisation lorsqu'une prop change**.
-   En React, lorsqu'un composant a une **nouvelle `key`**, React le démonte et le remonte complètement.
-   Cela **force la réinitialisation du state** (`useState` est réévalué depuis le début).

-   **Exemple:**

    ```jsx
    <Bill key={selectedId} friend={friendBill} onEditBlance={handleEditBill} />
    ```

    1.  À chaque changement de `selectedId`, la `key` de `Bill` change.
    2.  React considère alors `Bill` comme **un nouveau composant** et le démonte/remonte.
    3.  **Résultat :** `useState` est réinitialisé et le `form` reprend bien ses valeurs par défaut.
