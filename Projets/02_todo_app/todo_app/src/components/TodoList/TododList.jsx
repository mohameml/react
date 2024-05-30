import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { DataContext } from "../../context/DataContext";

export default function TodoList() {
    const initTodos = [
        {
            id: uuidv4(),
            title: "Tilte 1",
            body: "Description of todo",
            isDone: false,
        },
        {
            id: uuidv4(),
            title: "Tilte 2",
            body: "Description of todo",
            isDone: false,
        },
        {
            id: uuidv4(),
            title: "Tilte 3",
            body: "Description of todo",
            isDone: false,
        },
    ];

    const [todos, setTodos] = useState(initTodos);
    const [valueInput, setValueInput] = useState("");

    let todosList = todos.map((ele) => {
        return <Todo key={ele.id} todo={ele} />;
    });

    function handelInputChange(e) {
        setValueInput(e.target.value);
    }

    function handelAdd() {
        setTodos([
            ...todos,
            { id: uuidv4(), title: valueInput, body: "", isDone: false },
        ]);
        setValueInput("");
    }

    return (
        <>
            {/* =========== title =================== */}
            <div className="container">
                <div className="title">
                    <h1>Todo List</h1>
                    <Divider />
                </div>
                {/* ================== nav Bar =========================== */}
                <div className="nav">
                    <ToggleButtonGroup
                        value={"value"}
                        exclusive
                        onChange={() => console.log("ToggleButton change")}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned">
                            All
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            Termineé
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            En coures
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>

                {/* ==================================== todos =============================== */}
                <DataContext.Provider value={{ todos, setTodos }}>
                    {todosList}
                </DataContext.Provider>
                {/* ================================ add todo =============================== */}
                <div className="add">
                    <TextField
                        id="outlined-basic"
                        label="ajouter votre nouveau tache"
                        variant="outlined"
                        style={{ width: "60%" }}
                        value={valueInput}
                        onChange={handelInputChange}
                    />
                    <Button
                        variant="contained"
                        style={{ width: "40%" }}
                        onClick={handelAdd}
                    >
                        Add
                    </Button>
                </div>
            </div>
        </>
    );
}
