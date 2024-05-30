import { useState } from "react";

function MyInput() {
  console.log("render Input");
  const [value, setValue] = useState("");

  function handelChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor="nom">Name :</label>
      <input type="text" value={value} id="nom" onChange={handelChange} />
    </div>
  );
}

export default MyInput;
