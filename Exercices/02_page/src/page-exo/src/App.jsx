import Header from "./components/Header/Header";

import Post from "./components/Post/Post";

import "./App.css";

import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  const infoPost = [
    {
      title: "title 1",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorem!",
    },
    {
      title: "title 2",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorem!",
    },
    {
      title: "title 3",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorem!",
    },
    {
      title: "title 4",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorem!",
    },
    {
      title: "title 5",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorem!",
    },
  ];

  return (
    <div>
      <Header></Header>
      <div
        className="container"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            width: "500px",
          }}
        >
          {infoPost.map((post) => {
            return (
              <Post key={post.title} title={post.title} body={post.body} />
            );
          })}
        </div>
        <SideMenu></SideMenu>
      </div>
    </div>
  );
}

export default App;
