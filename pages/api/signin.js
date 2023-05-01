const User = require('../../models/user');
const user = new User();

export default async (req, res) => {
  const promise = user.checkUserAccount(req.body);
  let result;
  await promise.then((response) => {
    if (response.length > 0) result = { success: true};
    else result = { success: false};
  });
  res.json(result);
};
