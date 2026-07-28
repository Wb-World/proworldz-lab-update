import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" />
<title>Course Details</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="course-details.css" />
<link rel="stylesheet" href="app-theme-overrides.css?v=20260518" />
</div>
<div className="body-wrapper">

<section className="hero">
  <div className="hero-left">
    <h1 id="title"></h1>
    <p id="heroText"></p>
    <button className="enroll-btn">Enroll Now</button>
    <div className="meta">
      <span id="duration"></span>
      <span id="price"></span>
    </div>
  </div>

  <div className="hero-right">
    <img id="heroImg" alt="dwwkdh" loading="lazy" /> 
  </div>
</section>

<section>
  <h2>Things You Master</h2>
  <div id="master"></div>
</section>

<section>
  <h2>Topics Covered</h2>
  <ul id="topics"></ul>
</section>

<section>
  <h2>Benefits</h2>
  <div id="benefits"></div>
</section>

<section>
  <h2>Mentor</h2>
  <h3 id="mentorName"></h3>
  <p id="mentorDesc"></p>
</section>

{/* Script tags removed */}
{/* Script tags removed */}

</div>
</div>

    </>
  );
}
