const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), deviceController.create);
router.delete("/:id", checkRole("ADMIN"), deviceController.deleteOne);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);

module.exports = router;
