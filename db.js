// Using sqlite3 for the database
const sqlite3 = require("sqlite3")

const db = new sqlite3.Database('database.db3', (err) => {
    if (err) {
      return console.error(err.message);
    }
});


// Creating tables
db.run('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, name TEXT, phone_number INTEGER UNIQUE, email TEXT UNIQUE, password TEXT, type TEXT)');
db.run('CREATE TABLE IF NOT EXISTS Court (id INTEGER PRIMARY KEY, name TEXT, type TEXT, location TEXT,price INTEGER, rate INTEGER, description TEXT, IFcapacity INTEGER, OFcapacity, bathroom INTEGER, ownerId INTEGER, FOREIGN KEY(ownerId) REFERENCES User(id) ON DELETE SET NULL, FOREIGN KEY(ownerId, type) REFERENCES User(id, type) ON DELETE SET NULL)');



module.exports = db;


