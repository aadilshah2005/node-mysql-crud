require('dotenv').config();
const mysql = require('mysql2');

// blank DB_NAME ke saath (abhi DB create karenge)
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,         // correct key
    password: process.env.DB_PASSWORD, // correct key
    database: process.env.DB_NAME || undefined // blank DB ke liye undefined
});

// connect
db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed:", err);
        return;
    }
    console.log("✅ Connected to MySQL database");
});

module.exports = db;
