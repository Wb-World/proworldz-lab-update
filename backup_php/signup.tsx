import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
  <meta charSet="UTF-8" />
  <title>Sign Up | PROWORLDZ</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{ __html: `
    /* ================= RESET ================= */
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
}

/* ================= THEME VARIABLES ================= */
:root{
  --bg-main:#000000;
  --bg-card:#080808;

  --primary: #ff2a2f;
  --accent: #ff2a2f;

  --text-main:#ffffff;
  --text-muted:#a0a0a0;

  --border:rgba(255,255,255,0.12);
  --shadow:0 20px 50px rgba(0,0,0,.6);

  --gradient:linear-gradient(135deg,#ff2a2f,#ff2a2f);
}

/* ================= BODY ================= */
body{
  background:
    radial-gradient(circle at 20% 20%, rgba(229,25,30,.08), transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(255,42,47,.08), transparent 45%),
    linear-gradient(180deg,#000000,#000000);
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  color:var(--text-main);
}

/* ================= CONTAINER ================= */
.auth-container{
  width:100%;
  max-width:520px;
}

/* ================= CARD ================= */
.auth-box{
  background:linear-gradient(180deg,rgba(8,8,8,.96),rgba(0,0,0,.98));
  padding:42px 40px;
  border-radius:26px;
  border:1px solid var(--border);
  box-shadow:var(--shadow);
  position:relative;
  overflow:hidden;
}

.auth-box::before{
  content:'';
  position:absolute;
  inset:0;
  background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.06),transparent 70%);
  animation:shine 4s infinite;
}

@keyframes shine{
  0%{transform:translateX(-100%)}
  100%{transform:translateX(100%)}
}

/* ================= TITLE ================= */
h2{
  text-align:center;
  font-size:28px;
  font-weight:700;
  margin-bottom:8px;
  background:var(--gradient);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  position:relative;
  z-index:1;
}

p{
  text-align:center;
  color:var(--text-muted);
  font-size:14px;
  margin-bottom:30px;
  position:relative;
  z-index:1;
}

/* ================= INPUT ================= */
.input-group{
  position:relative;
  margin-bottom:24px;
  z-index:1;
}

.input-group input{
  width:100%;
  padding:16px;
  background:rgba(255,255,255,.05);
  border:1px solid var(--border);
  border-radius:14px;
  color:#fff;
  font-size:15px;
  outline:none;
  transition:.3s;
}

.input-group input:focus{
  border-color:var(--primary);
  box-shadow:0 0 0 3px rgba(229,25,30,.25);
}

.input-group label{
  position:absolute;
  top:16px;
  left:16px;
  color:var(--text-muted);
  pointer-events:none;
  transition:.25s;
  background:transparent;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label{
  top:-9px;
  left:12px;
  font-size:12px;
  color:var(--primary);
  background:#080808;
  padding:0 8px;
}

/* ================= GENDER ================= */
.gender-group{
  display:flex;
  gap:14px;
  margin-bottom:26px;
  z-index:1;
}

.gender-option{
  flex:1;
  padding:14px;
  background:rgba(255,255,255,.05);
  border:1px solid var(--border);
  border-radius:14px;
  color:var(--text-muted);
  text-align:center;
  cursor:pointer;
  transition:.3s;
}

.gender-option:hover{
  border-color:var(--primary);
  color:#fff;
}

.gender-option.selected{
  background:rgba(229,25,30,.15);
  border-color:var(--primary);
  color:#fff;
  box-shadow:0 0 18px rgba(229,25,30,.35);
}

/* ================= BUTTON ================= */
button{
  width:100%;
  padding:16px;
  border:none;
  border-radius:16px;
  background:var(--gradient);
  color:#fff;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
  margin-top:10px;
  margin-bottom:22px;
  transition:.3s;
  z-index:1;
  position:relative;
}

button:hover{
  transform:translateY(-3px);
  box-shadow:0 15px 40px rgba(229,25,30,.45);
}

button:disabled{
  opacity:.6;
  cursor:not-allowed;
  transform:none;
}

/* ================= STATUS ================= */
.error{
  color:#ff2a2f;
  font-size:14px;
  margin-top:6px;
  display:none;
}

.success{
  color:#ff2a2f;
  font-size:14px;
  text-align:center;
  display:none;
}

.loading{
  text-align:center;
  color:var(--primary);
  margin:10px 0;
  display:none;
}

/* ================= SWITCH ================= */
.switch{
  display:block;
  text-align:center;
  font-size:14px;
  color:var(--text-muted);
  position:relative;
  z-index:1;
}

.switch a{
  color:var(--primary);
  font-weight:600;
  text-decoration:none;
}

.switch a:hover{
  text-decoration:underline;
}

/* ================= RESPONSIVE ================= */
@media(max-width:768px){
  .auth-box{padding:34px 30px}
  h2{font-size:24px}
  .gender-group{flex-direction:column}
}

@media(max-width:480px){
  .auth-box{padding:28px 22px;border-radius:20px}
  h2{font-size:22px}
  p{font-size:13px}
  button{padding:14px;font-size:15px}
}

@media(max-width:360px){
  .auth-box{padding:22px 18px}
  h2{font-size:20px}
}

    
    /* Responsive Design */
    @media (max-width: 768px) {
      .auth-container {
        max-width: 450px;
      }
      
      .auth-box {
        padding: 30px;
      }
      
      h2 {
        font-size: 24px;
      }
      
      .gender-group {
        flex-direction: column;
        gap: 10px;
      }
    }
    
    @media (max-width: 480px) {
      body {
        padding: 15px;
      }
      
      .auth-container {
        max-width: 100%;
      }
      
      .auth-box {
        padding: 25px 20px;
        border-radius: 15px;
      }
      
      h2 {
        font-size: 22px;
      }
      
      p {
        font-size: 13px;
      }
      
      .input-group input {
        padding: 14px;
        font-size: 15px;
      }
      
      button {
        padding: 14px;
        font-size: 15px;
      }
    }
    
    @media (max-width: 360px) {
      .auth-box {
        padding: 20px 15px;
      }
      
      h2 {
        font-size: 20px;
      }
      
      .input-group input {
        padding: 12px;
      }
      
      button {
        padding: 12px;
      }
    }
` }} />
<link rel="stylesheet" href="app-theme-overrides.css?v=20260518" />
</div>
<div className="body-wrapper">

