// Using sqlite3 for the database
const sqlite3 = require("sqlite3")

const db = new sqlite3.Database('database.db3', (err) => {
    if (err) {
      return console.error(err.message);
    }
});


// Creating tables
// db.run('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, name TEXT, phone_number INTEGER UNIQUE, email TEXT UNIQUE, password TEXT, type TEXT)');

// db.run('CREATE TABLE IF NOT EXISTS Court (id INTEGER PRIMARY KEY, name TEXT, type TEXT, price INTEGER, rate INTEGER, description TEXT, capacity INTEGER, bathroom INTEGER, ownerId INTEGER, FOREIGN KEY(ownerId) REFERENCES User(id) ON DELETE SET NULL, FOREIGN KEY(ownerId, type) REFERENCES User(id, type) ON DELETE SET NULL, CONSTRAINT owner_only CHECK (type = "owner" AND ownerId IS NOT NULL))');

// Inserting test values (already inserted)
// db.run("INSERT INTO User (name, phone_number, email, password, type) VALUES ('ammar', '0542463848', 'ammaralmajed7@gmail.com', 'Aa3456', 'user')");
// db.run("INSERT INTO User (name, phone_number, email, password, type) VALUES ('abdulhamid', '0123456789', 'abdulhamid@gmail.com', 'Aa3456', 'user')");
// db.run("INSERT INTO User (name, phone_number, email, password, type) VALUES ('ali', '0523456789', 'ali7@gmail.com', 'Aa3456', 'owner')");


// db.run("INSERT INTO Court (id, name, price, rate, ownerId) VALUES ('1', 'KFUPM', '150', '3', '1')");
db.run("INSERT INTO Court (id, name, price, rate, ownerId) VALUES ('2', 'Jawhara', '5000', '4', '1')");
db.run("INSERT INTO Court (id, name, price, rate, ownerId) VALUES ('3', 'ROYAL', '120', '4', '1')");
db.run("INSERT INTO Court (id, name, price, rate, ownerId) VALUES ('4', 'Best One Ever', '260', '5', '1')");




module.exports = db;


