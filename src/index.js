const express = require('express');
const bodyParser = require('body-parser')
const vehicleTypeRoutes = require("./routes/vehicleType")
const vehicleRoutes = require("./routes/vehicle")
const bookingRoutes = require("./routes/booking")
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use("/vehicle-type",vehicleTypeRoutes)

app.use("/vehicle",vehicleRoutes)

app.use("/booking",bookingRoutes)

app.listen(process.env.PORT ??3001, () => {
  console.log('registered');
});
