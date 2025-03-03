# Cour :

Oui, il y a une autre solution sans `useEffect`, en utilisant directement la `key` du composant `Bill` dans `App.js`.

---

### 🎯 **Pourquoi ça marche ?**

-   En React, lorsqu'un composant a une **nouvelle `key`**, React le démonte et le remonte complètement.
-   Cela **force la réinitialisation du state** (`useState` est réévalué depuis le début).

---

### ✅ **Solution : Ajouter une `key` dynamique dans `App.js`**

Dans `App.js`, change ceci :

```jsx
<Bill key={selectedId} friend={friendBill} onEditBlance={handleEditBill} />
```

---

### 🔍 **Pourquoi ça fonctionne ?**

1. À chaque changement de `selectedId`, la `key` de `Bill` change.
2. React considère alors `Bill` comme **un nouveau composant** et le démonte/remonte.
3. **Résultat :** `useState` est réinitialisé et le `form` reprend bien ses valeurs par défaut.

---

### 🛠 **Avantages et inconvénients de cette méthode**

✅ **Avantages :**  
✔️ Solution simple et élégante.  
✔️ Pas besoin de `useEffect`.  
✔️ Assure une réinitialisation complète du composant.

⚠️ **Inconvénients :**  
❌ Peut être un peu plus coûteux en performances si `Bill` est un composant lourd.

---

### 🏆 **Quelle solution choisir ?**

-   **Si `Bill` est un petit composant**, alors **utiliser `key`** est une solution propre et efficace.
-   **Si `Bill` est un composant complexe avec beaucoup d'état interne**, alors il vaut mieux **gérer le reset avec `useEffect`** pour éviter de tout recréer à chaque fois.

---

Essaie avec `key` et dis-moi si ça marche bien ! 🚀

Ah, je vois mieux le problème ! Ton composant `Bill` est bien re-rendu lorsque `selectedId` change, mais son `state` (`form`) **ne se réinitialise pas** lorsque `friend` change.

---

## 🎯 **Pourquoi `form` ne se réinitialise pas ?**

En React, **`useState` ne réexécute pas son initialisation lorsqu'une prop change**.

### 🔴 **Ce qui se passe actuellement** :

1. Tu changes `selectedId`, ce qui met à jour `friendBill` dans `App.js`.
2. `Bill` reçoit un **nouvel objet `friend`**, donc le composant se re-render.
3. MAIS `useState` **ne remet pas `form` à zéro** parce qu'il ne "réexécute" pas `useState` à chaque render.

---

## ✅ **Solution : Utiliser `useEffect` pour écouter `friend` et réinitialiser `form`**

Ajoute ce `useEffect` dans `Bill` :

```jsx
import { useState, useEffect } from "react";

export default function Bill({ friend, onEditBlance }) {
	const [form, setForm] = useState({
		totale: "",
		expense: "",
		isHePaying: false,
	});

	// Réinitialiser le state quand `friend` change
	useEffect(() => {
		if (friend) {
			setForm({
				totale: "",
				expense: "",
				isHePaying: false,
			});
		}
	}, [friend]); // Déclenché à chaque changement de `friend`

	if (!friend) return null;

	return (
		<div>
			<h2>Facture pour {friend.name}</h2>
			<form>
				<input
					type="text"
					placeholder="Total"
					value={form.totale}
					onChange={(e) =>
						setForm({ ...form, totale: e.target.value })
					}
				/>
				<input
					type="text"
					placeholder="Dépense"
					value={form.expense}
					onChange={(e) =>
						setForm({ ...form, expense: e.target.value })
					}
				/>
				<label>
					Paie-t-il ?
					<input
						type="checkbox"
						checked={form.isHePaying}
						onChange={(e) =>
							setForm({ ...form, isHePaying: e.target.checked })
						}
					/>
				</label>
			</form>
		</div>
	);
}
```

---

## 🔍 **Pourquoi ça fonctionne maintenant ?**

1. `useEffect` **écoute `friend`** et remet `form` à zéro chaque fois que `friend` change.
2. **Avant**, `useState` ne se réinitialisait pas tout seul.
3. Maintenant, à chaque changement d'ID (`selectedId` dans `App.js`), `friendBill` change → `useEffect` remet `form` à sa valeur initiale.

---

💡 **Avec cette correction, ton formulaire se réinitialise bien quand tu changes de `friend`.** 🚀  
Teste ça et dis-moi si ça marche comme prévu ! 😊

