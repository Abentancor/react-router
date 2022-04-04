import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e=>setError("Error de servidor"))
            .finally(()=>setLoading(false))
    }, [url])

  return {data, error, loading};
};
