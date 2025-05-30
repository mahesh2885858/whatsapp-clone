import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	const c = cookies.getAll();
	if (c.length === 0) {
		redirect(303, '/login');
	} else {
		return { c };
	}
}
