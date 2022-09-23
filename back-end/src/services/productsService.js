const productsRepository = require('../repositories/productsRepositores');

const productsService = {
    async getall() {
        const products = await productsRepository.getall();
        return products;
    },
};

module.exports = productsService;
