// Using sqlite3 for the database
const sqlite3 = require("sqlite3")

const db = new sqlite3.Database('database.db3', (err) => {
    if (err) {
      return console.error(err.message);
    }
});


// Creating tables
db.run('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, name TEXT, phone_number INTEGER UNIQUE, email TEXT UNIQUE, password TEXT)');
db.run('CREATE TABLE IF NOT EXISTS Owner (id INTEGER PRIMARY KEY, name TEXT, phone_number INTEGER UNIQUE, email TEXT UNIQUE, password TEXT)');
db.run('CREATE TABLE IF NOT EXISTS Court (id INTEGER PRIMARY KEY, type TEXT, price INTEGER, rate INTEGER, description TEXT, capacity INTEGER, bathroom INTEGER, ownerId INTEGER, FOREIGN KEY(ownerId) REFERENCES Owner(id))');

// Inserting test values (already inserted)
db.run("INSERT INTO User (name, phone_number, email, password) VALUES ('ammar', '0542463848', 'ammaralmajed7@gmail.com', '123456')");
db.run("INSERT INTO User (name, phone_number, email, password) VALUES ('abdulhamid', '0123456789', 'abdulhamid@gmail.com', '123456')");
db.run("INSERT INTO User (name, phone_number, email, password) VALUES ('ali', '0523456789', 'ali7@gmail.com', '123456')");
db.run("INSERT INTO Owner (name, phone_number, email, password) VALUES ('ali', '0223456789', 'ali@gmail.com', '123456')");
db.run("INSERT INTO Owner (name, phone_number, email, password) VALUES ('taha', '0323456789', 'taha@gmail.com', '123456')");







