const router = require("express").Router();
const userRoutes = require("./user-routes");
const tRoutes = require("./t-routes");

router.use("/users", userRoutes);
router.use("/t", tRoutes);

module.exports = router;
