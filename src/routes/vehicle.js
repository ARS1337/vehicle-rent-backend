const  { Router } = require("express");
const { getVehicleByType } = require("../controller/vehicle");
const validate = require('../middleware/schemaValidation');
const {queryVehicleSchema} = require("../schema/vehicle")

const router = Router();

router.get("/", validate(queryVehicleSchema), getVehicleByType)

module.exports = router;