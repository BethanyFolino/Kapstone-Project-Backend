import React, { useState } from "react";
import { LOGIN, useStore } from "../Store/Store";
import { loginRequest } from "../fetchRequests";

const Login = () => {
  const dispatch = useStore((state) => state.dispatch);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.email, formData.password).then((userData) =>
      dispatch({ type: LOGIN, payload: userData })
    );
  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div>
      <h1>Go ahead and login here !</h1>
      <form id="login" onSubmit={handleLogin}>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            type="text"
            name="email"
            value={formData.email}
            autoFocus
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          id="login-form"
          onSubmit={handleLogin}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
