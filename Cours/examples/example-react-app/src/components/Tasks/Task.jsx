import { useState } from "react";
import "./Task.css";

function Task() {
    let count = 4;
    const [value, setValue] = useState("");
    const [devaices, setDevaices] = useState([
        { id: 1, name: "Task 1" },
        { id: 2, name: "Task 2" },
        { id: 3, name: "Task 3" },
        { id: 4, name: "Task 4" },
    ]);

    function handelAdd() {
        count++;
        setDevaices([...devaices, { id: count, name: value }]);
    }

    function handelDelete(id) {
        setDevaices(devaices.filter((elem) => (elem.id !== id ? true : false)));
    }

    function handelEdit(id) {
        setDevaices(
            devaices.map((elem) => {
                if (elem.id === id) {
                    elem.name = elem.name + "w";
                    return elem;
                }

                return elem;
            })
        );
    }

    const devaicesList = devaices.map((item) => (
        <li key={item.id}>
            {item.name}
            <button onClick={() => handelDelete(item.id)}>X</button>
            <button onClick={() => handelEdit(item.id)}>Edit</button>
        </li>
    ));

    return (
        <>
            <div className="task">
                {devaicesList}
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handelAdd}>add</button>
            </div>
        </>
    );
}

export default Task;
