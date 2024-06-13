import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Todo.css";
import Done from "../Alert/Done";
import IconButton from "@mui/material/IconButton";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Edit from "./Edit";

export default function Todo({ todo }) {
    const [showDone, setShowDone] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    let { todos, setTodos } = useContext(DataContext);

    function handelClickDone() {
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

    function handelEdit() {}

    return (
        <>
            {/* =============== Dialoge of Delete ================== */}

            <Dialog open={showDelete}>
                <DialogTitle>
                    {"Are you shoure about delete this todo ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        if you delete you can not restore it
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() =>
                            setTodos(
                                todos.filter((t) =>
                                    t.id === todo.id ? false : true
                                )
                            )
                        }
                    >
                        confrime
                    </Button>
                    <Button onClick={() => setShowDelete(false)} autoFocus>
                        cancel
                    </Button>
                </DialogActions>
            </Dialog>

            {/* ========== // end Dialoge of Delete // ============ */}
            {/* {true && <Edit />} */}

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
                        <IconButton onClick={handelEdit}>
                            <EditOutlinedIcon style={{ color: "#3f51b5" }} />
                        </IconButton>
                    </div>

                    {/* =================== Delete ============================= */}

                    <div
                        className="cercle-icon"
                        style={{ borderColor: "#f44336" }}
                    >
                        <IconButton onClick={() => setShowDelete(true)}>
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
