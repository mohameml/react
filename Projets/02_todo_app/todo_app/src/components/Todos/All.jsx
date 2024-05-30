import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Todo from "../Todo/Todo";

export default function All() {
    let todos = useContext(DataContext);
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
