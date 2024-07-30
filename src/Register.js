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
          <h2>Register</h2>
          <form>
            <h3>Username</h3>
            <input type="text" className="login-input" />
            <h3>Email</h3>
            <input type="text" className="login-input" />
            <h3>Password</h3>
            <input type="password" className="login-input" />
            <h3>Confirm Password</h3>
            <input type="password" className="login-input" />
            <button type="submit" className="login-button">Register</button>
          </form>
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
