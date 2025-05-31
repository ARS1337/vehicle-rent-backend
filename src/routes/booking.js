const  { Router } = require("express");
const { getBookingsByVehicle, createBookingForVehicle } = require("../controller/booking");

const router = Router();

router.get("/:id",getBookingsByVehicle)

router.post("/",createBookingForVehicle)

module.exports = router;