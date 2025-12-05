const storesrepository = require("../repository/storesRepository");
const addressrepository = require("../repository/addressRepository");
const contactrepository = require("../repository/contactRepository");

class storesService {
  async create(data) {
    return await storesrepository.create(data);
  }

  async getAll() {
    return await storesrepository.findall();
  }

  async getById(id) {
    return await storesrepository.findbyid(id);
  }

  async getByIdWithAddresses(id) {
    return await storesrepository.findbyidwithaddresses(id);
  }

  async getByIdWithAll(id) {
    // addresses + contacts populados
    return await storesrepository.findbyidwithall(id);
  }

  async update(id, data) {
    return await storesrepository.update(id, data);
  }

  async delete(id) {
    return await storesrepository.delete(id);
  }

  // ----------------------------
  // ENDEREÇO
  // ----------------------------
  async addAddress(id, addressdata) {
    const address = await addressrepository.create(addressdata);

    const updatedstore = await storesrepository.addaddress(
      id,
      address._id
    );

    return {
      address,
      store: updatedstore
    };
  }

  // ----------------------------
  // CONTATO
  // ----------------------------
  async addContact(id, contactdata) {
    const contact = await contactrepository.create(contactdata);

    const updatedstore = await storesrepository.addcontact(
      id,
      contact._id
    );

    return {
      contact,
      store: updatedstore
    };
  }
}

module.exports = new storesService();
