const express = require('express');
const app = express();

app.use(express.static('./new-public'));

app.get('/sample', (req, res) => {
    res.status(200).send('This is working.')
  })

app.all('*', (req, res)=>{
    res.status(404).send("response not found")
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000....')
})