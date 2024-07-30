import React from 'react';
import './UserManagement.css';
import logo from './img/CoffeeByteLogo.png'; // Adjust the path as necessary

function UserManagement() {
  return (
    <div className="user-management-container">
      <aside className="sidebar">
        <h1>CoffeeByte</h1>
        <div className="management-title">Management</div>
        <nav>
          <ul>
            <li className="active">User</li>
            <li>Content</li>
            <li>Activity</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
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
          <h2>User Management</h2>
          <div className="search-add">
            <input type="text" placeholder="Search here..." className="search-input" />
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
              {/* Sample Data */}
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
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default UserManagement;
