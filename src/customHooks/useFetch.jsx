import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      try {
        const response = await axios.get(url, { ...options });

        setData(response.data);
        setErrorMsg("");
      } catch (error) {
        setErrorMsg(error.message || "An error occurred");
      } finally {
        setPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, pending, errorMsg };
}
