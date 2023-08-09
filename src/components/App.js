
//import React from "react";


import React, { useState, useEffect } from "react";
import './../styles/App.css';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <h1>Data Fetched from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
