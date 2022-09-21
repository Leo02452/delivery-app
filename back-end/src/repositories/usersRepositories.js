const db = require('../database/models');

const userRepository = {
  async findByEmail(email) {
    const user = await db.User.findOne({ where: { email }, raw: true });
    return user;
  },
};

module.exports = userRepository;