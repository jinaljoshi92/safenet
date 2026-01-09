import React, { useState } from "react";
import API_BASE_URL from "../apiConfig";
import { useNavigate } from "react-router-dom";

const ReportForm = () => {
  const [form, setForm] = useState({
    victimName: "",
    victimAge: "",
    victimGender: "",
    reportType: "",
    addressLine: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    latitude: "",
    longitude: "",
    description: "",
    reportedDateTime: "",
    isAnonymous: true,
  });

  const navigate = useNavigate();

  const [files, setFiles] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value
    }));
  };

  const handleFileUpload = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${API_BASE_URL}/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        victimAge: form.victimAge ? Number(form.victimAge) : null,
        latitude: form.latitude ? Number(form.latitude) : null,
        longitude: form.longitude ? Number(form.longitude) : null
      })
    });

    if (!response.ok) {
      throw new Error("Failed to submit report");
    }

    const data = await response.json();

    alert(`Report submitted successfully. ReportId: ${data.reportId}`);

    // ✅ THIS IS THE KEY
    navigate("/reports");

  } catch (error) {
    console.error(error);
    alert("Error submitting report");
  }
};


  return (
    <div className="container mt-4">
      <h3 className="mb-4">Submit Human Trafficking Report</h3>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

        <h5>Victim Details</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Victim Name</label>
            <input className="form-control" name="victimName" onChange={handleChange} />
          </div>

          <div className="col-md-3 mb-3">
            <label>Victim Age</label>
            <input type="number" className="form-control" name="victimAge" onChange={handleChange} />
          </div>

          <div className="col-md-3 mb-3">
            <label>Gender</label>
            <select className="form-control" name="victimGender" onChange={handleChange}>
              <option value="">Select</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label>Report Type</label>
          <select className="form-control" name="reportType" required onChange={handleChange}>
            <option value="">Select</option>
            <option value="Sex Trafficking">Sex Trafficking</option>
            <option value="Forced Labour">Forced Labour</option>
            <option value="Child Trafficking">Child Trafficking</option>
            <option value="Missing Person">Missing Person</option>
          </select>
        </div>

        <h5>Location Details</h5>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Address Line</label>
            <input className="form-control" name="addressLine" onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Area / Landmark</label>
            <input className="form-control" name="area" onChange={handleChange} />
          </div>

          <div className="col-md-4 mb-3">
            <label>City</label>
            <input className="form-control" name="city" onChange={handleChange} />
          </div>

          <div className="col-md-4 mb-3">
            <label>State</label>
            <input className="form-control" name="state" onChange={handleChange} />
          </div>

          <div className="col-md-4 mb-3">
            <label>Pincode</label>
            <input className="form-control" name="pincode" onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Latitude</label>
            <input className="form-control" name="latitude" onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Longitude</label>
            <input className="form-control" name="longitude" onChange={handleChange} />
          </div>
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" name="description" rows="4" required onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label>Date & Time of Incident</label>
          <input type="datetime-local" className="form-control" name="reportedDateTime" required onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Evidence</label>
          <input type="file" multiple className="form-control" onChange={handleFileUpload} />
        </div>

        <div className="form-check mb-4">
          <input
            type="checkbox"
            className="form-check-input"
            name="isAnonymous"
            checked={form.isAnonymous}
            onChange={(e) => setForm({ ...form, isAnonymous: e.target.checked })}
          />
          <label className="form-check-label">Submit Anonymously</label>
        </div>

        <button className="btn btn-primary mt-2">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportForm;

