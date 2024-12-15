import React, { useState } from "react";

function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  
  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData); 
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
