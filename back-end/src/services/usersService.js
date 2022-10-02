const md5 = require('md5');
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

  async create(payload) {
    const nameAlreadyExists = await userRepository.findByName(payload.name);
    const emailAlreadyExists = await userRepository.findByEmail(payload.email);

    if (nameAlreadyExists) {
      const e = new Error('Name is already exists');
      e.name = 'ConflictError';
      throw e;
    }

    if (emailAlreadyExists) {
      const e = new Error('Email is already exists');
      e.name = 'ConflictError';
      throw e;
    }

    const hashPassword = md5(payload.password);

    const userToSave = { ...payload, password: hashPassword };

    const userCreated = await userRepository.save(userToSave);

    const { password, id, ...userWithoutPasswordAndId } = userCreated;

    return userWithoutPasswordAndId;
  },
};

module.exports = usersService;