const Cars = require("./cars-model");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  Cars.getAll().then((cars) => {
    res.status(200).json(cars);
  });
});

router.get("/", (req, res, next) => {
    res.json(req.cars)
});

router.post("/", (req, res, next) => {
//   console.log("new car");
//   next();
});

module.exports = router;
