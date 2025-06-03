import { relations } from 'drizzle-orm';
import { boolean, char, mysqlTable, primaryKey, varchar } from 'drizzle-orm/mysql-core';

const UUID = {
	id: char('id', { length: 36 })
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID())
};

export const usersTable = mysqlTable('users', {
	...UUID,
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).unique(),
	avatar: varchar({ length: 255 }).default(''),
	password: varchar({ length: 255 }).notNull(),
	verified: boolean().default(false)
});

export const usersRelation = relations(usersTable, ({ many }) => ({
	contacts: many(contacts),
	rooms: many(chatRooms),
	chatRoomsToUsers: many(chatRoomsToUsers)
}));

export const contacts = mysqlTable('contacts', {
	...UUID,
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).default(''),
	avatar: varchar({ length: 255 }).default(''),
	verified: boolean().default(false),
	mobile: varchar({ length: 20 }).notNull(),
	userId: varchar({ length: 36 }).references(() => usersTable.id)
});

export const contactsRelation = relations(contacts, ({ one }) => ({
	user: one(usersTable, {
		fields: [contacts.userId],
		references: [usersTable.id]
	})
}));

export const chatRooms = mysqlTable('rooms', {
	...UUID,
	lastMessage: varchar({ length: 255 }).unique().default('')
});

export const chatRoomsRelation = relations(chatRooms, ({ many }) => ({
	chatRoomsToContacts: many(chatRoomsToUsers)
}));

export const chatRoomsToUsers = mysqlTable(
	'rooms_to_users',
	{
		roomId: varchar({ length: 36 }).references(() => chatRooms.id),
		userId: varchar({ length: 36 }).references(() => usersTable.id)
	},
	(t) => [primaryKey({ columns: [t.roomId, t.userId] })]
);

export const usersToGroupsRelations = relations(chatRoomsToUsers, ({ one }) => ({
	room: one(chatRooms, {
		fields: [chatRoomsToUsers.roomId],
		references: [chatRooms.id]
	}),
	user: one(usersTable, {
		fields: [chatRoomsToUsers.userId],
		references: [usersTable.id]
	})
}));
