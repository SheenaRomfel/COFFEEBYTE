import React from 'react';
import './Login.css';
import logo from './img/CoffeeByteLogo.png'; // Adjust the path as necessary

function Login() {
  return (
    <div class="app-container">
      <div className="header">
        <img 
          src={logo} 
          alt="CoffeeByte Logo" 
          class="logo"
          style={{ width: '100px', height: 'auto' }} // Inline style for testing
        />
        <h1>CoffeeByte</h1>
      </div>

      {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="CoffeeByte Logo"
          src={logo}
          className="ml-auto h-20 w-auto"
        />
        <h2 className="my-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          CoffeeByte
        </h2>
      </div> */}

      <div class="login-container">
        <div class="login-box">
          <div class="login-title">Login</div>
          <form>
            <div class="login-box-text">Email or Username</div>
            <input type="text" class="login-input" />
            <div class="login-box-text">Password</div>
            <input type="password" class="login-input" />
            <button type="submit" class="login-button"><a href="/Settings">Login</a></button>
          </form>
          <p>Don't have an account? <a href="/Register">Register</a></p>
        </div>
      </div>
      

    </div>
  );
}

export default Login;
