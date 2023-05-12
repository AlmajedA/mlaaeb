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

    createNewCourt(courtInfo, ownerId){

        this.db.run("INSERT INTO Court (name, type, location, price, rate, description, IFcapacity, OFcapacity, bathroom, ownerId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [this.#capitalize(courtInfo.name), courtInfo.type, courtInfo.location, courtInfo.price, 0, courtInfo.description, courtInfo.IFcapacity, courtInfo.OFcapacity, courtInfo.bathroom, ownerId], (err)=> {
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


    #capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }


}

module.exports = Court;
