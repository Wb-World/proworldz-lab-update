import React from 'react';

export default function Component() {
  return (
    <>
<div className="row justify-content-center">
    <div className="col-md-8">
        <div className="card p-5 search-box border-0">
            <h3 className="fw-bold mb-4">Internal Employee Directory</h3>
            <p className="text-muted small mb-4">Secure lookup for enterprise personnel across all global intelligence sectors.</p>
            <form action="search" method="GET" className="mb-0">
                <div className="input-group">
                    <input type="text" name="name" className="form-control form-control-lg bg-light" placeholder="Search by name (e.g. John)" required />
                    <button className="btn btn-primary px-5 fw-bold">Query Identity</button>
                </div>
            </form>
            <div className="mt-4 p-3 bg-light rounded text-center x-small text-muted border border-dashed">
                <i className="bi bi-shield-lock me-1"></i> Input validated successfully by Intelligence Gateway
            </div>
        </div>
    </div>
</div>
{/* PHP code removed */}

    </>
  );
}
