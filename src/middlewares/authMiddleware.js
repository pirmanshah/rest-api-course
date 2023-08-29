const { verify } = require('jsonwebtoken');
const AppError = require('@utils/AppError');

const authMiddleware = (request, response, next) => {
  try {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let decoded = verify(token, process.env.SECRET);
    request.user = decoded;
    next();
  } catch (error) {
    next(new AppError('Missing authentication', 401));
  }
};

module.exports = authMiddleware;
