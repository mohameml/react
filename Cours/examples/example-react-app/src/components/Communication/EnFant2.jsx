import { useContext } from "react";
import { valueContext } from "../../context/ParentContext";

export default function Enfant2() {
    let objetContext = useContext(valueContext);
    let objet2 = valueContext.Consumer;
    console.log(objet2);

    let count = 1;
    function handelClick() {
        count++;
        objetContext.handelChange("value " + count);
    }
    return (
        <>
            <div className="enfant">
                <div style={{ textAlign: "left" }}>
                    <code>Enfant Enfant</code>
                </div>

                <p>{objetContext.value}</p>
                <button onClick={handelClick}>Change Value</button>
            </div>
        </>
    );
}
