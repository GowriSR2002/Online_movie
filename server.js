// server.js
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5501;

// MySQL database connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'movie_db',
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// ... (rest of the code remains unchanged)

// Express route to fetch theatres
app.get('/theatres', (req, res) => {
    db.query('SELECT * FROM theatres', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(rows);
    });
});

// Express route to fetch movies based on theatreId
app.get('/movies/:theatreId', (req, res) => {
    const theatreId = req.params.theatreId;
    db.query('SELECT * FROM movies WHERE theatreId = ?', [theatreId], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(rows);
    });
});

// Express route to fetch dates based on movieId
app.get('/dates/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    db.query('SELECT DISTINCT date FROM showtimes WHERE movieId = ?', [movieId], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(rows.map(row => row.date));
    });
});

// Express route to fetch showtimes based on date
app.get('/showtimes/:date/:movieId', (req, res) => {
    const date = req.params.date;
    const movieId = req.params.movieId;
    db.query('SELECT * FROM showtimes WHERE date = ? AND movieId = ?', [date, movieId], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(rows);
    });
});

// Express route to fetch hall information based on showtimeId
/*app.get('/hall/:showtimeId', (req, res) => {
    const showtimeId = req.params.showtimeId;
    db.query('SELECT * FROM halls WHERE showtimeId = ?', [showtimeId], (err, row) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(row);
    });
});
*/
// Express route to fetch movies based on theatreId
app.get('/movies/:theatreId', (req, res) => {
    const theatreId = req.params.theatreId;
    db.query('SELECT * FROM movies WHERE theatreId = ?', [theatreId], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(rows);
    });
});
// Express route to fetch dates based on movieId and theatreId
app.get('/dates/:theatreId/:movieId', (req, res) => {
    const theatreId = req.params.theatreId;
    const movieId = req.params.movieId;
    db.query('SELECT DISTINCT date FROM showtimes WHERE movieId = ? AND theatreId = ?', [movieId, theatreId], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(rows.map(row => row.date));
    });
});

// Express route to fetch showtimes based on date, movieId, and theatreId
app.get('/showtimes/:theatreId/:date/:movieId', (req, res) => {
    const theatreId = req.params.theatreId;
    const date = req.params.date;
    const movieId = req.params.movieId;
    db.query('SELECT * FROM showtimes WHERE date = ? AND movieId = ? AND theatreId = ?', [date, movieId, theatreId], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(rows);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
