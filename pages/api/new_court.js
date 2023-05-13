

const Court = require('../../models/court');
const court = new Court();


export default (req, res) => {
    const courtInfo = req.body;
    console.log(courtInfo)
    const ownerId = JSON.parse(req.cookies.user).id;
    court.createNewCourt(courtInfo, ownerId);
    res.redirect('/');

};