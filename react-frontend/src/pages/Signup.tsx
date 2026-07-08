import './Signup.css';

export default function Signup() {
    return (
        <div className="signup-wrapper">
            

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
        <a href="/login">Login</a>
      </span>
    </form>
  </div>
</div>


        </div>
    );
}
