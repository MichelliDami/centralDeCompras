const address = require("../models/address.js");

class addressrepository {
  async create(data) {
    return await address.create(data);
  }

  async delete(id) {
    return await address.findByIdAndDelete(id);
  }
}

module.exports = new addressrepository();
