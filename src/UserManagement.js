import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import './UserManagement.css';
import logo from './img/CoffeeByteLogo.png';

// Placeholder components for each page
function User() {
  return (
    <div>
      <div className="search-add">
        <input type="text" className="search-input" placeholder="Search here..." />
        <button className="add-user-button">Add User</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Create Date</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maria Anit</td>
            <td>maria@gmail.com</td>
            <td>06-05-24</td>
            <td>Member</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Mark Gipantos</td>
            <td>mark12@yahoo.com</td>
            <td>06-05-24</td>
            <td>Member</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Marlon Domingo</td>
            <td>marlod@gmail.com</td>
            <td>06-05-24</td>
            <td>Admin</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

function Content() {
  return <div>Content Management Page</div>;
}

function Activity() {
  return <div>Activity Management Page</div>;
}

function Settings() {
  return <div>Settings Management Page</div>;
}

function UserManagement() {
  return (
    <div className="user-management-container">
      <Sidebar />
      <main className="main-content">
        <header>
          <div className="logo-welcome-container">
            <img src={logo} alt="CoffeeByte Logo" className="logo" />
            <div className="welcome-message">
              <h2>Hello, Jose!</h2>
              <p>CoffeeByte is here to help you.</p>
            </div>
          </div>
          <div className="user-info">
            <span>Jose Anit</span>
            <span>Admin</span>
          </div>
        </header>
        <section className="user-management">
          <Routes>
            <Route path="user" element={<User />} />
            <Route path="content" element={<Content />} />
            <Route path="activity" element={<Activity />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default UserManagement;
