

const Court = require('../../models/court');
const court = new Court();


export default (req, res) => {
    const courtInfo = req.body;
    const ownerId = JSON.parse(req.cookies.user).id;
    court.createNewCourt(courtInfo, ownerId);
    console.log()
    res.redirect('/');

};