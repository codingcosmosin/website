import React from "react";
import ccLogo from '../assets/ccLogo.png';
import '../App.css';

function Home() {
  return (
    <div className="container text-center py-5">
      {/* Logo with hover effects */}
      <img 
        src={ccLogo} 
        className="logo img-fluid mb-4" 
        alt="Coding Cosmos Logo" 
        style={{ maxWidth: "250px", cursor: "pointer" }}
      />

      {/* Title */}
      <h1 className="mb-4">Coding Cosmos</h1>

      {/* Coming Soon Card */}
      <div className="card shadow-sm mx-auto mb-4" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <p className="card-text">
            Coming Soon: Your ultimate resource for mastering code and technology.
          </p>
          {/* <button 
            className="btn btn-primary mt-3"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdI4Yw6LOW8SqJ-4tNzVkMmUDHpSDZYKt2fvT1sVUujKsCN2w/viewform?usp=header", "_blank")}
          >
            Register
          </button> */}
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-muted">
        We're building something amazing! Get ready for a new way to learn technical skills.
      </p>
    </div>
  );
}

export default Home;
