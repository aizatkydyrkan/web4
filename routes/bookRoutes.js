const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookController");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/roleMiddleware");

router.get("/", controller.getBooks);
router.get("/:id", controller.getBook);

router.post("/", auth, admin, controller.createBook);
router.put("/:id", auth, admin, controller.updateBook);
router.delete("/:id", auth, admin, controller.deleteBook);

module.exports = router;