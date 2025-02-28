import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const [goToApply, setGoToApply] = React.useState(false);

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs") // Fetch jobs from backend API
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  if (goToApply) {
    return <Navigate to="/applyjob" />;
  }


  return (
    <>
      <h2 className="text-center text-primary fw-bold my-4">
        🔍 Find Your Dream Job
      </h2>

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job._id} className="col">
                <div className="card text-center h-100 shadow-lg d-flex flex-column bg-light border-0">
                  <div className="card-body flex-grow-1">
                    <h5 className="card-title text-primary">{job.title}</h5>
                    <p className="card-text text-secondary">
                      Hiring at{" "}
                      <strong className="text-dark">{job.company}</strong> in{" "}
                      {job.location}. <br />
                      {job.description}
                    </p>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button
                      onClick={() => setGoToApply(true)}
                      className="btn btn-primary w-100"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No job postings available.</p>
          )}
        </div>
      </div>


      {/* Footer with Images */}
      <div className="container mt-5">
        <h4 className="text-center text-secondary">🌍 Explore Top Companies</h4>
        <div className="row justify-content-center mt-3">
          <div className="col-md-2 col-4">
            <img
              src="src/components/Images/google.png"
              alt="Company 1"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-2 col-4">
            <img
              src="src/components/Images/ibm.png"
              alt="Company 2"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-2 col-4">
            <img
              src="src/components/Images/infosys.png"
              alt="Company 3"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-2 col-4">
            <img
              src="src/components/Images/microsoft.png"
              alt="Company 4"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-2 col-4">
            <img
              src="src/components/Images/tcs.png"
              alt="Company 5"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
