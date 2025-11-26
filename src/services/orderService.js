const OrdersRepository = require("../repository/ordersRepository");

class orderService {
  async getAll() {
    return await OrdersRepository.findAll();
  }

  async getById(id) {
    return await OrdersRepository.findById(id);
  }

  async create(data) {
    return await OrdersRepository.create(data);
  }

  async update(id, data) {
    return await OrdersRepository.update(id, data);
  }

  async delete(id) {
    return await OrdersRepository.delete(id);
  }
}

module.exports = new orderService();
