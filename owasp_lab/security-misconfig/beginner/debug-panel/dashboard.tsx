import React from 'react';

export default function Component() {
  return (
    <>
<div className="row">
    <div className="col-md-12">
        <div className="card shadow p-4">
            <h2 className="fw-bold">Welcome, {/* PHP echo removed */}!</h2>
            <p className="text-muted">Current System Status: <span className="badge bg-success">Production</span></p>
            <hr />
            <p>Your access level is restricted. Only basic analytics are visible.</p>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="p-3 border rounded text-center">
                        <h4 className="fw-bold">124</h4>
                        <small className="text-muted">Active Sessions</small>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 border rounded text-center">
                        <h4 className="fw-bold">99.9%</h4>
                        <small className="text-muted">Uptime</small>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 border rounded text-center">
                        <h4 className="fw-bold">0</h4>
                        <small className="text-muted">Pending Errors</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* PHP code removed */}

    </>
  );
}
