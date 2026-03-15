
import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then(Json => setData(Json))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
}, [url]);
        
    return { data, loading, error };
}

export default useFetch;