import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Posts from "./components/Posts/Posts";
import PostDetailles from "./components/PostDetailles/PostDetailles";
import { PostContext } from "./context/PostContext";
import NotFound from "./components/NotFound/NotFound";
import AddPost from "./components/Posts/AddPost";
import RemovePost from "./components/Posts/RemovePost";
import PostLayout from "./components/Posts/PostLayout";

function App() {
    const posts = [
        {
            id: 1,
            title: "Post 1",
            body: "La seule façon de faire du bon travail, c'est d'aimer ce que vous faites",
        },
        {
            id: 2,
            title: "Post 2",
            body: "Commencez votre journée par la tâche la plus difficile. Cela vous donne un sentiment d'accomplissement et rend les autres tâches plus faciles à gérer",
        },
        {
            id: 3,
            title: "Post 3",
            body: "Essayez de cuisiner un plat traditionnel d'un pays étranger ce week-end ! Cela peut être une excellente façon de voyager sans quitter votre cuisine",
        },
    ];

    return (
        <>
            <PostContext.Provider value={posts}>
                <div className="nav">
                    <Link to={"/"}>
                        <button>Home</button>
                    </Link>
                    <Link to={"about"}>
                        <button>About</button>
                    </Link>
                    <Link to={"/posts"}>
                        <button>Posts</button>
                    </Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<PostLayout />}>
                        <Route index element={<Posts />} />
                        <Route path=":postId" element={<PostDetailles />} />
                        <Route path="new" element={<AddPost />} />
                        <Route path="remove" element={<RemovePost />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </PostContext.Provider>
        </>
    );
}

export default App;
