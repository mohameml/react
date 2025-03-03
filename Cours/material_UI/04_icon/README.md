# cour 04 : **icon:**

-   **Description:**

    > Matruil UI est une bibliothèque de composants React qui offre des composants stylisés et faciles à utiliser pour construire des interfaces utilisateur modernes. Parmi ces composants, les icônes jouent un rôle crucial en offrant des visuels intuitifs pour les actions et les éléments de navigation.

-   **Installation de Matruil UI:**

    -   Pour commencer à utiliser Matruil UI dans votre projet React, vous devez d'abord installer la bibliothèque et ses dépendances. Nous allons également installer une bibliothèque d'icônes populaire, par exemple `@mui/icons-material`.

    ```bash
    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/icons-material
    ```

-   **Exemple d'utilisation des icônes:**

    Une fois les bibliothèques installées, vous pouvez commencer à utiliser les icônes dans vos composants React. Voici un exemple simple montrant comment utiliser une icône dans un bouton :

    ```jsx
    import React from "react";
    import { Button } from "@mui/material";
    import { Save } from "@mui/icons-material";

    function App() {
        return (
            <div style={{ padding: "20px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Save />}
                >
                    Save
                </Button>
            </div>
        );
    }

    export default App;
    ```
