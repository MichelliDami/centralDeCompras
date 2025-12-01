const StoresService = require("../services/storesService");

class storesController {
  async index(req, res) {
    try {
      const result = await StoresService.getAll();
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar lojas", details: err.message });
    }
  }

  async show(req, res) {
    try {
      const result = await StoresService.getById(req.params.id);

      return result
        ? res.json(result)
        : res.status(404).json({ message: "Loja não encontrada" });

    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar loja", details: err.message });
    }
  }

  async store(req, res) {
    try {
      const created = await StoresService.create(req.body);
      return res.status(201).json(created);

    } catch (err) {
      console.error("Erro ao criar loja:", err);

      if (err.name === "ValidationError") {
        return res.status(400).json({
          error: "Erro de validação",
          details: err.message
        });
      }

      return res.status(500).json({
        error: "Erro ao criar loja",
        details: err.message
      });
    }
  }

  async update(req, res) {
    try {
      const updated = await StoresService.update(req.params.id, req.body);

      return updated
        ? res.json(updated)
        : res.status(404).json({ message: "Loja não encontrada" });

    } catch (err) {
      res.status(500).json({ error: "Erro ao atualizar loja", details: err.message });
    }
  }

  async delete(req, res) {
    try {
      await StoresService.delete(req.params.id);
      res.json({ message: "Loja removida com sucesso" });

    } catch (err) {
      res.status(500).json({ error: "Erro ao remover loja", details: err.message });
    }
  }
}

module.exports = new storesController();
