import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Metric Filters</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #fdfdfd; font-family: 'Outfit', sans-serif; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container">
        <h2 className="fw-bold mb-4">Enterprise Metric Filters</h2>
        
        {/* PHP code removed */}
            <div className="alert alert-warning border-0 shadow-sm p-4 rounded-4 mb-4">
                <h6 className="fw-bold text-dark">SECURE OVERRIDE GRANTED</h6>
                <p className="mb-0 small text-danger fw-bold">{/* PHP echo removed */}</p>
            </div>
        {/* PHP code removed */}

        <div className="card border-0 shadow-sm p-4 rounded-4 mb-5">
            <div className="d-flex justify-content-between align-items-center">
                <form method="GET" className="d-flex gap-2">
                    <select name="zone" className="form-select w-auto">
                        <option value="Global" {/* PHP echo removed */}>Global Infrastructure</option>
                        <option value="US-East" {/* PHP echo removed */}>US Sector</option>
                        <option value="EU-West" {/* PHP echo removed */}>EU Sector</option>
                        <option value="ALL" {/* PHP echo removed */}>[MASTER_REVEAL_ALL]</option>
                    </select>
                    <button className="btn btn-dark">Apply Sector Filter</button>
                </form>
                <span className="x-small fw-bold opacity-30">Active Sector: {/* PHP echo removed */}</span>
            </div>
        </div>

        <div className="row g-4">
            {/* PHP code removed */}
            <div className="col-md-4">
                <div className="card p-4 border-0 shadow-sm rounded-4 h-100 text-center">
                    <h1 className="fw-bold mb-1 display-5 text-primary">{/* PHP echo removed */}</h1>
                    <h6 className="text-muted small fw-bold text-uppercase letter-spacing-1">{/* PHP echo removed */}</h6>
                    <hr className="my-4 opacity-5" />
                    <span className="badge bg-light text-dark border p-2 px-3 small">{/* PHP echo removed */}</span>
                </div>
            </div>
            {/* PHP code removed */}
        </div>
    </div>
</div>
</div>

    </>
  );
}
