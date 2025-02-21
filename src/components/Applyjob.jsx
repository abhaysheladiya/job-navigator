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
      <div className="container">
        <h2>Job Application Form</h2>
        <form className="p-4 p-md-5 border-0 rounded-3 shadow-sm bg-#f8f9fa"
        onSubmit={handleSubmit} action="/upload" method="post" encType="multipart/form-data">
          <div className="mb-2">
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
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
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
          <div className="mb-2">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required=""
              onChange={(e)=> setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="resume" className="form-label">
              Upload Resume
            </label>
            <input
              type="file"
              className="form-control"
              id="resume"
              required=""
              name="resume"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="coverLetter" className="form-label">
              Cover Letter
            </label>
            <textarea
              className="form-control"
              id="coverLetter"
              rows={4}
              placeholder="Write your cover letter here"
              defaultValue={""}
              onChange={(e)=> setCoverlatter(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="position" className="form-label">
              Position Applied For
            </label>
            <select className="form-select" id="position" required=""
            onChange={(e)=> setPosition(e.target.value)}>
              <option value="" selected="" disabled="">
                Select a position
              </option>
              <option value="developer">Software Developer</option>
              <option value="UI/UX">UI/UX Designer</option>
              <option value="Project manager">Project Manager</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Blockchain">BlockChain</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </form>
      </div>
    </>
  );
}

export default Applyjob;
