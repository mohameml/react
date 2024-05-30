import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Todo.css";

import Done from "../Alert/Done";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function Todo({ title, body, id }) {
    const [showDone, setShowDone] = useState(false);
    let todos = useContext(DataContext);

    function handelClickDone() {
        // on ajoute cette tache comme une tache terminee :

        let todo = todos.find((ele) => {
            if (ele.id === id) {
                return true;
            }
        });
        // todo.status.push("terminee");
        todo.status.splice(todo.status.indexOf("encoures"), 1, "terminee");

        setShowDone(true);
        setTimeout(() => {
            setShowDone(false);
        }, 1000);
    }

    return (
        <>
            <div className="parent">
                <div className="text">
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                <div className="icons">
                    <div
                        className="cercle-icon"
                        style={{ borderColor: "#4caf50" }}
                    >
                        <IconButton onClick={handelClickDone}>
                            <CheckCircleOutlineOutlinedIcon
                                style={{ color: "#4caf50" }}
                            />
                        </IconButton>
                        {showDone && <Done />}
                    </div>

                    <div
                        className="cercle-icon"
                        style={{ borderColor: "#3f51b5" }}
                    >
                        <IconButton>
                            <EditOutlinedIcon style={{ color: "#3f51b5" }} />
                        </IconButton>
                    </div>

                    <div
                        className="cercle-icon"
                        style={{ borderColor: "#f44336" }}
                    >
                        <IconButton>
                            <DeleteOutlineRoundedIcon
                                style={{ color: "#f44336" }}
                            />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    );
}
