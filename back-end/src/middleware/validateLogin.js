const z = require('zod');

const loginBody = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const authValidate = {
  login(req, _res, next) {
    loginBody.parse(req.body);

    next();
  },
};

module.exports = authValidate;