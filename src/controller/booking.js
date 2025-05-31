const prisma = require('../utils/prismaClient');

const getBookingsByVehicle = async (req, res) => {
  const { id } = req.params;
  const body = await prisma.booking.findMany({
    where: {
      vehicleID: id,
    },
  });

  return res.status(200).json(body);
};

const createBookingForVehicle = async (req, res) => {
  const { firstName, lastName, vehicleID, from, to } = req.body;

  const startDate = new Date(from);
  const endDate = new Date(to);

  const vehicle = await prisma.vehicle.findUnique({
    where: {
      id: vehicleID,
    },
  });

  if (!vehicle) {
    return res
      .status(404)
      .json({ success: false, errors : { message: 'vehicle not found for vehicleID'} });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      vehicleID,
      OR: [
        {
          AND: [
            {
              from: {
                lte: startDate,
              },
            },
            {
              to: {
                gte: endDate,
              },
            },
          ],
        },
        {
          AND: [
            {
              from: {
                gte: startDate,
              },
            },
            {
              to: {
                lte: endDate,
              },
            },
          ],
        },
        {
          AND: [
            {
              from: {
                gte: startDate,
              },
            },
            {
              from: {
                lte: endDate,
              },
            },
          ],
        },
        {
          AND: [
            {
              to: {
                gte: startDate,
              },
            },
            {
              to: {
                lte: endDate,
              },
            },
          ],
        },
      ],
    },
  });

  if(bookings.length>0){
    return res.status(404).json({success: false, errors : { message : "booking already present within date range provided"}})
  }

  const booking = await prisma.booking.create({
    data: {
      firstName,
      lastName,
      vehicle: {
        connect: {
          id: vehicleID,
        },
      },
      from: startDate,
      to: endDate,
    },
  });

  return res.status(201).json(booking);
};

module.exports = { getBookingsByVehicle, createBookingForVehicle };
