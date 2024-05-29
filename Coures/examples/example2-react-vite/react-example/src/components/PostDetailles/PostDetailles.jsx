import { useParams } from "react-router-dom";
import { PostContext } from "../../context/PostContext";
import { useContext } from "react";

export default function PostDetailles() {
    let { postId } = useParams();
    postId = parseInt(postId);
    const posts = useContext(PostContext);
    const post = posts.filter((ele) => ele.id === postId)[0];
    // console.log(post);

    if (post) {
        return (
            <>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </>
        );
    } else {
        return (
            <div style={{ color: "red" }}>
                <h1>The post with the id {postId} is not define</h1>
            </div>
        );
    }
}
