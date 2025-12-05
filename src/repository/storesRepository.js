const store = require("../models/store");

class storesrepository {
  async findall() {
    return await store.find();
  }

  async findbyid(id) {
    return await store.findById(id);
  }

  async findbyidwithaddresses(id) {
    return await store.findById(id).populate("addresses");
  }

  async findbyidwithcontacts(id) {
    return await store.findById(id).populate("contacts");
  }

  async findbyidwithall(id) {
    return await store
      .findById(id)
      .populate("addresses")
      .populate("contacts");
  }

  async create(data) {
    return await store.create(data);
  }

  async update(id, data) {
    return await store.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await store.findByIdAndDelete(id);
  }

  async addaddress(storeid, addressid) {
    return await store.findByIdAndUpdate(
      storeid,
      { $push: { addresses: addressid } },
      { new: true }
    );
  }

  async addcontact(storeid, contactid) {
    return await store.findByIdAndUpdate(
      storeid,
      { $push: { contacts: contactid } },
      { new: true }
    );
  }
}

module.exports = new storesrepository();
