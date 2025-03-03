# Cour :

## 1. **Définition:**

> La **child-to-parent communication** en React désigne le mécanisme permettant à un **composant enfant** d'envoyer des données ou des événements à son **composant parent**.

-   **Pourquoi en a-t-on besoin ?**

    > En React, les **données circulent principalement du parent vers l’enfant** via les **props**. Cependant, il arrive qu’un enfant doive informer son parent d’un événement (ex. un bouton cliqué, un formulaire soumis).

## 2. **implémentation :**

-   **Passer une fonction du parent comme prop à l’enfant (Méthode classique)**

    👉 Le parent passe une fonction à l’enfant, et l’enfant l’appelle avec les données à envoyer.

-   **Syntaxe:**

    ```jsx
    // 📌 Parent.jsx
    const Parent = () => {
    	const [message, setMessage] = useState("");

    	const handleReceiveMessage = (msg) => {
    		setMessage(msg); // Met à jour l'état du parent
    	};

    	return (
    		<div>
    			<Child sendMessage={handleReceiveMessage} />
    			<p>Message reçu : {message}</p>
    		</div>
    	);
    };

    // 📌 Child.jsx
    const Child = ({ sendMessage }) => {
    	return (
    		<button onClick={() => sendMessage("Hello Parent!")}>
    			Envoyer un message au parent
    		</button>
    	);
    };

    export default Parent;
    ```
