import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Todo from "../Todo/Todo";

export default function Termine() {
    let todos = useContext(DataContext);
    todos = todos.filter((ele) => {
        if (ele.status.includes("terminee")) {
            return true;
        }

        return false;
    });

    console.log(todos);
    let todosList = todos.map((ele) => {
        return (
            <Todo key={ele.id} title={ele.title} body={ele.body} id={ele.id} />
        );
    });

    return (
        <>
            <div>{todosList}</div>
        </>
    );
}
