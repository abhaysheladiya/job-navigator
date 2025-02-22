import React, { useState } from 'react';
import axios from 'axios'
import  { useNavigate } from "react-router-dom";
function Registration() {

 const [name, setName]= useState()
  const [email, setEmail]= useState()
  const [password, setPassword]= useState()
  const [gender, setGender]= useState()
  const navigate = useNavigate(); 
  

    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })


  const [errors, setErrors]= useState({})

  const handleChange=(e)=>{
    const {name, value}= e.target;
    setFormData({
      ...formData, [name] : value
    })

    if (name === "username") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "gender") setGender(value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault()


    const validationErrors={}
    if(!formData.username.trim()){
      validationErrors.username= "user name is required"
    }
    if(!formData.email.trim()){
      validationErrors.email ="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email ="Email is not valid"
    }
    if(!formData.password.trim()){
      validationErrors.password ="Password is required"
    }else if(formData.password.length < 6){
      validationErrors.password ="Password should be at least 6 char"
    }
    if(formData.confirmPassword !== formData.password){
      validationErrors.confirmPassword = "password not matched"
    }
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0){
      alert("Form submitted successfully")
    }


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
    
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              required=""
              //onChange={(e)=> setName(e.target.value)}
              onChange={handleChange}
              />
              {errors.username && <span className="text-danger">{errors.username}</span>}
          </div>
     
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required=""
              //onChange={(e)=> setEmail(e.target.value)}
              onChange={handleChange}
            />
              {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required=""
             // onChange={(e)=> setPassword(e.target.value)}
              onChange={handleChange}
            />
               {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
        
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              required=""
              onChange={handleChange}
            />
      
          </div>
       
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
       
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </>

  );
}

export default Registration;