import React, { useState } from "react";
import { axiosAuth } from "../utils/axiosAuth";

const FriendForm = ({ setFriends }) => {
  const initialFormValues = {
    name: "",
    age: "",
    email: "",
    id: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const postFriend = (friendObj) => {
    axiosAuth()
      .post("/api/friends", friendObj)
      .then((res) => {
        setFriends(res.data);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {});
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postFriend({ ...formValues, id: "777" });
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
