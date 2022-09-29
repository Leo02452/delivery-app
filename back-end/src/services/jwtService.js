require('dotenv/config');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKey = fs.readFileSync('jwt.evaluation.key', 'utf8');

const jwtService = {
  createToken: (user) => {
    if (user === null) return null;

    const token = jwt.sign(user, privateKey);
    return token;
  },

  validateToken: (token) => {
    try {
      const userData = jwt.verify(token, privateKey);
      return userData;
    } catch (error) {
      const e = new Error('Invalid token');
      e.name = 'UnauthorizedError';
      throw e;
    }
  },
};

module.exports = jwtService;