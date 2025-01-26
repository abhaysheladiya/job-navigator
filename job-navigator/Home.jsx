import React from "react";

function Home() {
  return (
    <>
      <h2>Welcome Home</h2>

      <div className="card text-center" style={{ width: "96rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title">Blockchain</h5>
          <p className="card-text">
            Hiring blockchain developer.
            You can findout all the openings of blockchain developer just cliking the button
          </p>
          <a href="https://www.linkedin.com/jobs/blockchain-jobs/?currentJobId=4129412037&originalSubdomain=in" className="btn btn-primary">
            Apply
          </a>
        </div>

        <div className="card-body text-center">
          <h5 className="card-title">Cybersqure</h5>
          <p className="card-text">
            Hiring individuals expert in cyber-security developer.
            more than five month of experience.You can findout all the openings of cybersecurity developer just cliking the button
          </p>
          <a href="https://www.linkedin.com/jobs/search/?currentJobId=4131751612&geoId=102713980&keywords=cyber%20security&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&originalSubdomain=in&refresh=true" className="btn btn-primary">
            Apply
          </a>
        </div>

        <div className="card-body text-center">
          <h5 className="card-title">Backend</h5>
          <p className="card-text">
            Hiring backend developer.
            You can findout all the openings of backend developer just cliking the button
          </p>
          <a href="https://www.linkedin.com/jobs/search/?currentJobId=4117366858&geoId=102713980&keywords=backend%20developer&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&originalSubdomain=in&refresh=true" className="btn btn-primary">
            Apply
          </a>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Frontend</h5>
          <p className="card-text">
            Hiring Frontend developer.
            You can findout all the openings of Frontend developer just cliking the button
          </p>
          <a href="https://www.linkedin.com/jobs/search/?currentJobId=4132733705&geoId=102713980&keywords=frontend%20developer&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&originalSubdomain=in&refresh=true" className="btn btn-primary">
            Apply
          </a>
        </div>
      </div>



    </>
  );
}

export default Home;


