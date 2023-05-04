const sqlite3 = require('sqlite3').verbose();


class User{
    constructor(){
        this.db = new sqlite3.Database('./database.db3', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('connected successfuly')
            
        });
        
    }

    createNewUser(userInfo){

        if (userInfo.user == "User"){
            this.db.run("INSERT INTO User (name, phone_number, email, password) VALUES (?, ?, ?, ?)", [userInfo.name, userInfo.telNo, userInfo.email, userInfo.password], function(err){
            if (err){
                return console.log(err)
            }
            console.log('User added successfuly')
        });
    }
        else{
            this.db.run("INSERT INTO Owner (name, phone_number, email, password) VALUES (?, ?, ?, ?)", [userInfo.name, userInfo.telNo, userInfo.email, userInfo.password], function(err){
                if (err){
                    return console.log(err)
                }
                console.log('Owner add successfuly')
            })
        }
    }

    getUserAccount(userInfo){
        const result = this.getData("SELECT * FROM user WHERE email = ? AND password = ?", [userInfo.email, userInfo.password])
        return result;
    }


    async getData(query, given = []) {
        return new Promise((resolve, reject) => {
            this.db.all(query, given, (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                }
                resolve(rows);
            });
        });
      }


}

module.exports = User;
