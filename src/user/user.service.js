const bcrypt = require('bcrypt');
const User = require('../database/user.model');


const createUser = async ({
  nickName,
  balance, 
  email,
  password,
}) => { 
  const user = await User.findOne({
    where: {
      email,
    }
  });

  if(user) return new Error('User Already Exist');

  const hashedPassword = bcrypt.hashSync(password, Number(process.env.SALT_AMOUNT));

  const createdUser = await User.create({
    nickName,
    balance,
    email,
    password: hashedPassword
  });

  return !!createdUser;
};


module.exports = {
  createUser, 
};