const prisma = require("../src/utils/prismaClient")

async function main() {
  const hatchback = await prisma.vehicleType.upsert({
    where: { name: 'hatchback' },
    update: {},
    create: {
      name: 'hatchback',
      noOfWheels: 4,
    },
  });
  const sedan = await prisma.vehicleType.upsert({
    where: { name: 'sedan' },
    update: {},
    create: {
      name: 'sedan',
      noOfWheels: 4,
    },
  });
  const suv = await prisma.vehicleType.upsert({
    where: { name: 'suv' },
    update: {},
    create: {
      name: 'suv',
      noOfWheels: 4,
    },
  });
  const sports = await prisma.vehicleType.upsert({
    where: { name: 'sports' },
    update: {},
    create: {
      name: 'sport',
      noOfWheels: 2,
    },
  });
  const cruiser = await prisma.vehicleType.upsert({
    where: { name: 'cruiser' },
    update: {},
    create: {
      name: 'cruiser',
      noOfWheels: 2,
    },
  });
  const swift = await prisma.vehicle.upsert({
    where: { name: 'swift' },
    update: {},
    create: {
      name: 'swift',
      type: {
        connect: {
          id: hatchback.id,
        },
      },
    },
  });
  const hondaCity = await prisma.vehicle.upsert({
    where: { name: 'hondaCity' },
    update: {},
    create: {
      name: 'hondaCity',
      type: {
        connect: {
          id: sedan.id,
        },
      },
    },
  });
  const scorpio = await prisma.vehicle.upsert({
    where: { name: 'scorpio' },
    update: {},
    create: {
      name: 'scorpio',
      type: {
        connect: {
          id: suv.id,
        },
      },
    },
  });
  const bullet = await prisma.vehicle.upsert({
    where: { name: 'bullet' },
    update: {},
    create: {
      name: 'bullet',
      type: {
        connect: {
          id: cruiser.id,
        },
      },
    },
  });
  const dominar = await prisma.vehicle.upsert({
    where: { name: 'dominar' },
    update: {},
    create: {
      name: 'dominar',
      type: {
        connect: {
          id: sports.id,
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
