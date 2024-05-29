import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div
            style={{
                color: "red",
            }}
        >
            <h1>
                Not Found : <code>404 Error</code>
            </h1>
            <Link to={"/"}>
                <button>Retourn to Home</button>
            </Link>
        </div>
    );
}
