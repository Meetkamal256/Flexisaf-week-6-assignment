import React, { useState } from "react";
import Form from "./components/Form";
import FetchData from "./components/FetchData";
import DisplayData from "./components/DisplayData";

function App() {
  const [formData, setFormData] = useState(null);
  const [data, setData] = useState(null);

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  // Function to fetch data
  const handleFetchData = async () => {
    const result = await FetchData();
    setData(result);
  };
  
  return (
    <div className="AppContainer">
      <div className="App">
        <h1>React App: JSON, Form Data, Promises, Async/Await</h1>
        
        <Form onFormSubmit={handleFormSubmit} />
        
        <div data-id="user-info">
          <h2>Form Data</h2>
          {formData && (
            <div>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
            </div>
          )}
        </div>
        
        <button onClick={handleFetchData}>Fetch Data</button>
        
        <div data-id="fetched-data">
          <h2>Fetched Data (from JSON Placeholder)</h2>
          {data && <DisplayData data={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
