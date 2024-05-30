import Grid from "@mui/material/Grid";
import "./style.css";
export default function GridTest() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="card">Item 1</div>
                </Grid>
                <Grid item xs={8}>
                    <div className="card">Item 2</div>
                </Grid>
                <Grid item xs={4}>
                    <div className="card">Item 3</div>
                </Grid>
                <Grid item xs={10}>
                    <div className="card">Item 4</div>
                </Grid>
            </Grid>
        </>
    );
}
