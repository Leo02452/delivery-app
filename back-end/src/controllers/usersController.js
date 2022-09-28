const usersService = require("../services/usersService");

const usersController = {
  async list(req, res) {
    const { r } = req.query;
    const users = await usersService.list(r);

    res.status(200).json(users);
  },
}

module.exports = usersController;
