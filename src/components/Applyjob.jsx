import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Applyjob() {

  const [name, setName]= useState()
  const [email, setEmail]= useState()
  const [phone, setPhone]= useState()
  const [coverlatter, setCoverlatter]= useState()
  const [position, setPosition]= useState()
  const navigate = useNavigate();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios
      .post("http://localhost:5000/applyjob", {
        name,
        email,
        phone,
        coverlatter,
        position,
      })
      .then((result) => {
        console.log(result);
        // Navigate to the home page on successful submission
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container mt-4">
      <h4 className="text-center text-primary mb-3">Job Application Form</h4>
      <form
        className="p-3 border rounded shadow-sm bg-light"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="row mb-2">
          <div className="col-md-6 mb-1">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-1">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6 mb-1">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-1">
            <label className="form-label">Upload Resume</label>
            <input type="file" className="form-control" required />
          </div>
        </div>

        <div className="mb-2">
          <label className="form-label">Cover Letter</label>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Write here..."
            onChange={(e) => setCoverlatter(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Position Applied For</label>
          <select className="form-select" required onChange={(e) => setPosition(e.target.value)}>
            <option value="" disabled selected>
              Select a position
            </option>
            <option value="developer">Software Developer</option>
            <option value="UI/UX">UI/UX Designer</option>
            <option value="Project manager">Project Manager</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Blockchain">Blockchain</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Application
        </button>
      </form>
    </div>
    </>
  );
}

export default Applyjob;
