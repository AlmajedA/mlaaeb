const User = require('../../models/user');

export default (req, res) => {
    const user = new User();
    const userInfo = req.body;
    user.createNewUser(userInfo)
    res.json({name: userInfo.name, phone_number: userInfo.telNo, email: userInfo.email, type: userInfo.type});

};
