

const Court = require('../../models/court');
const court = new Court();


export default (req, res) => {
    const courtId = req.body;
    court.deleteCourt(courtId)
    res.send(`the court with id: ${courtId} has been removed from the database`);

};