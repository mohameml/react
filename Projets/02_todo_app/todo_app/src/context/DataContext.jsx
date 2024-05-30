import { createContext } from "react";

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
    {
        id: 4,
        title: "Tilte 4",
        body: "Description of todo",
        status: ["all", "encoures"],
    },
    {
        id: 5,
        title: "Tilte 5",
        body: "Description of todo",
        status: ["all", "terminee", "encoures"],
    },
    {
        id: 6,
        title: "Tilte 6",
        body: "Description of todo",
        status: ["all", "encoures"],
    },
];

export let DataContext = createContext(todos);
