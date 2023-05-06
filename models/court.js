const sqlite3 = require('sqlite3').verbose();


class Court{
    constructor(){
        this.db = new sqlite3.Database('./database.db3', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('connected successfuly')
            
        });
        
    }

    createNewCourt(courtInfo){

        
            this.db.run("INSERT INTO User (name, id, price, rate, ownerId) VALUES (?, ?, ?, ?, ?)", [courtInfo.name, courtInfo.id, courtInfo.price, courtInfo.rate, courtInfo.ownerId], (err)=> {
            if (err){
                return console.log(err)
            }
            console.log('Court added successfuly');
        
    
        });
    }

    getAllCourts(){
        const result = this.getData("SELECT * FROM Court");
        return result;
    }

    getCourt(id){
        const result = this.getData("SELECT * FROM Court WHERE id = ?", [id]);
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

module.exports = Court;
