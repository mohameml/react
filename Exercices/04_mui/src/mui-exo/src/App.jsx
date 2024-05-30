import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, orange } from "@mui/material/colors";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import { useState } from "react";

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

    const [long, SetLong] = useState(100);

    function handelChange(e) {
        if (e.target.checked) {
            SetLong(400);
        } else {
            SetLong(100);
        }
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="card">
                    <Accordion
                        color="primary"
                        style={{
                            marginBottom: "20px",
                        }}
                    >
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
                    <Accordion
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Accordion 2
                        </AccordionSummary>
                        <AccordionDetails>
                            <Switch onChange={handelChange} />
                        </AccordionDetails>
                    </Accordion>

                    <div
                        className="switch"
                        style={{
                            height: `${long}px`,
                        }}
                    >
                        Hello:)
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
