const consoleLog = (req, res, next) => {
    console.log("Hello World!")
    req.str = new Date().getFullYear()
    next();
}

module.exports = consoleLog;