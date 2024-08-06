import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserManagement from './UserManagement'; // Import the UserManagement component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-management/*" element={<UserManagement />} /> {/* Note the wildcard for nested routes */}
      </Routes>
    </Router>
  );
}

export default App;
