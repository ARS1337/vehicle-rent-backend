const  { Router } = require("express");
const { getVehicleByType } = require("../controller/vehicle");

const router = Router();

router.get("/",getVehicleByType)

module.exports = router;