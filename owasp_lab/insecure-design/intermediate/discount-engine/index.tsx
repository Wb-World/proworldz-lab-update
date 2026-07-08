import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Billing & Discounts</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #fdfdfd; font-family: 'Segoe UI', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '600px' }}>
        <div className="card border-0 shadow-lg p-5 rounded-5 mt-5">
            <h2 className="fw-bold mb-4">Enterprise Checkout</h2>
            {/* PHP echo removed */}
            <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Software Subscription (Annual)</span>
                <span className="fw-bold text-dark">${/* PHP echo removed */}.00</span>
            </div>
            <div className="d-flex justify-content-between text-success mb-4 pb-4 border-bottom">
                <span>Enterprise Discount ({/* PHP echo removed */}%)</span>
                <span>-${/* PHP echo removed */}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold m-0">Total Due</h4>
                <h3 className="fw-bold m-0 text-primary">${/* PHP echo removed */}</h3>
            </div>
            <button className="btn btn-dark w-100 py-3 mt-5 fw-bold rounded shadow">Finalize Transaction</button>
        </div>
        
        <div className="mt-4 p-4 text-center small text-muted">
            Internal Note: High-volume partners can apply discounts via the <code>rate</code> parameter in the partner URL.
        </div>
    </div>
</div>
</div>

    </>
  );
}
