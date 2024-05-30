import "./Info.css";

import React from "react";

let nameAttr = "Ahmed";

function Info({ name, age, content = "no", children, hiddenBtn }) {
  if (content === "no") {
    return (
      <>
        <div className="card">no content</div>
      </>
    );
  } else {
    return (
      <>
        <div className="card">
          {children}
          <h1>Name : {name}</h1>
          <h2>Age : {age}</h2>
          <hr />
          <p>{content}</p>
          <h2>{nameAttr}</h2>
        </div>
        {hiddenBtn ? null : <button onClick={handelClick}>button</button>}
      </>
    );
  }
}

function handelClick() {
  console.log(nameAttr);
  nameAttr = "sidi";
}

export default Info;
