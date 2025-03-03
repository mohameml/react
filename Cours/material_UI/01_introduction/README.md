## cour 01 : **Introduction:**

-   **Description:**

    > `Material-UI` est une bibliothèque de composants React basée sur le framework de design Material Design de Google. Elle offre une collection de composants prêts à l'emploi qui suivent les directives de conception de Material Design, ce qui permet de créer des interfaces utilisateur modernes, attrayantes et cohérentes.

-   **Installation:**

    Pour installer Material-UI dans votre projet React, vous pouvez utiliser npm ou yarn. Voici les étapes pour installer Material-UI à l'aide de npm :

    ```bash
    npm install @mui/material @emotion/react @emotion/styled
    ```

-   **Exemple d'Utilisation:**

    Voici un exemple simple d'utilisation de quelques composants Material-UI dans une application React :

    ```jsx
    import "./App.css";
    import Stack from "@mui/material/Stack";
    import Alert from "@mui/material/Alert";
    import Button from "@mui/material/Button";
    import { useState } from "react";

    function App() {
        const [count, setCount] = useState(0);
        let show = false;

        function handelClick() {
            show = !show;
            console.log(show);
            setCount(count + 1);
        }

        return (
            <>
                <div className="flex">
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={handelClick}>
                            <p>count : {count}</p>
                        </Button>
                    </Stack>
                    <Alert
                        severity="success"
                        style={{
                            marginTop: "10px",
                            width: "200px",
                        }}
                    >
                        Done.
                    </Alert>
                </div>
            </>
        );
    }

    export default App;
    ```

    ![alt text](image.png)

### RQ : [docs](https://mui.com/material-ui/)
