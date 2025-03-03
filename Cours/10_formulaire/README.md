# Cour : 🌟 **Cours sur les formulaires en React**

## 📌 1.**Définition et concept des éléments contrôlés**

-   Les formulaires sont essentiels pour collecter des données des utilisateurs. En React, il y a deux types principaux de gestion des entrées :

    -   **Éléments contrôlés (`Controlled Components`)**
    -   **Éléments non contrôlés (`Uncontrolled Components`)**

-   **Élément contrôlé**

    > Un **élément contrôlé** est un champ dont la valeur est gérée par l’état de React (`useState`). Chaque changement de saisie déclenche une mise à jour de l’état.

    ```jsx
    import { useState } from "react";

    function FormExample() {
    	const [inputValue, setInputValue] = useState("");

    	const handleChange = (event) => {
    		setInputValue(event.target.value);
    	};

    	return <input type="text" value={inputValue} onChange={handleChange} />;
    }
    ```

-   **Élément non contrôlé**

    > Un **élément non contrôlé** utilise directement le DOM via `useRef()`.

    ```jsx
    import { useRef } from "react";

    function UncontrolledExample() {
    	const inputRef = useRef(null);

    	const handleSubmit = () => {
    		alert(inputRef.current.value);
    	};

    	return (
    		<div>
    			<input type="text" ref={inputRef} />
    			<button onClick={handleSubmit}>Envoyer</button>
    		</div>
    	);
    }
    ```

    -   📌 **Avantages :**

        -   Parfois plus performant pour les formulaires complexes.
        -   Utile lorsqu'on doit manipuler des fichiers ou des éléments natifs.

## 📌 2.**Syntaxe générale d'un formulaire React**

> Un formulaire React est souvent basé sur **`useState`** pour gérer les entrées.

-   **Syntaxe:**

    ```jsx
    import { useState } from "react";

    function MyForm() {
    	const [name, setName] = useState("");

    	const handleSubmit = (event) => {
    		event.preventDefault();
    		alert(`Nom soumis : ${name}`);
    	};

    	return (
    		<form onSubmit={handleSubmit}>
    			<input
    				type="text"
    				value={name}
    				onChange={(e) => setName(e.target.value)}
    			/>
    			<button type="submit">Envoyer</button>
    		</form>
    	);
    }
    ```

    -   `onChange` met à jour l’état avec la nouvelle valeur.
    -   `onSubmit` empêche le rechargement de la page (`event.preventDefault()`).

## 📌 3.**Tableau des types d'inputs et gestion en React**

| Type d'input                | Exemple                     | Gestion en React                                               |
| --------------------------- | --------------------------- | -------------------------------------------------------------- |
| Texte (`text`)              | `<input type="text" />`     | `value={state} onChange={(e) => setState(e.target.value)}`     |
| Mot de passe (`password`)   | `<input type="password" />` | `value={state} onChange={(e) => setState(e.target.value)}`     |
| Email (`email`)             | `<input type="email" />`    | `value={state} onChange={(e) => setState(e.target.value)}`     |
| Nombre (`number`)           | `<input type="number" />`   | `value={state} onChange={(e) => setState(e.target.value)}`     |
| Case à cocher (`checkbox`)  | `<input type="checkbox" />` | `checked={state} onChange={(e) => setState(e.target.checked)}` |
| Bouton radio (`radio`)      | `<input type="radio" />`    | `checked={state} onChange={(e) => setState(e.target.checked)}` |
| Zone de texte (`textarea`)  | `<textarea></textarea>`     | `value={state} onChange={(e) => setState(e.target.value)}`     |
| Liste déroulante (`select`) | `<select><option>...`       | `value={state} onChange={(e) => setState(e.target.value)}`     |
| Fichier (`file`)            | `<input type="file" />`     | `useRef()` ou `onChange={(e) => setState(e.target.files)}`     |

-   Pour la majorité des inputs, l'événement `onChange` utilise `e.target.value` pour obtenir la nouvelle valeur (par exemple, pour des champs de texte, email, etc.).
-   Pour les cases à cocher et les boutons radio, on utilise `e.target.checked` pour savoir si l'élément est sélectionné ou non.
-   Pour les fichiers, on peut utiliser `useRef()` pour obtenir les fichiers ou `e.target.files` dans un gestionnaire `onChange`.

## 📌 4. **Exemple complet d'un formulaire React**

> Voici un **formulaire complet** avec plusieurs types d’inputs et validation.

```jsx
import { useState } from "react";

function CompleteForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		age: "",
		gender: "male",
		terms: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Données soumises :", formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Nom :
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
			</label>

			<label>
				Email :
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
			</label>

			<label>
				Âge :
				<input
					type="number"
					name="age"
					value={formData.age}
					onChange={handleChange}
				/>
			</label>

			<label>
				Genre :
				<select
					name="gender"
					value={formData.gender}
					onChange={handleChange}
				>
					<option value="male">Homme</option>
					<option value="female">Femme</option>
				</select>
			</label>

			<label>
				Accepter les conditions :
				<input
					type="checkbox"
					name="terms"
					checked={formData.terms}
					onChange={handleChange}
				/>
			</label>

			<button type="submit">Soumettre</button>
		</form>
	);
}

export default CompleteForm;
```

### RQ : 🚀 **Conclusion**

-   **Les éléments contrôlés** (`useState`) sont recommandés pour une gestion fine.
-   **Les éléments non contrôlés** (`useRef`) sont utiles pour les fichiers ou les formulaires lourds.
-   **Les événements `onChange` et `onSubmit`** sont essentiels.
-   **`setState` avec `name` dynamique** est une bonne pratique pour gérer plusieurs inputs.
