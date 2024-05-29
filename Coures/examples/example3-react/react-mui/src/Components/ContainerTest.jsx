import Container from "@mui/material/Container";

import "./style.css";
export default function ContainerTest() {
    return (
        <>
            <Container
                maxWidth="sm"
                style={{
                    background: "green",
                }}
            >
                <div className="card">Item 1</div>
                <div className="card">Item 2</div>
                <div className="card">Item 3</div>
                <div className="card">Item 4</div>
                <div className="card">Item 5</div>
            </Container>
        </>
    );
}
