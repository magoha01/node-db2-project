const router = require("express").Router();
const Cars = require("./cars-model");
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
  console.log("Helloooo");
});

// router.post(
//   "/",
//   checkCarPayload,
//   checkVinNumberId,
//   checkVinNumberUnique,
//   (req, res, next) => {
//     //  Cars.insert(req.body)
//     //  .then((newCar) => {
//     //      res.status(201).json(newCar)
//     //  })
//     //  .catch(next)
//     //
//   }
// );

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: "ERROR",
    message: err.message,
  });
});

module.exports = router;
