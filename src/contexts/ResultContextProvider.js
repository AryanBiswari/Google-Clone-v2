import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "62bfd02e48mshebe25b7c4c0adbep158924jsn94961f49d3d1",
      },
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };
  return (
      <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
          {children}
      </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);