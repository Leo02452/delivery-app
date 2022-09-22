const db = require('../database/models');

const userRepository = {
  async findByEmail(email) {
    const user = await db.User.findOne({ where: { email }, raw: true });
    return user;
  },

  async findByName(name) {
    const user = await db.User.findOne({ where: { name }, raw: true });

    return user;
  },

  async save(user) {
    const createdUser = await db.User.create(user);

    const { password, id, role, ...userWithoutPwdIdAndRole } = createdUser.dataValues;
    
    return userWithoutPwdIdAndRole;
  },
};

module.exports = userRepository;