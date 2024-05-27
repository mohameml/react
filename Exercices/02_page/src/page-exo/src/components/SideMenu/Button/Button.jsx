import "./Button.css";

export default function Button({ title = "Tag Button", children }) {
  return (
    <>
      <button className="btn">
        <h4>{title}</h4>
        {children}
      </button>
    </>
  );
}
