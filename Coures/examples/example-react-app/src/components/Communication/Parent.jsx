import { useState } from "react";
import Enfant from "./Enfant";
import "./Parent.css";

import { valueContext } from "../../context/ParentContext";

export default function Parent() {
    const [value, setValue] = useState("value 1");

    function handelChange(v) {
        setValue(v);
    }

    return (
        <>
            <div className="parent">
                <div style={{ textAlign: "left" }}>
                    <code>parent</code>
                </div>
                <valueContext.Provider
                    value={{
                        value: value,
                        handelChange: handelChange,
                    }}
                >
                    <Enfant />
                </valueContext.Provider>
            </div>
        </>
    );
}
