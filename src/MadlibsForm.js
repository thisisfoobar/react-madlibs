import { useState } from "react";
import FormInputs from "./FormInputs";

const MadlibsForm = ({ submitted, formData, setFormData }) => {
  
  // Appends value of form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // submits the form data, updates submitted state
  const handleSubmit = (e) => {
    e.preventDefault();
    submitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInputs
        id='noun'
        type='text'
        value={formData.noun}
        onChange={handleChange}
      />
      <FormInputs
        id='noun2'
        type='text'
        value={formData.noun2}
        onChange={handleChange}
      />
      <FormInputs
        id='adjective'
        type='text'
        value={formData.adjective}
        onChange={handleChange}
      />
      <FormInputs
        id='color'
        type='text'
        value={formData.color}
        onChange={handleChange}
      />
      <button>Get Story</button>
    </form>
  );
};

export default MadlibsForm;
