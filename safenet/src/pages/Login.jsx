import React, { useState } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../apiConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!res.ok) {
      alert("Invalid login");
      return;
    }

    const user = await res.json();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Login successful");
     navigate("/reports");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Login</h3>

      <form onSubmit={submit} className="card p-4 shadow">
        <input className="form-control mb-3" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />

        <input type="password" className="form-control mb-3" placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })} />

        <button className="btn btn-primary w-100">Login</button>
      </form>

      {/* ✅ Register navigation */}
      <div className="text-center mt-3">
        <span>Don’t have an account? </span>
        <Link to="/register">Register here</Link>
      </div>
    </div>
  );
};

export default Login;
