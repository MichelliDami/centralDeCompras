const OrdersService = require("../services/orderService");

class ordersController {
  async index(req, res) {
    const result = await OrdersService.getAll();
    res.json(result);
  }

  async show(req, res) {
    const result = await OrdersService.getById(req.params.id);
    result
      ? res.json(result)
      : res.status(404).json({ message: "Pedido não encontrado" });
  }

  async store(req, res) {
    const created = await OrdersService.create(req.body);
    res.status(201).json(created);
  }

  async update(req, res) {
    const updated = await OrdersService.update(req.params.id, req.body);
    updated
      ? res.json(updated)
      : res.status(404).json({ message: "Pedido não encontrado" });
  }

  async delete(req, res) {
    await OrdersService.delete(req.params.id);
    res.json({ message: "Pedido removido com sucesso" });
  }
}

module.exports = new ordersController();
