import "./App.css";
import Info from "./components/Info/Info";
import Task from "./components/Tasks/Task";
import Counter from "./components/Counter/Counter";
import MyInput from "./components/MyInput/MyInput";
import Forms from "./components/Forms/Forms";
import Parent from "./components/Communication/Parent";
import Hello from "./components/Routers/Hello";
import { Route, Routes } from "react-router-dom";

function App() {
    const users = [
        {
            id: 1,
            name: "sidi",
            age: 20,
            content: "sidsjljsofi iojdopidoioppdioidodi ",
        },
        {
            id: 2,
            name: "Ahmed",
            age: 30,
            content: "sidsjljsofi iojdopidoioppdioidodi ",
        },
        { id: 3, name: "Khaled", age: 25 },
        { id: 4, name: "Omar", age: 30 },
    ];

    const tasks = ["task 1", "task 2", "task 3", "task 4"];

    return (
        <div>
            {users.map((item) => {
                return <Info key={item.id} {...item} hiddenBtn></Info>;
            })}
            <hr />
            <div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task}>{task}</li>
                    ))}
                </ul>
            </div>
            <hr />
            <div>
                <Counter />
            </div>
            <div>
                <MyInput></MyInput>
            </div>
            <hr />
            <div>
                <Forms></Forms>
            </div>
            <hr />
            <div>
                <Task />
            </div>
            <hr />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    Counter : Updating State Sevral Time
                </h1>
                <Counter></Counter>
            </div>
            <hr />
            <div>
                <Parent></Parent>
            </div>
            <hr />
            <div>
                <Routes>
                    <Route path="/hello" element={<Hello />} />
                    <Route
                        path="/sidi"
                        element={
                            <div>
                                <h1>Hello Sidi</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iste, voluptas!
                                </p>
                            </div>
                        }
                    ></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
