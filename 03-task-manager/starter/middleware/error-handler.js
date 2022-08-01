const { CustomAPIError } = require("../error/custom-error");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Soething went wrong, please try again" });
};

module.exports = errorHandler;
