import Stack from "@mui/material/Stack";
import "./style.css";
export default function StackTest() {
    return (
        <>
            <Stack spacing={2} direction={"row"}>
                <div className="card">Item 1</div>
                <div className="card">Item 2</div>
                <div className="card">Item 3</div>
                <div className="card">Item 4</div>
                <div className="card">Item 5</div>
            </Stack>
        </>
    );
}
