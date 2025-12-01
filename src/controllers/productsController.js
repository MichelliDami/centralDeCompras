const ProductsServices = require("../services/productsServices");

class productsController {
  async index(req, res) {
    try {
      const result = await ProductsServices.getAll();
      return res.json(result);
    } catch (err) {
      return res.status(500).json({
        error: "Erro ao listar produtos",
        details: err.message
      });
    }
  }

  async show(req, res) {
    try {
      const result = await ProductsServices.getById(req.params.id);

      if (!result) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      return res.json(result);
    } catch (err) {
      return res.status(500).json({
        error: "Erro ao buscar produto",
        details: err.message
      });
    }
  }

  async store(req, res) {
    try {
      const result = await ProductsServices.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({
        error: "Erro de validação",
        details: err.message
      });
    }
  }

  async update(req, res) {
    try {
      const result = await ProductsServices.update(req.params.id, req.body);

      if (!result) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      return res.json(result);
    } catch (err) {
      return res.status(400).json({
        error: "Erro ao atualizar produto",
        details: err.message
      });
    }
  }

  async delete(req, res) {
    try {
      await ProductsServices.delete(req.params.id);
      return res.json({ message: "Produto removido com sucesso" });
    } catch (err) {
      return res.status(500).json({
        error: "Erro ao remover produto",
        details: err.message
      });
    }
  }

  // 🔥 AGORA SIM — método correto dentro da classe
  async getBySupplier(req, res) {
    try {
      const supplierId = req.params.supplierId;

      const products = await ProductsServices.getBySupplier(supplierId);

      if (!products || products.length === 0) {
        return res.status(404).json({
          message: "Nenhum produto encontrado para este fornecedor"
        });
      }

      return res.json(products);

    } catch (error) {
      console.error("Erro ao buscar produtos por fornecedor:", error);
      return res.status(500).json({
        error: "Erro no servidor ao buscar produtos por fornecedor"
      });
    }
  }
}

module.exports = new productsController();
