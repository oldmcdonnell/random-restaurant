import { useState } from "react";
//import React from 'react';
//import Comments from './Comments'

function MyForm() {
  const [formData, setFormdata] = useState({
    name: "",
    review: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata({...formData, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //submit the form data

    alert(`Submitted data: ${JSON.stringify(formData)}`)
    //alert(`We Totally hear and understand your complaint`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        />
        <input
        type="text"
        name="review"
        placeholder="Review"
        value={formData.review}
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
    </form>
  )
}

const App = () => {
  return (
    <div className="container">
        <div className="col-4 mx-auto">
          <h4>Complaints</h4>
        </div>
        <div className="col-4 mx-auto">
        <MyForm />
        </div>
    </div>
  );
};

export default App;