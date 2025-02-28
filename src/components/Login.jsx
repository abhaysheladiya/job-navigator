import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/home");
        } else {
          // Display an error message based on the response data
          console.log(result.data);
          alert("Invalid credentials"); // or set error state to display it in the UI
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form
          className="p-4 border rounded shadow-sm"
          style={{ width: 400 }}
          onSubmit={handleSubmit}
        >
          <h3 className="text-center mb-4">Sign In</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="loginemail"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginpassword"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <div className="text-center mt-2">
            <Link to="/forgot-password" className="text-decoration-none">
              Forgot Password?
            </Link>
          </div>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/registration">Register here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
