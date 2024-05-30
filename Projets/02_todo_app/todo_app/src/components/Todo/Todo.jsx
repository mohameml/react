import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Todo.css";

import Done from "../Alert/Done";
import IconButton from "@mui/material/IconButton";
// import { useState } from "react";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

export default function Todo({ todo }) {
    const [showDone, setShowDone] = useState(false);
    let { todos, setTodos } = useContext(DataContext);

    function handelClickDone() {
        // on ajoute cette tache comme une tache terminee :
        // let todo = todos.find((ele) => {
        //     if (ele.id === id) {
        //         return true;
        //     }
        // });
        // // todo.status.push("terminee");
        // todo.status.splice(todo.status.indexOf("encoures"), 1, "terminee");
        setShowDone(true);
        setTimeout(() => {
            setShowDone(false);
        }, 1000);
        setTodos(
            todos.map((t) => {
                if (t.id === todo.id) {
                    t.isDone = !t.isDone;
                }
                return t;
            })
        );
    }

    function handelDelete() {
        console.log("Delete");
    }

    return (
        <>
            <div className="parent">
                {/* ====================== Info ============================== */}
                <div className="text">
                    <h3>{todo.title}</h3>
                    <p>{todo.body}</p>
                </div>
                <div className="icons">
                    <div
                        className="cercle-icon"
                        style={{
                            borderColor: todo.isDone ? "white" : "#4caf50",
                            backgroundColor: todo.isDone ? "#4caf50" : "white",
                        }}
                    >
                        {/* =================== Done ============================= */}
                        <IconButton onClick={handelClickDone}>
                            <CheckCircleOutlineOutlinedIcon
                                style={{
                                    color: todo.isDone ? "white" : "#4caf50",
                                }}
                            />
                        </IconButton>
                        {showDone && (
                            <Done
                                text={
                                    todo.isDone
                                        ? "Tache Terminée Bravo"
                                        : "action Done"
                                }
                            />
                        )}
                    </div>

                    {/* =================== Edit ============================= */}

                    <div
                        className="cercle-icon"
                        style={{ borderColor: "#3f51b5" }}
                    >
                        <IconButton>
                            <EditOutlinedIcon style={{ color: "#3f51b5" }} />
                        </IconButton>
                    </div>

                    {/* =================== Delete ============================= */}

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
