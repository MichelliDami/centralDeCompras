const StoresRepository = require("../repository/storesRepository");

class storesService {
  async getAll() {
    return await StoresRepository.findAll();
  }

  async getById(id) {
    return await StoresRepository.findById(id);
  }

  async create(data) {
    return await StoresRepository.create(data);
  }

  async update(id, data) {
    return await StoresRepository.update(id, data);
  }

  async delete(id) {
    return await StoresRepository.delete(id);
  }
}

module.exports = new storesService();
