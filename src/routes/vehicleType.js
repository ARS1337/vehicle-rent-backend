const { Router } = require('express');
const { getVehicleTypes } = require('../controller/vehicleType');
const { queryVehicleTypeSchema } = require('../schema/vehicleType');
const validate = require('../middleware/schemaValidation');
const router = Router();

router.get('/', validate(queryVehicleTypeSchema), getVehicleTypes);

module.exports = router;
