# cour 20 : **`useEffect`**

-   **Description:**

    > `useEffect` est un hook de React qui permet d'exécuter des effets secondaires dans les composants fonctionnels. Les effets secondaires peuvent inclure des opérations comme la récupération de données, la manipulation directe du DOM, ou l'abonnement à des flux de données.

    -   `useEffect` est utilisé pour synchroniser un composant avec des sources de données externes. Il est appelé après chaque rendu du composant, par défaut.

    -   Les effets peuvent être configurés pour s'exécuter à différents moments :

        -   **Après chaque rendu** : par défaut, l'effet s'exécute après chaque rendu du composant.
        -   **Une seule fois** : en passant un tableau vide comme deuxième argument, l'effet s'exécute uniquement après le premier rendu.
        -   **Quand certaines dépendances changent** : en passant un tableau de dépendances, l'effet s'exécute après le premier rendu et chaque fois qu'une dépendance change.

-   **Syntaxe:**

    La syntaxe de `useEffect` est la suivante :

    ```javascript
    useEffect(() => {
        // Code de l'effet
        return () => {
            // Code de nettoyage (optionnel)
        };
    }, [dépendances]);
    ```

    -   **Effet** : la fonction principale contenant le code de l'effet.
    -   **Nettoyage** : la fonction de nettoyage qui est appelée avant de réexécuter l'effet ou lorsque le composant est démonté.
    -   **Dépendances** : un tableau des valeurs qui, lorsqu'elles changent, déclenchent la réexécution de l'effet.

-   **Exemple :**

    Voici un exemple concret d'utilisation de `useEffect` pour récupérer des données depuis une API et afficher ces données dans un composant :

    ```javascript
    import React, { useState, useEffect } from "react";

    function DataFetchingComponent() {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            // Fonction pour récupérer les données
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        "https://api.example.com/data"
                    );
                    const result = await response.json();
                    setData(result);
                    setLoading(false);
                } catch (error) {
                    console.error(
                        "Erreur lors de la récupération des données:",
                        error
                    );
                    setLoading(false);
                }
            };

            // Appeler la fonction pour récupérer les données
            fetchData();
        }, []); // Le tableau vide signifie que cet effet ne s'exécutera qu'une seule fois

        if (loading) {
            return <div>Chargement...</div>;
        }

        return (
            <div>
                <h1>Données récupérées :</h1>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        );
    }

    export default DataFetchingComponent;
    ```
