import { z } from 'zod';

export const contactFormValidator = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
});
