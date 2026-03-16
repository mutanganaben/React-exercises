import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
            <Link to="/">Home</Link> | {" "}
            <Link to="/users">Users</Link> | {" "}
            <Link to="/about">About</Link>
            <h2>React users app</h2>

            <button onClick={toggleTheme}>
                Toggle Theme ({theme})
            </button>
        </nav>
    );
}

export default Navbar;