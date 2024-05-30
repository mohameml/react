import IconButton from "@mui/material/IconButton";
import "./CercleIcon.css";

export default function CercleeIcon({ color, children }) {
    return (
        <>
            <div
                className="cercle-icon"
                style={{
                    borderColor: color,
                }}
            >
                <IconButton>{children}</IconButton>
            </div>
        </>
    );
}
