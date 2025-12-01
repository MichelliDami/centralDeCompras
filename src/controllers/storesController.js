const StoresService = require("../services/storesService");

class storesController {
  async index(req, res) {
    try {
      const result = await StoresService.getAll();
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar lojas" });
    }
  }

  async show(req, res) {
    try {
      const result = await StoresService.getById(req.params.id);
      if (!result) {
        return res.status(404).json({ message: "Loja não encontrada" });
      }
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar loja" });
    }
  }

  async store(req, res) {
    try {
      const created = await StoresService.create(req.body);
      res.status(201).json(created);
    } catch (err) {
      console.error("Erro ao criar loja:", err);
      res.status(400).json({
        error: "Erro ao criar loja",
        details: err.message
      });
    }
  }

  async update(req, res) {
    try {
      const updated = await StoresService.update(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ message: "Loja não encontrada" });
      }
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: "Erro ao atualizar loja", details: err.message });
    }
  }

  async delete(req, res) {
    try {
      await StoresService.delete(req.params.id);
      res.json({ message: "Loja removida com sucesso" });
    } catch (err) {
      res.status(500).json({ error: "Erro ao remover loja" });
    }
  }
}

module.exports = new storesController();
