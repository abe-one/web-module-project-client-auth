import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {
  const initialCredentials = {
    username: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);
  const history = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        debugger;
        window.localStorage.setItem("token", JSON.stringify(res.data.payload));
        console.log(res.data.payload);
        history.push("/friendslist");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {});
  };

  return (
    <div>
      <form onSubmit={login}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
