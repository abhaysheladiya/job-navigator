import React from "react";

function About() {
  return (
    <>
      <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card border-0 shadow-lg p-4">
            <div className="row align-items-center">
              {/* Image Section */}
              <div className="col-md-6 text-center">
                <img
                  src="src/components/Images/pexels-pixabay-269077.jpg"
                  className="img-fluid rounded"
                  alt="About Us"
                  style={{ maxHeight: "350px", objectFit: "cover" }}
                />
              </div>

              {/* Text Content Section */}
              <div className="col-md-6">
                <h2 className="mb-4 text-primary fw-bold">About Us</h2>
                <p className="text-muted">
                  <strong>Connecting Dreams with Opportunities</strong>  
                  Welcome to <span className="text-dark fw-semibold">Job Finder</span>,  
                  where ambition meets opportunity. We are more than just a job search platform—we are your career partner,  
                  dedicated to empowering job seekers and employers alike.
                </p>

                <p className="text-muted">
                  <strong>For Job Seekers:</strong> Discover jobs tailored to your skills and career goals.  
                  We provide tools like resume builders, career guidance, and interview tips to help you stand out.  
                </p>

                <p className="text-muted">
                  <strong>For Employers:</strong> Find top talent effortlessly with our AI-driven matching algorithms.  
                  We connect you with candidates who align with your organization's values and needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
export default About;
