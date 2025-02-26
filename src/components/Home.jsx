import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Home() {

  const [goToApply, setGoToApply]=React.useState(false);

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs") // Fetch jobs from backend API
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  if(goToApply){
    return <Navigate to="/applyjob"/>;
  }

  return (
    <>
      <h2>Find jobs</h2>
      <div className="container mt-4">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job._id} className="card text-center mb-3" style={{ width: "80rem" }}>
            <div className="card-body text-center">
              <h5 className="card-title">{job.title}</h5>
              <p className="card-text">
                Hiring at <strong>{job.company}</strong> in {job.location}. <br />
                {job.description}
              </p>
              <button onClick={()=>{
            setGoToApply(true);
          }} className="btn btn-primary">
            {" "}
            Apply
          </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No job postings available.</p>
      )}
    </div>


    </>
  );
}

export default Home;


