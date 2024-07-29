const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'CoffeeByte',
  password: 'PasswordniCoffeeByte',
  database: 'CoffeeByteDB'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Define routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Implement your SQL query here
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Implement your SQL query here
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, password], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
