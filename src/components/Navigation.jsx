import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-lg"
      style={{ background: "linear-gradient(90deg, #007bff, #6f42c1)" }}
    >
      <div className="container">
      
        <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
          JOB-Navigator
        </Link>

      
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold hover-effect" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold hover-effect" to="/registration">
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold hover-effect" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold hover-effect" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      
      <style>
        {`
          .hover-effect {
            transition: all 0.3s ease-in-out;
          }
          .hover-effect:hover {
            color: #f8d210 !important;
            transform: scale(1.1);
          }
          @media (max-width: 992px) {
            .navbar-collapse {
              background: rgba(0, 0, 0, 0.8);
              position: absolute;
              top: 56px;
              left: 0;
              width: 100%;
              padding: 10px;
            }
          }
        `}
      </style>
    </nav>
    </>
  );
}
export default Navigation;
