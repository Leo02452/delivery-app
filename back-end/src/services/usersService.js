const userRepository = require('../repositories/usersRepositories');

const usersService = {
  async list(userRole) {
    if (!userRole) {
      const users = await userRepository.findAll();

      const usersWithoutPassword = users
        .map(({ id, email, name, role }) => ({ id, email, name, role }));

      return usersWithoutPassword;
    }

    const users = await userRepository.findByRole(userRole);

    const usersWithoutPassword = users
        .map(({ id, email, name, role }) => ({ id, email, name, role }));

      return usersWithoutPassword;
  },

  async findByPk(id) {
    const user = await userRepository.findByPk(id);

    if (!user) {
      const e = new Error('User not found');
      e.name = 'NotFoundError';
      throw e;
    }

    return user;
  },
};

module.exports = usersService;