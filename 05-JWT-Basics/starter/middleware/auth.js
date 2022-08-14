const jwt = require("jsonwebtoken");
const {UnauthenticatedError} = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  //console.log(req.headers.authorization)

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    //not authorized and auth headers doesnt start wuth Bearer.
    throw new UnauthenticatedError("No token provided");
  }

  const token = authHeader.split(" ")[1];
  //console.log(token)

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log(decoded)
    const {id, username} = decoded;
    req.user = {id, username}

  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }

  next();
};

module.exports = authenticationMiddleware;
