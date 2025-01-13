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
            Welcome to our company! We are dedicated to providing the best
            solutions for our customers. Our team of professionals works hard to
            deliver innovative products and exceptional service, ensuring your
            success is our priority.
          </p>
          <p className="text-muted">
            From humble beginnings to industry leaders, our journey has been one
            of passion, commitment, and excellence. Join us as we continue to
            build a brighter future together.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
export default About;
