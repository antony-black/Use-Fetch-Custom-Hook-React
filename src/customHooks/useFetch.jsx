import React from "react";
import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error((await response).statusText);
      const result = await response.json();

      setData(result);
      setErrorMsg(null);
      setPending(false);
    } catch (e) {
      setErrorMsg(e);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, pending, errorMsg };
}
