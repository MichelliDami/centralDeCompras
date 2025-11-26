const Order = require("../models/order");

class ordersRepository {
  async findAll() {
    return await Order.find();
  }

  async findById(id) {
    return await Order.findById(id);
  }

  async create(data) {
    return await Order.create(data);
  }

  async update(id, data) {
    return await Order.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Order.findByIdAndDelete(id);
  }
}

module.exports = new ordersRepository();
