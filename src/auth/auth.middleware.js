const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  try{ 
    const token = req.headers.authorization.split(' ')[1];

    if(!token) throw new Error();

    jwt.verify(token, process.env.SECRET);

    return next();

  } catch(e) {
    return res.json({
      message: 'invalid token'
    });
  }
};

module.exports = { checkToken };