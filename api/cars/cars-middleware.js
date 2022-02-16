const Cars = require("./cars-model");

const checkCarId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cars = await Cars.getById(id);
    if (!cars) {
      res.status(404).json({
        message: `car with id ${id} is not found`,
      });
    } else {
      req.cars = cars;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {};

const checkVinNumberValid = (req, res, next) => {};

const checkVinNumberUnique = (req, res, next) => {};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
