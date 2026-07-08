import React from 'react';

export default function Component() {
  return (
    <>
<div className="card p-5 text-center">
    <h2>Internal Records Search</h2>
    <form action="dashboard" method="GET" className="mt-3">
        <input type="text" name="id" className="form-control mb-3" placeholder="Enter Record ID (e.g. 100)" />
        <button className="btn btn-dark w-100">Search</button>
    </form>
</div>
{/* PHP code removed */}

    </>
  );
}
