import { redirect } from '@sveltejs/kit';
import { db } from '../db/index.js';
import { chatRooms, chatRoomsToUsers, contacts, usersTable } from '../db/schema.js';
import { eq } from 'drizzle-orm';

export async function load({ cookies }) {
	const userId = cookies.get('user');
	if (!userId) {
		throw redirect(303, '/login');
	}

	const userDetails = await db
		.select({
			id: usersTable.id,
			name: usersTable.name,
			email: usersTable.email,
			avatar: usersTable.avatar,
			contacts: {
				id: contacts.id,
				name: contacts.name,
				email: contacts.email,
				avatar: contacts.avatar,
				verified: contacts.verified
			},
			rooms: {
				id: chatRooms.id,
				lastMessage: chatRooms.lastMessage
			}
		})
		.from(usersTable)
		.leftJoin(contacts, eq(contacts.userId, usersTable.id))
		.leftJoin(chatRoomsToUsers, eq(chatRoomsToUsers.userId, usersTable.id))
		.leftJoin(chatRooms, eq(chatRooms.id, chatRoomsToUsers.roomId))
		.where(eq(usersTable.id, userId));

	if (!userDetails.length) {
		cookies.delete('user', { path: '/' });
		throw redirect(303, '/login');
	}

	return { userDetails: userDetails[0] };
}
