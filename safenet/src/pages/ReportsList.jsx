import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../apiconfig";

const ReportsList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
  const loadReports = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/reports`);

      if (!res.ok) {
        setReports([]); // ⬅️ important
        return;
      }

      const data = await res.json();

      // ⬅️ CRITICAL SAFETY CHECK
      if (Array.isArray(data)) {
        setReports(data);
      } else {
        setReports([]);
      }
    } catch (err) {
      console.error(err);
      setReports([]);
    }
  };

  loadReports();
}, []);

return (
  <div className="container mt-4">
    <h3 className="mb-4">Reports</h3>

    <div className="card shadow-sm">
      <div className="card-body">
        <table className="table table-bordered mb-0">
          <thead>
            <tr>
              <th>Type</th>
              <th>City</th>
              <th>Status</th>
              <th>Risk</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reports.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No reports found
                </td>
              </tr>
            ) : (
              reports.map(r => (
                <tr key={r.reportId}>
                  <td>{r.reportType}</td>
                  <td>{r.city}</td>
                  <td>{r.status}</td>
                  <td>{r.riskScore}</td>
                  <td>
                    <Link
                      to={`/report/${r.reportId}`}
                      className="btn btn-sm btn-primary"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

};

export default ReportsList;
