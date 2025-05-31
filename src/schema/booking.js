const { z } = require("zod");

 const createBookingSchema = z.object({
  body: z.object({
    firstName: z
      .string().min(3).max(20),
    lastName: z
      .string().min(3).max(20),
    vehicleID : z.string().uuid(),
    from : z.string().date(),
    to : z.string().date()
  }),
});

const queryBookingSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

module.exports = {createBookingSchema,queryBookingSchema}