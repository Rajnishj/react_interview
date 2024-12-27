import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate()
   const handleClick = () => {
        navigate("/")
    }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={handleClick} className="bg-red-300 p-2 rounded-md">Back to Login</button>
    </div>
  );
};

export default PageNotFound;
