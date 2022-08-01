const CustomAPIError = requier("./custom-error");
const { StatusCodes } = require("http-status-codes");


class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    //this.statusCode = 400
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;

n//npm install http-status-codes