const express = require('express');
const bodyParser = require('body-parser')
const vehicleRoutes = require("./routes/vehicleType")
const vehicle = require("./routes/vehicle")

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use("/vehicle-type",vehicleRoutes)

app.use("/vehicle",vehicle)

app.listen(3000, () => {
  console.log('registered');
});
