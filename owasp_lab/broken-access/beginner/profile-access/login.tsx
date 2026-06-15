import React from 'react';

export default function Component() {
  return (
    <>
<div className="row justify-content-center">
    <div className="col-md-4">
        <div className="card p-4">
            <h3 className="text-center mb-4">Login</h3>
            {/* PHP code removed */}<div className="alert alert-danger">{/* PHP echo removed */}</div>{/* PHP code removed */}
            <form method="POST">
                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-dark w-100">Login</button>
            </form>
            <div className="mt-3 text-center text-muted">
                <small>Try: <b>user1 / pass123</b></small>
            </div>
        </div>
    </div>
</div>
{/* PHP code removed */}

    </>
  );
}
