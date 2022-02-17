const Cars = require("./cars-model");
const vin = require("vin-validator");

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
    .then((car) => {
      if (car) {
        req.car = car;
        next();
      } else {
        res
          .status(404)
          .json({ message: `car with id ${req.params.id} is not found` });
      }
    })
    .catch(next);
};

const checkCarPayload = (req, res, next) => {
  if (!req.body.vin)
    return next({
      status: 400,
      message: "vin is missing",
    });
  if (!req.body.make)
    return next({
      status: 400,
      message: "make is missing",
    });
  if (!req.body.model)
    return next({
      status: 400,
      message: "model is missing",
    });
  if (!req.body.mileage)
    return next({
      status: 400,
      message: "mileage is missing",
    });
  next();
};

const checkVinNumberValid = async (req, res, next) => {
  try {
    const validatedVin = await vin.validate(req.body.vin);
    if (validatedVin) {
      next();
    } else {
      next({
        status: 400,
        message: `vin ${req.body.vin} is invalid`,
      });
    }
  } catch (err) {
    next(err);
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const existing = await Cars.getByVin(req.body.vin);
    if (existing) {
      next({ status: 400, message: `vin ${req.body.vin} already exists` });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
