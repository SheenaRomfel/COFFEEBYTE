import React from 'react';
import './Login.css';
import logo from './img/CoffeeByteLogo.png'; // Adjust the path as necessary

function Login() {
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
          <h2>Login</h2>
          <form>
            <h3>Email or Username</h3>
            <input type="text" className="login-input" />
            <h3>Password</h3>
            <input type="password" className="login-input" />
            <button type="submit" className="login-button">Login</button>
          </form>
          <p>Don't have an account? <a href="/Register">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
