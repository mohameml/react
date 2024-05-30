import Alert from "@mui/material/Alert";
import "./Done.css";
export default function Done({ text }) {
    return (
        <div className="done">
            <Alert severity="success">{text}</Alert>
        </div>
    );
}
