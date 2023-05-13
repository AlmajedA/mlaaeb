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

    deleteCourt(id){
        this.db.run(`DELETE FROM court WHERE id = ?`, [id], function(err) {
            if (err) {
              return console.log(err.message);
            }
            console.log(`the court with id: ${id} has been removed from the database`)
            
          });
    }
 
    updateCourt (courtInfo){
        console.log(courtInfo)
        const query = `UPDATE court SET name = ?, type = ?, location = ?, price = ?, rate = ?, description = ?, IFcapacity = ?, OFcapacity = ?, bathroom = ? WHERE id = ?`;
        
        this.db.run(query, [courtInfo.name, courtInfo.type, courtInfo.location, courtInfo.price, courtInfo.rate, courtInfo.description, courtInfo.IFcapacity, courtInfo.OFcapacity, courtInfo.bathroom, courtInfo.courtId], function(err){
            if (err) {
                return console.log(err.message);
            }
            console.log(`court with Id ${courtInfo.courtId} has been updated successfully`)
        })
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
