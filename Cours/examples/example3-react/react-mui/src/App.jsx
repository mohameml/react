import "./App.css";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { orange, purple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import StackTest from "./Components/StackTest";
import ContainerTest from "./Components/ContainerTest";
import GridTest from "./Components/GridTest";
import ExampleUseEffect from "./Components/ExampleUseEffect/ExampleUseEffect";

function App() {
    // creation d'une theme de notre App :
    const theme = createTheme({
        palette: {
            primary: {
                main: orange[500],
            },
            secondary: {
                main: purple[200],
            },
        },
    });

    const [count, setCount] = useState(0);
    let show = false;

    function handelClick() {
        show = !show;
        console.log(show);
        setCount(count + 1);
    }
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="flex">
                    <Stack spacing={2} direction="row">
                        <Button
                            variant="contained"
                            onClick={handelClick}
                            style={{
                                borderRadius: "10px",
                            }}
                            color="primary"
                        >
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
                    <Checkbox {...label} defaultChecked />
                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        style={{
                            width: "200px",
                        }}
                    />
                </div>

                <hr />
                <StackTest />
                <hr />
                <ContainerTest />
                <hr />
                <div
                    style={{
                        width: "500px",
                        margin: "20px auto",
                        backgroundColor: "orange",
                        padding: "5px",
                        opacity: ".7",
                    }}
                >
                    <GridTest color="primary"></GridTest>
                </div>
                <hr />

                <hr />
                <ExampleUseEffect />
            </ThemeProvider>
        </>
    );
}

export default App;
