import React, { useState } from "react";
import API from "../services/api";

function SimpleApiCall() {
  const [response, setResponse] = useState("");

  const callBackend = async () => {
    try {
      const res = await API.get("/hello");   // Example API
      setResponse(res.data);
    } catch (error) {
      console.error(error);
      setResponse("Error calling backend");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple Backend API Call</h2>
      <button onClick={callBackend}>Call Spring Boot API</button>
      <h3>Response:</h3>
      <p>{response}</p>
    </div>
  );
}

export default SimpleApiCall;
