import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {id, token}= useParams()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/reset-password/${id}/${token}`, { password })
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
          <h3 className="text-center mb-4">Reset Password</h3>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginpassword"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          
          <button type="submit" className="btn btn-primary w-100">
            Reset
          </button>

        </form>
      </div>
    </>
  );
};

export default ResetPassword;
