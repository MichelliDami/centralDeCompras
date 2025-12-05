const Supplier = require("../models/suppliers");

class suppliersRepository {
  async findAll() {
    return await Supplier.find();
  }

  async findById(id) {
    return await Supplier.findById(id);
  }

  async findByIdWithAddresses(id) {
    return await Supplier.findById(id).populate("addresses");
  }

  async findByIdWithContacts(id) {
    return await Supplier.findById(id).populate("contacts");
  }

  async findByIdWithAll(id) {
    return await Supplier.findById(id)
      .populate("addresses")
      .populate("contacts");
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

  async addAddress(supplierId, addressId) {
    return await Supplier.findByIdAndUpdate(
      supplierId,
      { $push: { addresses: addressId } },
      { new: true }
    );
  }

  async addContact(supplierId, contactId) {
    return await Supplier.findByIdAndUpdate(
      supplierId,
      { $push: { contacts: contactId } },
      { new: true }
    );
  }
}

module.exports = new suppliersRepository();
