const title = "Bonjour";
let styleTitle = {
  color: "red",
};

const showTitle = true;
const showP = false;

const todos = ["tache1", "tache2", "tache3", "tache4", "tache5"];

function App() {
  const handelClick = (e) => {
    console.log(e);
    alert("click");
  };

  return (
    <>
      <Title color="green" hidden>
        Mon Composant
      </Title>
      {showTitle && (
        <h1
          id="title"
          className="title"
          style={{ backgroundColor: "blue" }}
          onClick={handelClick}
        >
          {title}
        </h1>
      )}
      {showP ? (
        <h1
          id="title"
          className="title"
          style={{ backgroundColor: "blue" }}
          onClick={handelClick}
        >
          {title}
        </h1>
      ) : (
        <p>P</p>
      )}
      <input type="text" />
      <p style={styleTitle}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta impedit
        doloremque asperiores tempora, mollitia quas aperiam, eligendi vero
        suscipit officiis ea. Eum ipsa autem voluptatum nisi iste necessitatibus
        praesentium tenetur?
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

function Title({ color, children, hidden }) {
  if (hidden) {
    return null;
  }

  const props = {
    id: "monid",
    className: "maclasse",
  };

  return (
    <>
      <h1 style={{ color: color }} {...props}>
        {children}
      </h1>
    </>
  );
}

export default App;
