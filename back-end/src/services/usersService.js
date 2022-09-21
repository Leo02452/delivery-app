const md5 = require('md5');
const jwtService = require('./jwtService');
const userRepository = require('../repositories/usersRepositories');

const usersService = {
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

    const token = jwtService.createToken(userWithoutPasswordAndId);

    // return nome, email, role e token
    return { ...userWithoutPasswordAndId, token };
  },
};

module.exports = usersService;