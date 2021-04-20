import React, { useState } from "react";

const FriendForm = ({ setFriends }) => {
  const initialFormData = {
    name: "",
    age: "",
    email: "",
    id: "",
  };

  const [formValues, setFormValues] = useState(initialFormData);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.target.preventDefault();
    alert("clicky submits");
  };

  return (
    <div>
      <h2>Add a New Friend</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>
        <label htmlFor="age">
          {/* Validate is number */}
          <input
            name="age"
            type="text"
            value={formValues.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button type="submit">Add Friend</button>
        </label>
      </form>
    </div>
  );
};

export default FriendForm;
