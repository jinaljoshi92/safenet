import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-100">
      {/* Header */}
      <nav className="navbar navbar-dark bg-dark w-100">
        <div className="container-fluid px-3">
          <span className="navbar-brand">SafeNet</span>

          <div className="d-flex align-items-center">
            <span className="text-white me-3">{user.fullName}</span>
            <button className="btn btn-sm btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Body */}
      <div className="d-flex w-100">
        {/* Sidebar */}
        <div
          className="bg-light p-3"
          style={{ width: "220px", minHeight: "100vh" }}
        >
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link className="nav-link" to="/reports">Reports</Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="/submit-report">Submit Report</Link>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-grow-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
