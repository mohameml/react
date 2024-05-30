import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Todo from "../Todo/Todo";

export default function EnCoures() {
    let todos = useContext(DataContext);
    todos = todos.filter((ele) => {
        if (ele.status.includes("encoures")) {
            return true;
        }

        return false;
    });

    console.log("froms Termine = ");
    console.log(todos);
    let todosList = todos.map((ele) => {
        return (
            <Todo key={ele.id} title={ele.title} body={ele.body} id={ele.id} />
        );
    });
    console.log(todosList);

    if (todosList.length > 0) {
        return (
            <>
                <div>{todosList}</div>
            </>
        );
    } else {
        return (
            <>
                <div>
                    <h2>Bravo, vous avez terminé vos tâches à faire</h2>
                </div>
            </>
        );
    }
}
