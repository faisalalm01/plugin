const foodsRoutes = require ("express").Router();
const foodsControllers = require("../controllers/foodsControllers")

foodsRoutes.get("/", foodsControllers.getAllFoods);
foodsRoutes.post("/", foodsControllers.postFoods);
foodsRoutes.get("/:id", foodsControllers.getDataById);
foodsRoutes.delete("/:id", foodsControllers.deleteDataById);
foodsRoutes.put("/:id", foodsControllers.putDataById);

module.exports = foodsRoutes;