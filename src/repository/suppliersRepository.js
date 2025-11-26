const Supplier = require("../models/suppliers");

class suppliersRepository {
  async findAll() {
    return await Supplier.find();
  }

  async findById(id) {
    return await Supplier.findById(id);
  }

  async create(data) {
    return await Supplier.create(data);
  }

  async update(id, data) {
    return await Supplier.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Supplier.findByIdAndDelete(id);
  }
}

module.exports = new suppliersRepository();
