//
import "./MyFirstComponent.css";

function handelClick() {
  alert("click");
}

const person = {
  name: "sidi",
};

export default function MyFirstComponent() {
  return (
    <div>
      <h1 className={"greeBg active"}>Hello World</h1>
      <h2>Hi</h2>
      <h1 className={person.name === "sidi" ? "redBg" : "yellowBg"}>
        Name : {person.name}
      </h1>
      <button onClick={handelClick}>Click Me</button>
    </div>
  );
}
