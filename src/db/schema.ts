import { boolean, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users', {
	id: int().primaryKey(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).unique(),
	avatar: varchar({ length: 255 }).default(''),
	verified: boolean().default(false)
});
