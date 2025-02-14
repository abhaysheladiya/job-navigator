import React from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const [goToApply, setGoToApply]=React.useState(false);
  if(goToApply){
    return <Navigate to="/applyjob"/>;
  }

  return (
    <>
      <h2>Find jobs</h2>

      <div className="card text-center" style={{ width: "96rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title">Blockchain</h5>
          <p className="card-text">
            Hiring blockchain developer.
            You can findout all the openings of blockchain developer just cliking the button
          </p>
          <button onClick={()=>{
            setGoToApply(true);
          }} className="btn btn-primary">
            {" "}
            Apply
          </button>
        </div>

        <div className="card-body text-center">
          <h5 className="card-title">Cybersqure</h5>
          <p className="card-text">
            Hiring individuals expert in cyber-security developer.
            more than five month of experience.You can findout all the openings of cybersecurity developer just cliking the button
          </p>
          <button onClick={()=>{
            setGoToApply(true);
          }} className="btn btn-primary">
            {" "}
            Apply
          </button>
        </div>

        <div className="card-body text-center">
          <h5 className="card-title">Backend</h5>
          <p className="card-text">
            Hiring backend developer.
            You can findout all the openings of backend developer just cliking the button
          </p>
          <button onClick={()=>{
            setGoToApply(true);
          }} className="btn btn-primary">
            {" "}
            Apply
          </button>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Frontend</h5>
          <p className="card-text">
            Hiring Frontend developer.
            You can findout all the openings of Frontend developer just cliking the button
          </p>
          <button onClick={()=>{
            setGoToApply(true);
          }} className="btn btn-primary">
            {" "}
            Apply
          </button>
        </div>
      </div>



    </>
  );
}

export default Home;


