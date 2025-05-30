const  { Router } = require("express");
const { getVehicleTypes } = require("../controller/vehicleType");

const router = Router();

router.get("/",getVehicleTypes)

module.exports = router;