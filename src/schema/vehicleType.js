const { z } = require('zod');

const queryVehicleTypeSchema = z.object({
  query: z.object({
    wheels: z.enum(['2', '4']).optional(),
  }),
});

module.exports = {queryVehicleTypeSchema}
