const { z } = require('zod');

const queryVehicleSchema = z.object({
  query: z.object({
    type: z.enum(['hatchback', 'sedan',"suv","sport","cruiser"]).optional(),
  }),
});

module.exports = {queryVehicleSchema}
