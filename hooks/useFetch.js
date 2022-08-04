import React from "react";

const useFetch = (url, options) => {
  let controller;
  controller = new AbortController();
  const { signal } = controller;
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, { ...options, signal });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
};

export default useFetch;
