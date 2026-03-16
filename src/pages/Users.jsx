import useFetch from "../hooks/useFetch";
import UserCard from "../components/UserCard";
import { useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";



function Users() {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users"

    );

    const [search, setSearch] = useState("");

    if (loading) return <Loading />
    if (error) return <ErrorMessage message="Failed to fetch users" />

    const filterUsers = data.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Users page</h1>
            <input type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px" }} 
            />

            {filterUsers.length > 0 ? (
                filterUsers.map(user => 
                    <UserCard key={user.id} user={user}/>
                )
            ) : (
                <p>No users found</p>
            )}
        </div>
    
    );
}

export default Users;