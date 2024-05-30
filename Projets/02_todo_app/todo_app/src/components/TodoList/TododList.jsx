import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NavBar from "./components/NavBar/NavBar";
import Divider from "@mui/material/Divider";
import All from "./components/Todos/All";

import { Routes, Route } from "react-router-dom";

import { DataContext } from "./context/DataContext";

import Termine from "./components/Todos/Termine";
import EnCoures from "./components/Todos/EnCoures";

export default function TodoList() {
    const todos = [
        {
            id: 1,
            title: "Tilte 1",
            body: "Description of todo",
            status: ["all", "terminee"],
        },
        {
            id: 2,
            title: "Tilte 2",
            body: "Description of todo",
            status: ["all", "terminee"],
        },
        {
            id: 3,
            title: "Tilte 3",
            body: "Description of todo",
            status: ["all", "encoures"],
        },
        // {
        //     id: 4,
        //     title: "Tilte 4",
        //     body: "Description of todo",
        //     status: ["all", "encoures"],
        // },
        // {
        //     id: 5,
        //     title: "Tilte 5",
        //     body: "Description of todo",
        //     status: ["all", "terminee"],
        // },
        // {
        //     id: 6,
        //     title: "Tilte 6",
        //     body: "Description of todo",
        //     status: ["all", "encoures"],
        // },
    ];
    return (
        <>
            <DataContext.Provider value={todos}>
                <div className="container">
                    <div className="title">
                        <h1>Tod List</h1>
                        <Divider />
                    </div>
                    <div className="nav">
                        <NavBar />
                    </div>
                    <Routes>
                        <Route path="/" element={<All />}></Route>
                        <Route path="/all" element={<All />}></Route>
                        <Route path="/terminee" element={<Termine />}></Route>
                        <Route path="/encoures" element={<EnCoures />}></Route>
                    </Routes>

                    <div className="add">
                        <TextField
                            id="outlined-basic"
                            label="ajouter votre nouveau tache"
                            variant="outlined"
                            style={{ width: "60%" }}
                        />
                        <Button variant="contained" style={{ width: "40%" }}>
                            Add
                        </Button>
                    </div>
                </div>
            </DataContext.Provider>
        </>
    );
}
