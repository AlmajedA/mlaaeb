const User = require('../../models/user');
const user = new User();

export default async (req, res) => {
  const userAcc = (await user.getUserAccount(req.body))[0];

  
  
  if (userAcc)
    res.json({id:userAcc.id, name: userAcc.name, phone_number: userAcc.phone_number, email: userAcc.email, type: userAcc.type});
  else
    res.json({name: null})
};

