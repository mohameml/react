import "./App.css";
import TodoList from "./components/TodoList/TododList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Edit from "./components/Todo/Edit";

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
                {/* <Edit></Edit> */}
                <Edit />
            </ThemeProvider>
        </>
    );
}

export default App;
