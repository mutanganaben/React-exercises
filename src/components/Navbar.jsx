import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
            <Link to="/">Home</Link> | {" "}
            <Link to="/users">Users</Link> | {" "}
            <Link to="/about">About</Link>
        </nav>
    );
}

export default Navbar;