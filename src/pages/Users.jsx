import useFetch from "../hooks/useFetch";
import UserCard from "../components/UserCard";


function Users() {
    const { data, loading, erroe } = useFetch(
        "https://jsonplaceholder.typicode.com/users"

    );
    if (loading) return <p>Loading...</p>;
    if (erroe) return <p>Error fetching data</p>;

    return (
        <div>
            <h1>Users page</h1>
            {data.map(user => (
                <UserCard key={user.id} user={user}/>
            ))}
        </div>
    
    );
}

export default Users;