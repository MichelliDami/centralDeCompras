const SuppliersService = require("../services/suppliersServices");

class suppliersController {
  async index(req, res) {
    try {
      const result = await SuppliersService.getAll();
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "erro ao listar fornecedores" });
    }
  }

  async show(req, res) {
    try {
      // agora retorna com endereços e contatos populados
      const result = await SuppliersService.getByIdWithAll(req.params.id);

      if (!result) {
        return res.status(404).json({ message: "fornecedor não encontrado" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "erro ao buscar fornecedor" });
    }
  }

  async store(req, res) {
    try {
      const created = await SuppliersService.create(req.body);
      res.status(201).json(created);
    } catch (error) {
      console.error("erro ao criar fornecedor:", error);
      res.status(400).json({
        error: "erro ao criar fornecedor",
        details: error.message
      });
    }
  }

  async update(req, res) {
    try {
      const updated = await SuppliersService.update(req.params.id, req.body);

      if (!updated) {
        return res.status(404).json({ message: "fornecedor não encontrado" });
      }

      res.json(updated);
    } catch (error) {
      res.status(400).json({
        error: "erro ao atualizar fornecedor",
        details: error.message
      });
    }
  }

  async delete(req, res) {
    try {
      await SuppliersService.delete(req.params.id);
      res.json({ message: "fornecedor removido com sucesso" });
    } catch (err) {
      res.status(500).json({ error: "erro ao remover fornecedor" });
    }
  }

  // 🔥 NOVO ➝ adicionar endereço ao fornecedor
  async addAddress(req, res) {
    try {
      const supplierId = req.params.id;

      const result = await SuppliersService.addAddress(supplierId, req.body);

      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({
        error: "erro ao adicionar endereço",
        details: err.message
      });
    }
  }

  // 🔥 NOVO ➝ adicionar contato ao fornecedor
  async addContact(req, res) {
    try {
      const supplierId = req.params.id;

      const result = await SuppliersService.addContact(supplierId, req.body);

      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({
        error: "erro ao adicionar contato",
        details: err.message
      });
    }
  }
}

module.exports = new suppliersController();
