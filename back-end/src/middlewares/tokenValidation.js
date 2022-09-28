const jwtService = require('../services/jwtService');

function tokenValidation(req, res, next) {
  const { authorization } = req.headers;
  const userData = jwtService.validateToken(authorization);

  res.locals.userData = userData;

  next();
}

module.exports = { tokenValidation };
