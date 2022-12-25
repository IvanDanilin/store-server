const ApiError = require("../error/ApiError");
const { Brand } = require("../models/models");

class BrandController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      if (!name) {
        return next(ApiError.badRequest("Имя бренда не задано"));
      }
      const brand = await Brand.create({ name });
      return res.json(brand);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
  async deleteOne(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Brand.destroy({ where: { id } });
      if (result) return res.json(result);
      return next(
        ApiError.badRequest(
          "Не удалось удалить, возможно объект не существует или был удален ранее"
        )
      );
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
