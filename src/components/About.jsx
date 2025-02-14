import React from "react";

function About() {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 ">
            <img
              src="src/components/Images/pexels-pixabay-269077.jpg"
              className="img-fluid rounded"
              alt="About Us"
            />
          </div>

          {/* Text Content Section */}
          <div className="col-md-6">
            <h2 className="mb-4">About Us </h2>
            <p className="text-muted">
              Connecting Dreams with Opportunities Welcome to Job finder, where
              ambition meets opportunity. We are more than just a job search
              platform—we are your career partner, dedicated to empowering job
              seekers and employers alike. Our mission is simple: to bridge the
              gap between talented individuals and organizations searching for
              their perfect match. With cutting-edge technology, a user-friendly
              interface, and a commitment to excellence, we aim to make your job
              search journey seamless, personalized, and rewarding.
            </p>
            <p className="text-muted">
              For Job Seekers: Discover job opportunities tailored to your
              skills, preferences, and goals. Whether you're an experienced
              professional or just starting, we provide tools like resume
              builders, career guidance, and interview preparation tips to help
              you stand out. For Employers: Find top talent effortlessly with
              our advanced AI-driven matching algorithms. We simplify your
              hiring process by connecting you with candidates who align with
              your organization's values and needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
