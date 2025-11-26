const ProductsServices = require("../services/productsServices");

class productsController {
  async index(req, res) {
    try {
      const result = await ProductsServices.getAll();
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar produtos", details: err.message });
    }
  }

  async show(req, res) {
    try {
      const result = await ProductsServices.getById(req.params.id);

      if (!result) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar produto", details: err.message });
    }
  }

  async store(req, res) {
    try {
      const result = await ProductsServices.create(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: "Erro ao criar produto", details: err.message });
    }
  }

  async update(req, res) {
    try {
      const result = await ProductsServices.update(req.params.id, req.body);

      if (!result) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Erro ao atualizar produto", details: err.message });
    }
  }

  async delete(req, res) {
    try {
      await ProductsServices.delete(req.params.id);
      res.json({ message: "Produto removido com sucesso" });
    } catch (err) {
      res.status(500).json({ error: "Erro ao remover produto", details: err.message });
    }
  }
}

module.exports = new productsController();
