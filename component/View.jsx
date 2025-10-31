// src/components/Dashboard.jsx
import React from "react";
import { useAuth } from "../context/context";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  
  const handleClick = () => {
    navigate(`/update/${user.id}`);
  };
  return (
    <div className="container mt-5">
      <h2>Welcome {user?.name || "Guest"}!</h2>
      <p>Email: {user?.email}</p>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </button>
      <button className="btn btn-primary mt-3 ms-3"  onClick={handleClick} >
        Edite
      </button>
    </div>

  );
}

export default Dashboard;
