const Campaign = require("../models/campaing");

class campaignsRepository {
  async findAll() {
    return await Campaign.find().populate("supplier_id");
  }

  async findById(id) {
    return await Campaign.findById(id).populate("supplier_id");
  }

  async create(data) {
    return await Campaign.create(data);
  }

  async update(id, data) {
    return await Campaign.findByIdAndUpdate(id, data, {
      new: true
    }).populate("supplier_id");
  }

  async delete(id) {
    return await Campaign.findByIdAndDelete(id);
  }
}

module.exports = new campaignsRepository();
