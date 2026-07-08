import React from 'react';

export default function Component() {
  return (
    <>
      <div className='alert alert-info'>Record for ID not found in the local cache.</div>
      <div className='alert alert-warning'>Error: Record ID missing. Check system logs at /var/www/internal/logs/error.log</div>
    </>
  );
}
