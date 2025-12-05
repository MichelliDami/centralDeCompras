const storesService = require("../services/storesService");

class storesController {
  async index(req, res) {
    try {
      const result = await storesService.getAll();
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "erro ao listar lojas" });
    }
  }

  async show(req, res) {
    try {
      const result = await storesService.getByIdWithAll(req.params.id);

      if (!result) {
        return res.status(404).json({ message: "loja não encontrada" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "erro ao buscar loja" });
    }
  }

  async store(req, res) {
    try {
      const created = await storesService.create(req.body);
      res.status(201).json(created);
    } catch (err) {
      console.error("erro ao criar loja:", err);
      res.status(400).json({
        error: "erro ao criar loja",
        details: err.message
      });
    }
  }

  async update(req, res) {
    try {
      const updated = await storesService.update(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ message: "loja não encontrada" });
      }
      res.json(updated);
    } catch (err) {
      res.status(400).json({
        error: "erro ao atualizar loja",
        details: err.message
      });
    }
  }

  async delete(req, res) {
    try {
      await storesService.delete(req.params.id);
      res.json({ message: "loja removida com sucesso" });
    } catch (err) {
      res.status(500).json({ error: "erro ao remover loja" });
    }
  }

  // ➤ cadastrar endereço e vincular à loja
  async addaddress(req, res) {
    try {
      const storeid = req.params.id;

      const result = await storesService.addAddress(storeid, req.body);

      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({
        error: "erro ao adicionar endereço",
        details: err.message
      });
    }
  }

  // ➤ cadastrar contato e vincular à loja
  async addcontact(req, res) {
    try {
      const storeid = req.params.id;

      const result = await storesService.addContact(storeid, req.body);

      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({
        error: "erro ao adicionar contato",
        details: err.message
      });
    }
  }
}

module.exports = new storesController();
