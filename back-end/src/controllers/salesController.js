const salesService = require('../services/salesService');

const salesController = {
  async create(req, res) {
    const requestUser = res.locals.userData;

    const salesId = await salesService.create(req.body, requestUser.id);

    res.status(201).json(salesId);
  },
};

module.exports = salesController;
