import React from "react";

function Applyjob() {
  return (
    <>
      <div className="container">
        <h2>Job Application Form</h2>
        <form>
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resume" className="form-label">
              Upload Resume
            </label>
            <input
              type="file"
              className="form-control"
              id="resume"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="coverLetter" className="form-label">
              Cover Letter
            </label>
            <textarea
              className="form-control"
              id="coverLetter"
              rows={4}
              placeholder="Write your cover letter here"
              defaultValue={""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="position" className="form-label">
              Position Applied For
            </label>
            <select className="form-select" id="position" required="">
              <option value="" selected="" disabled="">
                Select a position
              </option>
              <option value="developer">Software Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="manager">Project Manager</option>
              <option value="manager">Cyber Security</option>
              <option value="manager">BlockChain</option>
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
