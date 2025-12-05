const CampaignsRepository = require("../repository/campaingsRepository");

class campaignService {
  async getAll() {
    return await CampaignsRepository.findAll();
  }

  async getById(id) {
    return await CampaignsRepository.findById(id);
  }

  async create(data) {
    return await CampaignsRepository.create(data);
  }

  async update(id, data) {
    return await CampaignsRepository.update(id, data);
  }

  async delete(id) {
    return await CampaignsRepository.delete(id);
  }

  async getBySupplier(supplierId) {
      return await CampaignsRepository.findBySupplier(supplierId);
    }
}

module.exports = new campaignService();
