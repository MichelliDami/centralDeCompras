const ProductsRepository = require("../repository/productsRepository");

class productsServices {
  async getAll() {
    return await ProductsRepository.findAll();
  }

  async getById(id) {
    return await ProductsRepository.findById(id);
  }

  async create(data) {
    return await ProductsRepository.create(data);
  }

  async update(id, data) {
    return await ProductsRepository.update(id, data);
  }

  async delete(id) {
    return await ProductsRepository.delete(id);
  }
}

module.exports = new productsServices();
