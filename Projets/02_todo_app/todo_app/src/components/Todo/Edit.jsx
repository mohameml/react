import TextField from "@mui/material/TextField";
import { useState, useContext } from "react";
import Button from "@mui/material/Button";

export default function Edit() {
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");

    function handelTitre(e) {
        setTitre(e.target.value);
    }

    function handelDescription(e) {
        setDescription(e.target.value);
    }

    return (
        <>
            <div className="edit">
                <div className="edit-parent">
                    <TextField
                        id="standard-basic"
                        label="titre"
                        variant="standard"
                        value={titre}
                        onChange={handelTitre}
                        className="text-title"
                    />
                    <TextField
                        id="standard-basic"
                        className="text-desc"
                        label="description"
                        variant="standard"
                        value={description}
                        onChange={handelDescription}
                    />
                    <div className="btns">
                        <Button variant="text">save</Button>
                        <Button variant="text">cancel</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
