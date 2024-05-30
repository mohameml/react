import { Outlet } from "react-router-dom";

export default function PostLayout() {
    return (
        <>
            <div>
                <hr />
                <h1>Posts</h1>
                <hr />
            </div>

            <div>
                <Outlet />
            </div>

            <div>
                <hr />
                <h2>footer</h2>
                <hr />
            </div>
        </>
    );
}
