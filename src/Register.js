import React from 'react';
import './Login.css'; // Use the same CSS as the login component
import logo from './img/CoffeeByteLogo.png'; // Adjust the path as necessary

function Register() {
  return (
    <div className="app-container">
      <div className="header">
      <img 
          src={logo} 
          alt="CoffeeByte Logo" 
          className="logo" 
          style={{ width: '100px', height: 'auto' }} // Inline style for testing
        />
        <h1>CoffeeByte</h1>
      </div>
      <div className="login-container">
        <div className="login-box">
          <div class="login-title">Register</div>
          <form>
            <div class="login-box-text">Username</div>
            <input type="text" class="login-input" />
            <div class="login-box-text">Email</div>
            <input type="text" class="login-input" />
            <div class="login-box-text">Password</div>
            <input type="password" class="login-input" />
            <div class="login-box-text">Confirm Password</div>
            <input type="password" class="login-input" />
            <button type="submit" class="login-button">Register</button>
          </form>
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
