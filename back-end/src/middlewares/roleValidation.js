function roleValidation(req, res, next) {
  const { userData } = res.locals;

  if (userData.role !== 'administrator') {
    const e = new Error('You must be an administrator');
    e.name = 'UnauthorizedError';
    throw e;
  }

  next();
}

module.exports = { roleValidation };
