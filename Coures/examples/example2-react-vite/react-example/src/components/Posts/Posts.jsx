import "./Post.css";
import { Link } from "react-router-dom";
import { PostContext } from "../../context/PostContext";
import { useContext } from "react";

export default function Posts() {
    const posts = useContext(PostContext);
    const postList = posts.map((ele) => {
        return (
            <div key={ele.id} className="post">
                <Link to={"/posts/" + ele.id}>
                    <h1>{ele.title}</h1>
                </Link>
            </div>
        );
    });

    return <>{postList}</>;
}
