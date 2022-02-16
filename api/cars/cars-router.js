const express = require("express");
const Cars = require("./cars-model");
const router = express.Router();

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
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

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res, next) => {
    Cars.create(req.body)
      .then((car) => {
        res.status(201).json(car);
      })
      .then(() => {
        Cars.getById(req.params.id);
      })
      .catch(next);
  }
);

module.exports = router;
