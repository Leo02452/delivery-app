const userRepository = require("../repositories/usersRepositories");

const usersService = {
  async list(role) {
    if (!role) {
      const users = await userRepository.findAll();

      const usersWithoutPassword = users
        .map(({ id, email, name, role }) => ({ id, email, name, role }));

      return usersWithoutPassword;
    }

    const users = await userRepository.findByRole(role);

    const usersWithoutPassword = users
        .map(({ id, email, name, role }) => ({ id, email, name, role }));

      return usersWithoutPassword;
  },
}

module.exports = usersService;