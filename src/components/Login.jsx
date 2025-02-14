import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';


  const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate;

    const collectData=async ()=>{
        console.warn(email,password);

        //API call
        let result = await fetch('http://localhost:5000/register',{
          method:'POST',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json',

          }
        });
        result = await result.json()
        console.warn(result);
        if(result)
        {
        navigate('/')
        }
    }

return ( 
<>
<div className="d-flex justify-content-center align-items-center vh-100">
  <form className="p-4 border rounded shadow-sm" style={{ width: 400 }}>
    <h3 className="text-center mb-4">Sign In</h3>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="loginemail"
        value={email} onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email"
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
        value={password} onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter your password"
      />
    </div>
    <button type="submit" onClick={collectData} className="btn btn-primary w-100">
      Login
    </button>
  </form>
</div>


</>
);
}

export default Login;