---

En React, l’utilisation de la prop `key` est principalement associée aux listes d'éléments pour optimiser les rendus et permettre à React de suivre les éléments de manière efficace. Cependant, tu peux aussi utiliser `key` dans des **composants classiques** (pas dans une liste) pour forcer un remontage et réinitialiser l'état d’un composant. Ce n'est pas son usage habituel, mais cela peut être très utile dans certains cas.

### 1️⃣ **But de `key` dans les composants classiques**

La principale fonction de `key` dans des composants **non-listés** est de forcer React à **recréer** le composant lorsqu'une `key` change. Cela peut être utile dans les cas où tu veux réinitialiser un composant (par exemple, pour forcer une réinitialisation du `state` ou effectuer une réinitialisation de certains effets secondaires).

### 2️⃣ **Forcer un remontage d’un composant classique avec `key`**

React utilise la prop `key` pour identifier de manière unique chaque composant. Si tu changes la `key` d'un composant, React le considère comme **un nouveau composant** et le démonte/remonte, réinitialisant son état.

Voici un exemple de cette approche dans un composant classique :

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

### 3️⃣ **Explication du code**

1. **Changement de `selectedFriend`** : Quand tu appuies sur le bouton pour changer le `selectedFriend`, tu modifies l'objet `selectedFriend` (en changeant l'`id` et le `name`).
2. **La `key` change** : Lorsqu'`id` de `selectedFriend` change, la `key` du composant `Form` change aussi.
3. **Réinitialisation du `state`** : Comme la `key` change, React considère que le composant `Form` est un nouveau composant, et le réinitialise (en réinitialisant aussi son `state`).

### 4️⃣ **Pourquoi cela fonctionne-t-il ?**

-   Lorsqu'une `key` change, React démonte le composant existant et en crée un nouveau à sa place. Cela permet de **réinitialiser** tous les états internes du composant.
-   **Réinitialisation du `state`** : Le `state` dans `useState` est initialisé à chaque remontée du composant. Par conséquent, lorsque le composant est monté à nouveau avec une nouvelle `key`, son `state` est réinitialisé.

### 5️⃣ **Bonnes pratiques pour l'utilisation de `key` dans des composants non-listés**

-   **Utiliser `key` pour des scénarios où tu veux réinitialiser un composant** : C'est un excellent moyen de réinitialiser un composant sans avoir à gérer des `useEffect` complexes.
-   **Ne pas utiliser `key` de manière excessive** : Dans des scénarios classiques, l'usage de `key` dans des composants non-listés ne doit pas être une habitude. Il faut l'utiliser uniquement lorsque tu souhaites vraiment forcer un remontage du composant (comme un reset).

### 6️⃣ **Les cas typiques d’utilisation de `key` dans des composants non-listés**

-   **Réinitialisation d’un formulaire** : Comme dans l'exemple précédent, où tu veux réinitialiser un formulaire chaque fois qu’un utilisateur choisit une option différente.
-   **Navigation entre des vues distinctes** : Si tu utilises un composant pour afficher différentes vues (par exemple, un formulaire de connexion et un formulaire d'inscription) et tu veux forcer la réinitialisation des états internes lors de chaque changement de vue.

---

### 7️⃣ **Avantages et inconvénients**

#### ✅ **Avantages :**

-   **Simple et direct** : Utiliser `key` dans des composants non-listés est une manière simple de forcer un remontage et réinitialiser un composant.
-   **Pas besoin de `useEffect`** : Pas besoin d'écouter des changements avec `useEffect` pour réinitialiser l'état.

#### ⚠️ **Inconvénients :**

-   **Performance** : Chaque changement de `key` force un **démontage et un remontage** du composant, ce qui peut entraîner une légère perte de performance si le composant est complexe.
-   **Pas toujours intuitif** : Utiliser `key` dans ce contexte n'est pas la manière la plus courante de gérer les mises à jour de composants, ce qui peut rendre le code moins lisible pour d'autres développeurs.

---

### Conclusion

L'utilisation de la `key` pour **forcer le remontage** d'un composant classique est une méthode puissante et simple pour réinitialiser un composant, surtout dans des situations où tu veux réinitialiser l'état ou des effets secondaires. Cependant, elle doit être utilisée avec discernement, surtout si le composant devient plus complexe.

N’hésite pas à poser d'autres questions si tu veux plus d'exemples ou des clarifications supplémentaires ! 😊
