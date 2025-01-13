import React from "react";

function Login (){

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