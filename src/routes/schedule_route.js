const express = require("express");
const controller = require("../controllers/contollers");
const middlewares = require("../middlewares/middlewares");
const router = express.Router();

router.get(
  "/getSchedule/:class_id",
  middlewares.checkToken,
  controller.schedule.getSchedule
);
router.post(
  "/createSubject",
  [middlewares.checkToken, middlewares.alreadyExist.subjectExist],
  controller.schedule.addSubject
);

router.post(
  "/createSchedule",
  middlewares.checkToken,
  controller.schedule.addSchedule
);

module.exports = router;
