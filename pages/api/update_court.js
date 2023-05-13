
const Court = require('../../models/court');
const court = new Court();


export default (req, res) => {
    const courtInfo = req.body;
    court.updateCourt(courtInfo);
    res.send('Court has updated successfuly ');
};