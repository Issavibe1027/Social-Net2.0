const router = require("express").Router();
const {
  getAllT,
  getTById,
  createT,
  updateT,
  deleteT,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");


router.route("/").get(getAllT).post(createT);


router
  .route("/:id")
  .get(getTById)
  .put(updateT)
  .delete(deleteT);


router.route("/:thoughtId/reactions").post(addReaction);


router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
