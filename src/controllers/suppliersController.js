const SuppliersService = require("../services/suppliersServices");

class suppliersController {
  async index(req, res) {
    const result = await SuppliersService.getAll();
    res.json(result);
  }

  async show(req, res) {
    const result = await SuppliersService.getById(req.params.id);
    result
      ? res.json(result)
      : res.status(404).json({ message: "Fornecedor não encontrado" });
  }

  async store(req, res) {
    try {
      const created = await SuppliersService.create(req.body);
      res.status(201).json(created);
    } catch (error) {
      console.error("Erro ao criar fornecedor:", error);
      res.status(400).json({ error: "Erro ao criar fornecedor", details: error.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await SuppliersService.update(req.params.id, req.body);
      updated
        ? res.json(updated)
        : res.status(404).json({ message: "Fornecedor não encontrado" });
    } catch (error) {
      res.status(400).json({ error: "Erro ao atualizar fornecedor", details: error.message });
    }
  }

  async delete(req, res) {
    await SuppliersService.delete(req.params.id);
    res.json({ message: "Fornecedor removido com sucesso" });
  }
}

module.exports = new suppliersController();
