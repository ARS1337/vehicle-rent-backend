const { PrismaClient } = require('../../prisma/client/default');

const prisma = new PrismaClient();

module.exports = prisma;