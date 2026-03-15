
import { Link } from "react-router-dom";

function UserCard({ user }) {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>

            <Link to={`/users/${user.id}`}>View Details</Link>
        </div>
    );

}

export default UserCard;