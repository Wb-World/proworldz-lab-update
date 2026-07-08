import React from 'react';

export default function Component() {
  return (
    <>
<div className="row justify-content-center"><div className="col-md-4">
    <div className="card bg-secondary p-4 shadow-lg text-start">
        <h3 className="mb-3">Login</h3>
        <form method="POST">
            <input name="u" className="form-control mb-3" placeholder="Username" />
            <input type="password" name="p" className="form-control mb-3" placeholder="Password" />
            <button className="btn btn-primary w-100">Sign In</button>
        </form>
    </div>
</div></div>
{/* PHP code removed */}

    </>
  );
}
