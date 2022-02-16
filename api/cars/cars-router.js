const Cars = require("./cars-model");
const router = require("express").Router();

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberId,
  checkVinNumberUnique,
} = require("./cars-middleware");

router.get("/", (req, res, next) => {
  Cars.getAll().then((cars) => {
    res.status(200).json(cars);
  });
});

router.get("/", checkCarId, (req, res, next) => {
  res.json(req.cars);
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberId,
  checkVinNumberUnique,
  (req, res, next) => {
   Cars.insert(req.body)
   .then((newCar) => {
       res.status(201).json(newCar)
   })
   .catch(next)
  }
);

module.exports = router;
