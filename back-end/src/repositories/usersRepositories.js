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

    return createdUser.dataValues;
  },

  async findByRole(role) {
    const users = await db.User.findAll({ where: { role }, raw: true });
    return users;
  },

  async findAll() {
    const users = await db.User.findAll({ raw: true });
    return users;
  },

  async delete(id) {
    await db.User.destroy({ where: { id } });
  },
};

module.exports = userRepository;