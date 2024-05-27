# cour 10 :

## 1. **`useState` avec un Input en React:**

-   **Description:**

    > Le hook `useState` en React est couramment utilisé pour gérer l'état local des composants fonctionnels, y compris les valeurs des champs de formulaire tels que les entrées utilisateur. Lorsque l'utilisateur saisit des données dans un champ de saisie, l'état du composant est mis à jour pour refléter ces modifications.

    -   **Initialisation de l'état**: Vous définissez un état initial pour le champ de saisie.
    -   **Mise à jour de l'état**: Vous utilisez la fonction de mise à jour de l'état (retournée par `useState`) pour modifier la valeur de l'état en fonction des modifications de l'utilisateur.

-   **Syntaxe:**

    ```jsx
    import React, { useState } from "react";

    function TextInput() {
        const [value, setValue] = useState("");

        const handleChange = (event) => {
            setValue(event.target.value);
        };

        return (
            <div>
                <label htmlFor="inputField">Type something:</label>
                <input
                    type="text"
                    id="inputField"
                    value={value}
                    onChange={handleChange}
                    placeholder="Type something..."
                />
                <p>Vous avez tapé: {value}</p>
            </div>
        );
    }
    ```

-   **Exemple:**

    ```jsx
    import React, { useState } from "react";

    function MultipleInputs() {
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");

        return (
            <div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <p>
                    Full Name: {firstName} {lastName}
                </p>
            </div>
        );
    }

    export default MultipleInputs;
    ```

## 2. **`Formulaires avec React en utilisant `useState``:**

-   **Description:**

    > Créer des formulaires en React en utilisant le hook `useState` avec un objet pour gérer l'état de formulaire et l'événement `onSubmit` pour gérer la soumission du formulaire est une méthode courante et efficace. Cela permet de centraliser et de gérer efficacement l'état de plusieurs champs de formulaire.

    -   **Initialisation de l'état**: Utilisez `useState` pour initialiser un état de formulaire en tant qu'objet avec des clés correspondant aux différents champs de formulaire.
    -   **Gestion des modifications**: Utilisez un gestionnaire d'événements `onChange` pour mettre à jour l'état de formulaire en fonction des entrées de l'utilisateur.
    -   **Soumission du formulaire**: Utilisez un gestionnaire d'événements `onSubmit` pour gérer ce qui se passe lorsque le formulaire est soumis.

-   **Syntaxe:**

    Voici la syntaxe complète pour créer un composant de formulaire en React en utilisant `useState` avec un objet pour gérer l'état et l'événement `onSubmit` pour la soumission du formulaire :

    ```jsx
    import React, { useState } from "react";

    function FormComponent() {
        // Initialiser l'état du formulaire
        const [form, setForm] = useState({
            firstName: "",
            lastName: "",
            email: "",
        });

        // Gestionnaire de changement pour les champs de formulaire
        const handleChange = (event) => {
            const { name, value } = event.target;
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
        };

        // Gestionnaire de soumission du formulaire
        const handleSubmit = (event) => {
            event.preventDefault(); // Empêcher le rechargement de la page
            // Logique de soumission du formulaire, par exemple envoyer les données à un serveur
            console.log("Form submitted:", form);
        };

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }

    export default FormComponent;
    ```

-   **Exemples :**

    -   **text:**

        ```jsx
        <input
            value={form.name}
            type="text"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        ```

    -   **textarea:**

        ```jsx
        <textarea
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
        >
            {form.comment}
        </textarea>
        ```

    -   **checkbox:**

        ```jsx
        <input
            type="checkbox"
            checked={form.isStudent}
            onChange={(e) => {
                setForm({
                    ...form,
                    isStudent: e.target.checked,
                });
            }}
        />
        ```

    -   **selecet:**

        ```jsx
        <select
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
        >
            <option>MAURITANIE</option>
            <option>KSA</option>
            <option>EGYPTE</option>
            <option>FRANCE</option>
        </select>
        ```

    -   **radio**

        ```jsx
        <div>
            <input
                value={"Student"}
                type="radio"
                checked={form.status === "Student" ? true : false}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
            />
            Student
            <input
                value={"Teacher"}
                type="radio"
                checked={form.status === "Teacher" ? true : false}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
            />
            Teacher
            <input
                value={"prof"}
                type="radio"
                checked={form.status === "prof" ? true : false}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
            />
            prof
        </div>
        ```
