const Cars = require("./cars-model");

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
    .then((car) => {
      if (car) {
        req.car = car;
        next();
      } else {
        res.status(404).json({ message: "Failed to retrieve car" });
      }
    })
    .catch(next);
};

const checkCarPayload = (req, res, next) => {
  
};

const checkVinNumberValid = (req, res, next) => {};

const checkVinNumberUnique = (req, res, next) => {};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
