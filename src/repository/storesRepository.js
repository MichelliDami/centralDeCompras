const Store = require("../models/store");

class storesRepository {
  async findAll() {
    return await Store.find();
  }

  async findById(id) {
    return await Store.findById(id);
  }

  async create(data) {
    return await Store.create(data);
  }

  async update(id, data) {
    return await Store.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Store.findByIdAndDelete(id);
  }
}

module.exports = new storesRepository();