<div className="auth-container">
  <div className="auth-box">
    <h2>Create Your Account</h2>
    <p>Join PROWORLDZ and start your tech journey</p>

    <form id="signupForm">
      <div className="input-group">
        <input type="text" id="student-name" name="student-name" required placeholder=" " />
        <label htmlFor="student-name">Full Name</label>
        <div className="error" id="nameError">Please enter your full name</div>
      </div>

      <div className="input-group">
        <input type="email" id="email" name="email" required placeholder=" " />
        <label htmlFor="email">Email Address</label>
        <div className="error" id="emailError">Please enter a valid email</div>
      </div>

      <div className="gender-group">
        <div className="gender-option" data-value="male">Male</div>
        <div className="gender-option" data-value="female">Female</div>
        <div className="gender-option" data-value="other">Other</div>
      </div>
      <input type="hidden" id="gender" name="gender" />

      <div className="input-group">
        <input type="tel" id="phone" name="phone" required placeholder=" " />
        <label htmlFor="phone">Mobile Number</label>
        <div className="error" id="phoneError">Please enter a valid phone number</div>
      </div>

      <div className="input-group">
        <input type="password" id="passw" name="passw" required placeholder=" " />
        <label htmlFor="passw">Password</label>
        <div className="error" id="passwError">Password must be at least 8 characters</div>
      </div>

      <div className="input-group">
        <input type="password" id="confirm-passw" name="confirm-passw" required placeholder=" " />
        <label htmlFor="confirm-passw">Confirm Password</label>
        <div className="error" id="confirmError">Passwords do not match</div>
      </div>

      <div className="error" id="formError"></div>
      <div className="success" id="formSuccess"></div>
      <div className="loading" id="loading">Creating account...</div>

      <button type="submit" id="submitBtn">Create Account</button>

      <span className="switch">
        Already have an account?
        <a href="login">Login</a>
      </span>
    </form>
  </div>
</div>
{/* Script tags removed */}
</div>
</div>
    </>
  );
}
