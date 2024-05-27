import { useState } from "react";
import "./Counter..css";

function Counter() {
    console.log("render Counter");

    let [count, setCount] = useState(0);

    function update() {
        setCount((count) => count + 1);
        setCount((count) => count + 1);
    }

    return (
        <>
            <div className="counter">
                <h3>resultat: {count}</h3>
                <button onClick={update}>Update</button>
            </div>
        </>
    );
}

export default Counter;
