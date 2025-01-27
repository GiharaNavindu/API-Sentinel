import axios from "axios";
import React, { useEffect, useState } from "react";

const Popup = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/usage")
      .then((response) => setApiData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>API Usage</h2>
      <ul>
        {apiData.map((api, index) => (
          <li key={index}>
            {api.endpoint} - {api.calls} calls
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
