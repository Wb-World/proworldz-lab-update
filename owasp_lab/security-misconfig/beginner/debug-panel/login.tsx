import React from 'react';

export default function Component() {
  return (
    <>
<div className="row justify-content-center pt-5">
    <div className="col-md-4">
        <div className="card shadow p-4">
            <h3 className="text-center mb-4 fw-bold">Login</h3>
            {/* PHP code removed */}
                <div className="alert alert-danger">{/* PHP echo removed */}</div>
            {/* PHP code removed */}
            <form method="POST">
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="user1" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="pass123" required />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2">Sign In</button>
            </form>
        </div>
    </div>
</div>
{/* PHP code removed */}

    </>
  );
}
