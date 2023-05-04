const User = require('../../models/user');
import { useEffect, useState, useContext} from "react";
const user = new User();

export default async (req, res) => {
  const userAcc = (await user.getUserAccount(req.body))[0];
  
  
  if (userAcc)
    res.json({name: userAcc.name, phone_number: userAcc.phone_number, email: userAcc.email});
  else
    res.json({name: null, phone_number: null, email: null})
};

