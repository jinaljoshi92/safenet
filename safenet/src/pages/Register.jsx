import React, { useState } from "react";
import API_BASE_URL from "../apiConfig";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "NGO",
    contactNumber: ""
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const payload = {
      fullName: form.fullName,
      email: form.email,
      password: form.password,
      role: form.role,
      contactNumber: form.contactNumber
    };

    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert("Registration successful");
      navigate("/");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Register</h3>

      <form onSubmit={submit} className="card p-4 shadow">

      <input className="form-control mb-3" placeholder="Full Name"
        onChange={e => setForm({ ...form, fullName: e.target.value })} />

      <input className="form-control mb-3" placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input className="form-control mb-3" placeholder="Contact Number"
        onChange={e => setForm({ ...form, contactNumber: e.target.value })} />

      <input type="password" className="form-control mb-3" placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })} />

      <input type="password" className="form-control mb-3" placeholder="Confirm Password"
        onChange={e => setForm({ ...form, confirmPassword: e.target.value })} />

      <select className="form-control mb-3"
        onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="NGO">NGO</option>
        <option value="Police">Police</option>
      </select>

      <button className="btn btn-primary w-100">Register</button>
    </form>

    </div>
  );
};

export default Register;
