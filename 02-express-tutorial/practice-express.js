const express = require('express')
const app = express();
const consoleLog = require('./practice-middleware');

app.use(consoleLog);

app.get('/', (req, res)=>{
    res.status(200).send(req.str.toString())
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000....')
  })