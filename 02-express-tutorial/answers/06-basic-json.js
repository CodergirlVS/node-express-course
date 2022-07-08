const express = require("express");
const app = express();
const {products} = require('./data.js')

app.get('/', (req, res)=>{
  res.json(products)
})

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});
app.listen(5000, () => {
  console.log("server is listening on port 5000...");
}); //with call back function
