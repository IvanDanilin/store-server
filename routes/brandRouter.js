const Router = require("express");
const router = new Router();
const brandController = require('../controllers/brandController')

router.post("/", brandController.create);
router.delete('/:id', brandController.deleteOne)
router.get("/", brandController.getAll);

module.exports = router;
