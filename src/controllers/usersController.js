const UsersService = require("../services/usersService");

class usersController {
  async index(req, res) {
    const result = await UsersService.getAll();
    res.json(result);
  }

  async show(req, res) {
    const result = await UsersService.getById(req.params.id);
    result
      ? res.json(result)
      : res.status(404).json({ message: "Usuário não encontrado" });
  }

  async store(req, res) {
    const created = await UsersService.create(req.body);
    res.status(201).json(created);
  }

  async update(req, res) {
    const updated = await UsersService.update(req.params.id, req.body);
    updated
      ? res.json(updated)
      : res.status(404).json({ message: "Usuário não encontrado" });
  }

  async delete(req, res) {
    await UsersService.delete(req.params.id);
    res.json({ message: "Usuário removido com sucesso" });
  }
}

module.exports = new usersController();
