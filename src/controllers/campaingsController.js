const CampaignsService = require("../services/campaingService");

class campaignsController {

  // ============================
  // 🔹 LISTAR TODAS
  // ============================
  async index(req, res) {
    try {
      const result = await CampaignsService.getAll();
      return res.status(200).json(result);
    } catch (err) {
      console.error("Erro ao listar campanhas:", err);
      return res.status(500).json({ message: "Erro ao listar campanhas" });
    }
  }

  // ============================
  // 🔹 BUSCAR POR ID
  // ============================
  async show(req, res) {
    try {
      const result = await CampaignsService.getById(req.params.id);

      if (!result) {
        return res.status(404).json({ message: "Campanha não encontrada" });
      }

      return res.status(200).json(result);
    } catch (err) {
      console.error("Erro ao buscar campanha:", err);
      return res.status(500).json({ message: "Erro ao buscar campanha" });
    }
  }

  // ============================
  // 🔹 CRIAR
  // ============================
  async store(req, res) {
    try {
      const result = await CampaignsService.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      console.error("Erro ao criar campanha:", err);
      return res.status(500).json({ message: "Erro ao criar campanha" });
    }
  }

  // ============================
  // 🔹 ATUALIZAR
  // ============================
  async update(req, res) {
    try {
      const result = await CampaignsService.update(req.params.id, req.body);

      if (!result) {
        return res.status(404).json({ message: "Campanha não encontrada" });
      }

      return res.status(200).json(result);
    } catch (err) {
      console.error("Erro ao atualizar campanha:", err);
      return res.status(500).json({ message: "Erro ao atualizar campanha" });
    }
  }

  // ============================
  // 🔹 DELETAR
  // ============================
  async delete(req, res) {
    try {
      const result = await CampaignsService.delete(req.params.id);

      if (!result) {
        return res.status(404).json({ message: "Campanha não encontrada" });
      }

      return res.status(200).json({ message: "Campanha removida com sucesso" });
    } catch (err) {
      console.error("Erro ao remover campanha:", err);
      return res.status(500).json({ message: "Erro ao remover campanha" });
    }
  }

  // ============================
  // 🔹 BUSCAR POR FORNECEDOR
  // ============================
  async getBySupplier(req, res) {
    try {
      const supplierId = req.params.supplierId;
      const result = await CampaignsService.getBySupplier(supplierId);

      if (!result || result.length === 0) {
        return res.status(404).json({
          message: "Nenhuma campanha encontrada para este fornecedor"
        });
      }

      return res.status(200).json(result);

    } catch (error) {
      console.error("Erro ao buscar campanhas por fornecedor:", error);
      return res.status(500).json({
        error: "Erro no servidor ao buscar campanhas por fornecedor"
      });
    }
  }
}

module.exports = new campaignsController();
