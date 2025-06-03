import { DrizzleQueryError } from 'drizzle-orm/errors';
import { db } from '../../db';
import { usersTable } from '../../db/schema';
import { formatZodIssues } from '../../utils';
import { RegisterParams } from '../../zod/';
import type { Actions } from './$types';
import bcrypt from 'bcrypt';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const data = Object.fromEntries(formData);
			const paramsCheck = RegisterParams.safeParse(data);
			if (paramsCheck.success) {
				const hash = await bcrypt.hash(paramsCheck.data.password, 10);
				await db.insert(usersTable).values({
					name: paramsCheck.data.username,
					password: hash,
					email: paramsCheck.data.email
				});
				return { success: true };
			} else {
				return {
					success: false,
					error: formatZodIssues(paramsCheck.error.issues)
				};
			}
		} catch (error) {
			// To Do: send the error message and render in front end.
			if (error instanceof DrizzleQueryError) {
				return { success: false, error: error.message };
			}
			return { success: false };
		}
	}
} satisfies Actions;
