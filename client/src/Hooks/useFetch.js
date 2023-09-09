import { useState,useEffect } from "react";
import makeRequest from "../API/api";
 const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () =>{
      try {
        setLoding(true);
        const res = await makeRequest.get(url)   
        setData(res.data.data)
      } catch (err){
        setError(true);
      }
      setLoding(false);
    };
    fetchData();
  }, [url]);

  return { error, loading, data };
};

export default useFetch;
