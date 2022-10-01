const { z } = require('zod');

const createUserBody = z.object({
  name: z.string().max(12),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['administrator', 'customer', 'seller']),
});

function userValidation(req, _res, next) {
    createUserBody.parse(req.body);

    next();
}

module.exports = { userValidation };
