const Product = require("../models/products");

class productsRepository {
  async findAll() {
    return await Product.find();
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async create(data) {
    return await Product.create(data);
  }

  async update(id, data) {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Product.findByIdAndDelete(id);
  }
 async findBySupplier(supplierId) {
    return await Product.find({ supplier_id: supplierId })
      .populate("supplier_id");
  }
  
}

module.exports = new productsRepository();
