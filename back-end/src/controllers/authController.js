const usersService = require('../services/authService');

const authController = {
  async login(req, res) {
    const user = await usersService.login(req.body);

    res.status(200).json(user);
  },

  async register(req, res) {
    const createdUser = await usersService.register(req.body);

    res.status(201).json(createdUser);
  },
};

module.exports = authController;
