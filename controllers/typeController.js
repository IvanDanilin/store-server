const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class TypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      if (!name) {
        return next(ApiError.badRequest("Имя типа не задано"));
      }
      const type = await Type.create({ name });
      return res.json(type);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
  async deleteOne(req, res, next) {
    const { id } = req.params;
    const result = await Type.destroy({ where: { id } });
    return res.json(result);
  }
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
