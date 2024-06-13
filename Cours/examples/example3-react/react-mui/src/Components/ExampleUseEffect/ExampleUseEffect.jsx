import { useEffect, useState } from "react";

export default function ExampleUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`cout :${count}`);

        return () => {
            console.log("cleaning !!");
        };
    }, [count]);

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
        </>
    );
}
