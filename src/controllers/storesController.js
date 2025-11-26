const StoresService = require("../services/storesService");

class storesController {
  async index(req, res) {
    const result = await StoresService.getAll();
    res.json(result);
  }

  async show(req, res) {
    const result = await StoresService.getById(req.params.id);
    result
      ? res.json(result)
      : res.status(404).json({ message: "Loja não encontrada" });
  }

  async store(req, res) {
    const created = await StoresService.create(req.body);
    res.status(201).json(created);
  }

  async update(req, res) {
    const updated = await StoresService.update(req.params.id, req.body);
    updated
      ? res.json(updated)
      : res.status(404).json({ message: "Loja não encontrada" });
  }

  async delete(req, res) {
    await StoresService.delete(req.params.id);
    res.json({ message: "Loja removida com sucesso" });
  }
}

module.exports = new storesController();
