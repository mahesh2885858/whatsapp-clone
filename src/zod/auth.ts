import { z } from 'zod/v4';

export const RegisterParams = z.object({
	username: z.string().min(3),
	email: z.email().min(20),
	password: z.string().min(8)
});
