//check username, password in post(login) request
//if exist create new JWT
//send back to front-end

//setup authentication so only the request with JWT can access the dashboard

const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
  const {username, password} = req.body
//validate the values By:
  //mongo
  //Joi
  //check in the controller

  if(!username || !password){
    throw new CustomAPIError("Please provide an username and password", 400)
  }
  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({
      msg: `Hello, John Doe`,
      secret: `Here is your authorized data, your ${luckyNumber}`,
    });
};

module.exports = {
  login,
  dashboard,
};
