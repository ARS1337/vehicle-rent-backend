const prisma = require('../utils/prismaClient');

const getVehicleByType = async (req, res) => {
  const { type } = req.query;
  const body = await prisma.vehicle.findMany({
    where: {
      type: {
        name: type,
      },
    },
    omit: {
      vehicleTypeID: true,
    },
  });

  return res.status(200).json(body);
};

module.exports = { getVehicleByType };
