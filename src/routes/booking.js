const  { Router } = require("express");
const { getBookingsByVehicle, createBookingForVehicle } = require("../controller/booking");
const validate = require('../middleware/schemaValidation');
const {createBookingSchema,queryBookingSchema} = require("../schema/booking")

const router = Router();

router.get("/:id",validate(queryBookingSchema),getBookingsByVehicle)

router.post("/",validate(createBookingSchema),createBookingForVehicle)

module.exports = router;