const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/usermodel');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // try token from header
      token = req.headers.authorization.split(' ')[1];

      // verification
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // Get User From the Token
      req.user = await User.findById(decode.id).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not Authorized');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, no Token');
  }
});

module.exports = protect ;