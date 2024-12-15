# React App: JSON, Form Data, Promises, Async/Await

This React application demonstrates how to work with form data, JSON, promises, and async/await. It showcases how to handle user inputs, fetch data from an API, and display results using modern JavaScript features in a React app.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Key Concepts](#key-concepts)
3. [App Overview](#app-overview)
4. [Components Overview](#components-overview)
5. [Code Explanation](#code-explanation)
6. [Setup Instructions](#setup-instructions)

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **useState**: React Hook for managing state in functional components.
- **Async/Await**: JavaScript syntax for handling asynchronous operations.
- **Promises**: A modern way to handle asynchronous code.
- **JSON**: Format used for data exchange (in this case, fetching data from a placeholder API).

---

## Key Concepts

### 1. **JSON (JavaScript Object Notation)**

- JSON is a lightweight data format that is commonly used to exchange data between a client and a server.
- In this app, we use **JSON Placeholder** to fetch sample data (such as user names and emails).
- The fetched data is in JSON format, which is parsed and displayed in the app.

### 2. **Form Data**

- **Form data** refers to the information collected from the user through a form.
- In this app, we collect a user's **name** and **email** using a simple form. Upon form submission, the data is saved in the state and displayed below the form.

### 3. **Promises**

- A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.
- In the app, a promise is used to fetch data asynchronously from the JSON Placeholder API. The promise is either resolved (data is fetched) or rejected (if there's an error).

### 4. **Async/Await**

- **Async/Await** is a syntax for working with promises in a more readable and synchronous-looking manner.
- `async` makes a function return a promise, while `await` pauses the execution of the function until the promise is resolved or rejected.
- In this app, `async/await` is used to fetch data from the API asynchronously and update the state when the data is received.

---

## App Overview

This React app is designed to handle and display form data and fetch data from an external API (JSON Placeholder). 

### Features:
1. **Form for User Input**: Collects a user's name and email.
2. **Form Data Display**: After submission, the form data is displayed below the form.
3. **Fetch Data Button**: A button that, when clicked, fetches data from a JSON Placeholder API using promises and async/await.
4. **Fetched Data Display**: Displays the data fetched from the API.

---

## Components Overview

### 1. **Form** (Child Component)
- Collects user data (name and email) through a form.
- Passes the collected data back to the parent `App` component using a prop (`onFormSubmit`).

### 2. **FetchData** (Utility Function)
- A function that handles the API call to fetch data asynchronously using `async/await`.

### 3. **DisplayData** (Child Component)
- Takes the fetched data as a prop (`data`) and displays it on the screen.

---

## Code Explanation

### App Component

```jsx
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
