const z = require('zod');

const loginBody = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerBody = loginBody.extend({
  name: z.string(),
});

const authValidate = {
  login(req, _res, next) {
    loginBody.parse(req.body);

    next();
  },

  register(req, _res, next) {
    registerBody.parse(req.body);

    next();
  },
};

module.exports = authValidate;