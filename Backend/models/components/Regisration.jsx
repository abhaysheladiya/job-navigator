import React, { useState } from 'react';
import axios from 'axios'
import  { useNavigate } from "react-router-dom";
function Registration() {

  const [name, setName]= useState()
  const [email, setEmail]= useState()
  const [password, setPassword]= useState()
  const [gender, setGender]= useState()
  const navigate = useNavigate();
  
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/register',{name, email, password, gender})
    .then(result => {
      console.log(result);
      navigate("/home");
    })
    .catch(err=> console.log(err));
  }
  
  return (

    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <form
          className="p-5 border rounded shadow bg-white"
          style={{ width: 400 }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-center mb-4">Register</h2>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              required=""
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          {/* Email Address */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required=""
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required=""
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              required=""
            />
          </div>
          {/* Gender (Radio Buttons) */}
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                defaultValue="male"
                required=""
                value="Male"
                onChange={(e)=> setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                defaultValue="female"
                required=""
                value="Female"
                onChange={(e)=> setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          {/* Terms and Conditions (Checkbox) */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required=""
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the terms and conditions
            </label>
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </>

  );
}

export default Registration;