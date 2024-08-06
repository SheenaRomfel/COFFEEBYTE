// src/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // You can have separate CSS for the sidebar

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>CoffeeByte</h1>
      <div className="management-title">Management</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/user-management/user" className={({ isActive }) => isActive ? "active" : ""}>User</NavLink>
          </li>
          <li>
            <NavLink to="/user-management/content" className={({ isActive }) => isActive ? "active" : ""}>Content</NavLink>
          </li>
          <li>
            <NavLink to="/user-management/activity" className={({ isActive }) => isActive ? "active" : ""}>Activity</NavLink>
          </li>
          <li>
            <NavLink to="/user-management/settings" className={({ isActive }) => isActive ? "active" : ""}>Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
