const Campaign = require("../models/campaing");

class campaignsRepository {

  // Buscar todas as campanhas
  async findAll() {
    return await Campaign.find().populate("supplier_id");
  }

  // Buscar campanha por ID
  async findById(id) {
    return await Campaign.findById(id).populate("supplier_id");
  }

  // Criar campanha
  async create(data) {
    return await Campaign.create(data);
  }

  // Atualizar campanha
  async update(id, data) {
    return await Campaign.findByIdAndUpdate(
      id,
      data,
      { new: true }
    ).populate("supplier_id");
  }

  // Deletar campanha
  async delete(id) {
    return await Campaign.findByIdAndDelete(id);
  }

  // Buscar campanhas de um fornecedor
  async findBySupplier(supplierId) {
    return await Campaign.find({ supplier_id: supplierId })
      .populate("supplier_id");
  }
}

module.exports = new campaignsRepository();
