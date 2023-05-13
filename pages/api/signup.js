const User = require('../../models/user');

export default async (req, res) => {
    const user = new User();
    const userInfo = req.body;
    user.createNewUser(userInfo)
    const userAcc = (await user.getUserAccount(req.body))[0];
    res.json({id: userAcc.id, name: userAcc.name, phone_number: userAcc.telNo, email: userAcc.email, type: userAcc.type});

};
