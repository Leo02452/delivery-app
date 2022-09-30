const usersService = require('../services/usersService');

const usersController = {
  async list(req, res) {
    const { r } = req.query;
    const users = await usersService.list(r);

    res.status(200).json(users);
  },

  async findByPk(req, res) {
    const { id } = req.params;
    const user = await usersService.findByPk(id);

    res.status(200).json(user);
  },
};

module.exports = usersController;
