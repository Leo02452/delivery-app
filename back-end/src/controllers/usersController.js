const usersService = require('../services/usersService');

const usersController = {
  async login(req, res) {
    const user = await usersService.login(req.body);

    res.status(200).json(user);
  },
};

module.exports = usersController;
