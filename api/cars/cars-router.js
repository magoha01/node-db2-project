const express = require("express");
const Cars = require("./cars-model");
const router = express.Router();

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberId,
  checkVinNumberUnique,
} = require("./cars-middleware");

router.get("/", async (req, res, next) => {
  Cars.getAll().then((cars) => {
    res.status(200).json(cars);
  });
});

router.get("/:id", checkCarId, (req, res, next) => {
  res.json(req.car);
});

router.post("/", async (req, res, next) => {
  
});

// router.use((err, req, res, next) => {
//   res.status(err.status || 500).json({
//     customMessage: "ERROR",
//     message: err.message,
//   });
// });

module.exports = router;
