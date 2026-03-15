
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function UserDetails() {
    const { id } = useParams();

    const { data, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error fetching data</p>

    return (
        <div>
            <h1>User Details</h1>
            <p>User ID: {id}</p>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>City: {data.address.city}</p>
            <Link to="/users">Back to Users</Link>
        </div>
    );
}

export default UserDetails;