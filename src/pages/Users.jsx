import useFetch from "../hooks/useFetch";
import UserCard from "../components/UserCard";
import { useState } from "react";


function Users() {
    const { data, loading, erroe } = useFetch(
        "https://jsonplaceholder.typicode.com/users"

    );

    const [search, setSearch] = useState("");

    if (loading) return <p>Loading...</p>
    if (erroe) return <p>Error fetching data</p>

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