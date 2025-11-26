const SuppliersRepository = require("../repository/suppliersRepository");

class suppliersServices {
  async getAll() {
    return await SuppliersRepository.findAll();
  }

  async getById(id) {
    return await SuppliersRepository.findById(id);
  }

  async create(data) {
    return await SuppliersRepository.create(data);
  }

  async update(id, data) {
    return await SuppliersRepository.update(id, data);
  }

  async delete(id) {
    return await SuppliersRepository.delete(id);
  }
}

module.exports = new suppliersServices();
