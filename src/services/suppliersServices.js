const suppliersRepository = require("../repository/suppliersRepository");
const addressRepository = require("../repository/addressRepository");
const contactRepository = require("../repository/contactRepository");

class suppliersService {
  async getAll() {
    return await suppliersRepository.findAll();
  }

  async getById(id) {
    return await suppliersRepository.findById(id);
  }

  async getByIdWithAll(id) {
    return await suppliersRepository.findByIdWithAll(id);
  }

  async create(data) {
    return await suppliersRepository.create(data);
  }

  async update(id, data) {
    return await suppliersRepository.update(id, data);
  }

  async delete(id) {
    return await suppliersRepository.delete(id);
  }

  // 🔥 cadastrar endereço e vincular ao fornecedor
  async addAddress(id, addressData) {
    const address = await addressRepository.create(addressData);

    const updatedSupplier = await suppliersRepository.addAddress(
      id,
      address._id
    );

    return {
      address,
      supplier: updatedSupplier
    };
  }

  // 🔥 cadastrar contato e vincular ao fornecedor
  async addContact(id, contactData) {
    const contact = await contactRepository.create(contactData);

    const updatedSupplier = await suppliersRepository.addContact(
      id,
      contact._id
    );

    return {
      contact,
      supplier: updatedSupplier
    };
  }
}

module.exports = new suppliersService();
