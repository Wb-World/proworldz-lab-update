import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora IAM | Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</div>
<div className="body-wrapper">
    <div className="container">
        <div className="card border-0 shadow-sm p-5 rounded-5 bg-white">
            <h2 className="fw-bold mb-4">Enterprise Access Overview</h2>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="p-4 bg-primary text-white rounded-4">
                        <h6 className="fw-bold mb-1 opacity-75">IDENTITY</h6>
                        <h4>{/* PHP echo removed */}</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 bg-dark text-white rounded-4">
                        <h6 className="fw-bold mb-1 opacity-75">ROLE</h6>
                        <h4>{/* PHP echo removed */}</h4>
                    </div>
                </div>
            </div>
            
            {/* PHP code removed */}
                <div className="mt-5 p-4 border border-warning bg-warning bg-opacity-10 rounded-4">
                    <h5 className="fw-bold text-dark">SECURE FLAG REVEALED</h5>
                    <p className="mb-0 text-danger fw-bold">FLAG: {/* PHP echo removed */}</p>
                </div>
            {/* PHP code removed */}

            <hr className="my-5" />
            <a href="logout" className="btn btn-outline-dark">Terminate Session</a>
        </div>
    </div>
</div>
</div>

    </>
  );
}
