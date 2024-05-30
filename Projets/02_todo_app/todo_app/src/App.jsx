import "./App.css";
import TodoList from "./components/TodoList/TododList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: ["pop"],
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <TodoList />
            </ThemeProvider>
        </>
    );
}

export default App;
