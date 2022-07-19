const authorize  = (req, res, next) => {
    const {user} = req.query;
    if(user === 'john') {
        req.user = {name: 'john', id: 3}
        next()
    }
    else {
       return res.status(400).send('Unauthorized')
    }
    console.log('authorize');
    next();
}

module.exports = authorize;