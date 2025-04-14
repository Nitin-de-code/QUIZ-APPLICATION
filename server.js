/*
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
    host: 'localhost',  // Replace with your DB host if different
    user: 'root',       // Your DB username
    password: '',       // Your DB password
    database: 'quiz_db' // Database name where you want to store scores
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to save the score
app.post('/submit-score', (req, res) => {
    const { score, username } = req.body;

    if (!score || !username) {
        return res.status(400).json({ error: "Username and score are required" });
    }

    // Insert the score and username into the database
    const query = 'INSERT INTO scores (username, score) VALUES (?, ?)';
    db.query(query, [username, score], (err, result) => {
        if (err) {
            console.error('Error saving score:', err.stack);
            return res.status(500).json({ error: 'Failed to save score' });
        }

        res.status(200).json({ message: 'Score saved successfully!' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
*/