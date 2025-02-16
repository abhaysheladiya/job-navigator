import React,{useState} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';


  const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/login',{email, password}) 
      .then(result => {
        console.log(result)
        if(result.data === "Success"){
          navigate('/home');
        }
      }) 
      .catch(err=> console.log(err))
    }

return ( 
<>
<div className="d-flex justify-content-center align-items-center vh-100">
  <form className="p-4 border rounded shadow-sm" style={{ width: 400 }}
  onSubmit={handleSubmit}>

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
        onChange={(e)=> setEmail(e.target.value)}
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
        onChange={(e)=> setPassword(e.target.value)}
        placeholder="Enter your password"
      />
    </div>
    <button type="submit" className="btn btn-primary w-100">
      Login
    </button>
  </form>
</div>


</>
);
}

export default Login;