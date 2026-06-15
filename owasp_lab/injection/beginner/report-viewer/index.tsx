import React from 'react';

export default function Component() {
  return (
    <>
<div className="row pt-5">
    <div className="col-md-3">
        <div className="list-group shadow-sm border-0 rounded-4 overflow-hidden">
            <a href="?dept=Finance" className="list-group-item list-group-item-action {/* PHP echo removed */}">Finance Results</a>
            <a href="?dept=HR" className="list-group-item list-group-item-action {/* PHP echo removed */}">Identity (HR)</a>
            <a href="?dept=Operations" className="list-group-item list-group-item-action {/* PHP echo removed */}">Ops Data</a>
        </div>
        <div className="mt-4 p-3 bg-white rounded border small opacity-75">
            <h6 className="fw-bold x-small opacity-50 mb-2">SECURE LOG</h6>
            <code className="x-small text-dark text-break">ID: {/* PHP echo removed */}</code>
        </div>
    </div>
    <div className="col-md-9">
        <h3 className="fw-bold mb-4">Enterprise Analytics Reports</h3>
        <div className="row g-4">
            {/* PHP code removed */}
            <div className="col-md-6">
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
                    <h5 className="fw-bold mb-2">{/* PHP echo removed */}</h5>
                    <p className="small text-muted mb-3">Sector: <span className="badge bg-light text-dark border">{/* PHP echo removed */}</span></p>
                    <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-3">
                        <span className="x-small fw-bold text-uppercase opacity-50">Security: {/* PHP echo removed */}</span>
                        <a href="view?id={/* PHP echo removed */}" className="btn btn-sm btn-dark px-3">Open Data</a>
                    </div>
                </div>
            </div>
            {/* PHP code removed */}
        </div>
    </div>
</div>
{/* PHP code removed */}

    </>
  );
}
