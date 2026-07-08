import React from 'react';

export default function Component() {
  return (
    <>
<div className="card p-4 border-danger shadow">
    <h3 className="text-danger">LEGACY ADMIN PANEL</h3>
    <hr />
    <div className="alert alert-warning">
        <strong>Warning:</strong> This panel is pending deletion. Please migrate all data to the new dashboard immediately.
    </div>
    
    <h5>System Flag Retrieval:</h5>
    <div className="bg-dark text-white p-3 rounded mt-2">
        <code>SYSTEM_FLAG: {/* PHP echo removed */}</code>
    </div>

    <div className="mt-4">
        <a href="dashboard" className="btn btn-outline-danger btn-sm">Return to Main Portal</a>
    </div>
</div>
{/* PHP code removed */}

    </>
  );
}
