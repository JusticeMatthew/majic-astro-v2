import { z } from 'astro:schema';
import { defineAction, ActionError } from 'astro:actions';

const resendKey = import.meta.env.RESEND_API_KEY;

export const server = {
  sendEmail: defineAction({
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      company: z.string().optional(),
      message: z.string(),
    }),
    handler: async (input) => {
      try {
        console.log('Success');
        return 'Success';
      } catch (error) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: `Message failed to send. ${error}`,
        });
      }
    },
  }),
};
