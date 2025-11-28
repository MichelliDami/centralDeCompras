const productsServices = require("../services/productsServices");

class productsController {

  async index(req, res) {
    try {
      const result = await productsServices.getAll();
      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: "Erro ao listar produtos",
        details: err.message
      });
    }
  }

  async show(req, res) {
    try {
      const result = await productsServices.getById(req.params.id);

      if (!result) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: "Erro ao buscar produto",
        details: err.message
      });
    }
  }

  async store(req, res) {
    try {
      const result = await productsServices.create(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({
        error: "Erro ao criar produto",
        details: err.message
      });
    }
  }

  async update(req, res) {
    try {
      const result = await productsServices.update(req.params.id, req.body);

      if (!result) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: "Erro ao atualizar produto",
        details: err.message
      });
    }
  }

  async delete(req, res) {
    try {
      await productsServices.delete(req.params.id);
      res.json({ message: "Produto removido com sucesso" });
    } catch (err) {
      res.status(500).json({
        error: "Erro ao remover produto",
        details: err.message
      });
    }
  }

  // 🔥 NOVO — buscar produtos por fornecedor
  async getBySupplier(req, res) {
    try {
      const supplierId = req.params.supplierId;

      const products = await productsServices.getBySupplier(supplierId);

      if (!products || products.length === 0) {
        return res.status(404).json({
          message: "Nenhum produto encontrado para este fornecedor."
        });
      }

      return res.json(products);

    } catch (err) {
      console.error("Erro ao buscar produtos por fornecedor:", err);
      return res.status(500).json({
        error: "Erro no servidor",
        details: err.message
      });
    }
  }
}

module.exports = new productsController();
