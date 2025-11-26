const CampaignsService = require("../services/campaingService");

class campaignsController {
  async index(req, res) {
    try {
      const result = await CampaignsService.getAll();
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ message: "Erro ao listar campanhas" });
    }
  }

  async show(req, res) {
    try {
      const result = await CampaignsService.getById(req.params.id);

      if (!result) {
        return res.status(404).json({ message: "Campanha não encontrada" });
      }

      return res.json(result);
    } catch (err) {
      return res.status(500).json({ message: "Erro ao buscar campanha" });
    }
  }

  async store(req, res) {
    try {
      const result = await CampaignsService.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json({ message: "Erro ao criar campanha" });
    }
  }

  async update(req, res) {
    try {
      const result = await CampaignsService.update(req.params.id, req.body);

      if (!result) {
        return res.status(404).json({ message: "Campanha não encontrada" });
      }

      return res.json(result);
    } catch (err) {
      return res.status(500).json({ message: "Erro ao atualizar campanha" });
    }
  }

  async delete(req, res) {
    try {
      const result = await CampaignsService.delete(req.params.id);

      if (!result) {
        return res.status(404).json({ message: "Campanha não encontrada" });
      }

      return res.json({ message: "Campanha removida com sucesso" });
    } catch (err) {
      return res.status(500).json({ message: "Erro ao remover campanha" });
    }
  }
}

module.exports = new campaignsController();
