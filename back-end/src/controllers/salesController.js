const salesService = require('../services/salesService');

const salesController = {
  async create(req, res) {
    const requestUser = res.locals.userData;

    const salesId = await salesService.create(req.body, requestUser.id);

    res.status(201).json(salesId);
  },
  async detailsList(req, res) {
    const { userId } = req.query;

    const salesList = await salesService.detailsList(userId);

    res.status(200).json(salesList);
  }
};

module.exports = salesController;
