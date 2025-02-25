import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/forgot-password", { email })
      .then((result) => {
        if(result.data.Status === "Success"){
            navigate('/login')
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
          <h3 className="text-center mb-4">Forgot Password</h3>
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
          
          <button type="submit" className="btn btn-primary w-100">
            Send
          </button>

        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
