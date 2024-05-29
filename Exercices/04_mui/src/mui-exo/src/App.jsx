import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, orange } from "@mui/material/colors";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function App() {
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

    return (
        <>
            <ThemeProvider theme={theme}>
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Accordion 1
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
