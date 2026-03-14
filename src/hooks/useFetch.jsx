
import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(Json => {
            setData(Json);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setError(true);
            setLoading(false);
        });
}, [url]);
        
    return { data, loading, error };
}

export default useFetch;