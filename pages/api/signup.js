const User = require('../../models/user');

export default (req, res) => {
    const user = new User();
    user.createNewUser(req.body)
    res.send('Signup successful!');
};
