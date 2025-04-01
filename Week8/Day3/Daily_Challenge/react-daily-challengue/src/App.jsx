import React, { useState } from "react";
import FormComponent from "./components/FormComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutFree: false,
    lactoseFree: false,
    vegan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <FormComponent data={formData} handleChange={handleChange} />
    </div>
  );
}

export default App;
