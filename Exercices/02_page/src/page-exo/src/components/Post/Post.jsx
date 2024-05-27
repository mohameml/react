export default function Post({ title = "no title", body = "no body" }) {
  let showPost = true;
  if (title === "no title") {
    showPost = false;
  }

  return (
    <>
      {showPost && (
        <div
          style={{
            textAlign: "center",
            border: "solid 3px #009688",
            width: "100%",
            height: "150px",
            padding: "20px",
            flexGrow: "1",
          }}
        >
          <h3
            style={{
              marginBottom: "15px",
              fontWeight: "bold",
            }}
          >
            {title}
          </h3>
          <hr />
          <p
            style={{
              marginTop: "15px",
            }}
          >
            {body}
          </p>
        </div>
      )}
    </>
  );
}
