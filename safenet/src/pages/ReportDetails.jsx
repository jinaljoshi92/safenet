import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../apiconfig";

const ReportDetails = () => {
  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/reports/${id}`)
      .then(res => res.json())
      .then(data => setReport(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!report) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h3>Report Details</h3>

      <div className="card p-4 shadow-sm">
        <h5>Victim Info</h5>
        <p>Name: {report.victimName}</p>
        <p>Age: {report.victimAge}</p>

        <h5 className="mt-3">Location</h5>
        <p>{report.addressLine}</p>
        <p>{report.area}, {report.city}, {report.state}</p>

        <h5 className="mt-3">Description</h5>
        <p>{report.description}</p>

        <h5 className="mt-3">Status</h5>
        <p>{report.status}</p>
      </div>
    </div>
  );
};

export default ReportDetails;
