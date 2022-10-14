const usersService = require('../services/usersService');

const usersController = {
  async list(req, res) {
    const { r } = req.query;
    const users = await usersService.list(r);

    res.status(200).json(users);
  },

  async create(req, res) {
    const createdUser = await usersService.create(req.body);

    res.status(201).json(createdUser);
  },

  async delete(req, res) {
    const { id } = req.params;

    await usersService.delete(id);

    res.sendStatus(204);
  },
};

module.exports = usersController;
