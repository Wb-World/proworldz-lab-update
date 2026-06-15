import React from 'react';

export default function Component() {
  return (
    <>
<div className="row justify-content-center"><div className="col-md-4 card p-4"><h3>Login</h3><form method="POST">
<div className="mb-3"><label>Username</label><input type="text" name="username" className="form-control" /></div>
<div className="mb-3"><label>Password</label><input type="password" name="password" className="form-control" /></div>
<button className="btn btn-primary w-100">Login</button></form><p className="mt-2 text-muted">user1 / pass123</p></div></div>
{/* PHP code removed */}

    </>
  );
}
