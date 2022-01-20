import React, { useEffect, useState } from "react";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://localhost:3001/resources";

export function SearchResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getResults() {
      const response = await fetch(`${API_URL}`, {
        // method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        // }
      });
      const data = await response.json();
      if (data.success === true) {
        console.log(data);
        setResults(data.payload);
      }
    }
    getResults();
  }, []);

  // return <div>Search Results will be here</div>;

  return (
    <ul>
      {results.map(function (result) {
        return (
          <li key={result.resourceid}>
            <p>Title: {result.title}</p>
            <p>URL: {result.url}</p>
          </li>
        );
      })}
    </ul>
  );
}
