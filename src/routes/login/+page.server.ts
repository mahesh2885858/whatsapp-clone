import { eq } from 'drizzle-orm';
import { db } from '../../db';
import { usersTable } from '../../db/schema';
import type { Actions } from './$types';
import bcrypt from 'bcrypt';
import { fail, redirect } from '@sveltejs/kit';
import { DrizzleQueryError } from 'drizzle-orm/errors';

export const load = async ({ cookies }) => {
	const user = cookies.get('user');
	if (user) {
		return redirect(303, '/');
	}
};

export const actions = {
	default: async ({ request, cookies }) => {
		try {
			const formData = await request.formData();
			const data = Object.fromEntries(formData);
			if (data.username && data.password) {
				const user = await db
					.select()
					.from(usersTable)
					.where(eq(usersTable.name, data.username.toString()))
					.limit(1);
				if (user.length === 0) {
					return fail<{ error: string }>(404, {
						error: 'Invalid credentials'
					});
				} else {
					const isValid = await bcrypt.compare(data.password.toString() ?? '', user[0].password);
					if (!isValid) {
						return fail(404, {
							success: false,
							error: 'Invalid password'
						});
					}
					cookies.set('user', user[0].id, {
						path: '/'
					});
				}
			}
			return { success: true };
		} catch (error) {
			// To Do: send the error message and render in front end.
			if (error instanceof DrizzleQueryError) {
				return fail(400, {
					success: false,
					error: error.message
				});
			}
			return fail(400, {
				success: false,
				error: error
			});
		}
	}
} satisfies Actions;
