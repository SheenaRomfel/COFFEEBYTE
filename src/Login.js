import React from 'react';
import './Login.css';
import logo from './img/Coffee Leaf Scanner Logo 2 1.png'; // Adjust the path as necessary

function Login() {
  return (
    <div className="app-container">
      <div className="header">
        <img src={logo} alt="CoffeeByte Logo" className="logo" />
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
          <p>Don't have an account? <a href="#register">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
