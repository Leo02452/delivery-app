const md5 = require('md5');
const jwtService = require('./jwtService');
const userRepository = require('../repositories/usersRepositories');

const authService = {
  async login(payload) {
    // procurar usuario
    const user = await userRepository.findByEmail(payload.email);

    const hashPassword = md5(payload.password);

    // se não tiver ou se senha não for a mesma lançar erro - 404
    if (!user || hashPassword !== user.password) {
        const e = new Error('Incorrect email or password');
        e.name = 'NotFoundError';
        throw e;
    }

    // se tiver, tira a senha e gera o token
    const { password, id, ...userWithoutPasswordAndId } = user;

    const token = jwtService.createToken({ ...userWithoutPasswordAndId, id });

    // return nome, email, role e token
    return { id, ...userWithoutPasswordAndId, token };
  },

  async register(payload) {
    const emailAlreadyRegistered = await userRepository.findByEmail(payload.email);
    const nameAlreadyRegistered = await userRepository.findByName(payload.name);

    if (emailAlreadyRegistered || nameAlreadyRegistered) {
      const e = new Error('Name or email already exists');
        e.name = 'ConflictError';
        throw e;
    }

    const hashPassword = md5(payload.password);

    const userToSave = { ...payload, password: hashPassword, role: 'customer' };
    
    await userRepository.save(userToSave);
    
    const user = await userRepository.findByEmail(payload.email);
    
    const { password, id, ...userWithoutPasswordAndId } = user;
    const token = jwtService.createToken({ ...userWithoutPasswordAndId, id });
    
    return { ...userWithoutPasswordAndId, token };
  },
};

module.exports = authService;