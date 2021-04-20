import React, { useState } from "react";

const Login = () => {
  const initialCredentials = {
    username: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    // POST credentials
  };

  return (
    <div>
      <form onSubmit={login}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            value={credentials.username}
            placeholder="Username"
          />
        </label>
      </form>
    </div>
  );
};

export default Login;
