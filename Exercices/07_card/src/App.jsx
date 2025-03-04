import "./App.css";

function App() {
  const items = [
    {
      color: "blue",
      title: "React",
      level: "advance",
    },
    {
      color: "orange",
      title: "HTML+CSS",
      level: "advance",
    },
    {
      color: "yellow",
      title: "JavaScript",
      level: "advance",
    },
    {
      color: "green",
      title: "Git && Github",
      level: "intermedaire",
    },
    {
      color: "red",
      title: "Svelte",
      level: "beginner",
    },
  ];

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList items={items} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    // <div className="avatar">
    <img src="jonas.jpeg" alt="image" className="avatar" />
    // </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach
      </p>
    </div>
  );
}

function SkillList(props) {
  const { items } = props;
  return (
    <div className="skill-list">
      {items.map((ele) => (
        <Skill data={ele} />
      ))}
    </div>
  );
}

function Skill({ data }) {
  const { color, title, level } = data;

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="skill"
    >
      {title}
      <span>
        {level === "beginner" && "👶"}
        {level === "intermedaire" && "👍"}
        {level === "advance" && "💪"}
      </span>
    </div>
  );
}

export default App;
