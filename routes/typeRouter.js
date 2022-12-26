const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", checkRole("ADMIN"), typeController.create);
router.delete("/:id", checkRole("ADMIN"), typeController.deleteOne);
router.get("/", typeController.getAll);

module.exports = router;
