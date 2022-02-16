const Cars = require("./cars-model");

const checkCarId = async (req, res, next) => {
    try {
      const cars = await Cars.getById(req.params.id) 
      if(!cars) {
        next({ status: 404, message: "account not found"});
      } else {
        req.cars = cars;
        next();
      }
    } catch(err) {
      next(err)
    }
}

const checkCarPayload = (req, res, next) => {
  
}

const checkVinNumberValid = (req, res, next) => {
  
}

const checkVinNumberUnique = (req, res, next) => {
  
}

module.exports = {
  checkCarId, 
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}