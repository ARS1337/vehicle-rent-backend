const prisma = require("../utils/prismaClient")

const getVehicleTypes = async (req, res) => {
  const wheels = req.query.wheels ?? 4;;
  const body = await prisma.vehicleType.findMany({
    where: { noOfWheels: parseInt(wheels) },
  });

  return res.status(200).json(body);
};

module.exports = {getVehicleTypes}