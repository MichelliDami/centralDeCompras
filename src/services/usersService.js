const UsersRepository = require("../repository/usersRepository");

class usersService {
  async getAll() {
    return await UsersRepository.findAll();
  }

  async getById(id) {
    return await UsersRepository.findById(id);
  }

  async create(data) {
    return await UsersRepository.create(data);
  }

  async update(id, data) {
    return await UsersRepository.update(id, data);
  }

  async delete(id) {
    return await UsersRepository.delete(id);
  }
}

module.exports = new usersService();
