CREATE TABLE `rooms` (
	`id` char(36) NOT NULL,
	`lastMessage` varchar(255) DEFAULT '',
	CONSTRAINT `rooms_id` PRIMARY KEY(`id`),
	CONSTRAINT `rooms_lastMessage_unique` UNIQUE(`lastMessage`)
);
--> statement-breakpoint
CREATE TABLE `rooms_to_users` (
	`roomId` varchar(36) NOT NULL,
	`userId` varchar(36) NOT NULL,
	CONSTRAINT `rooms_to_users_roomId_userId_pk` PRIMARY KEY(`roomId`,`userId`)
);
--> statement-breakpoint
CREATE TABLE `contacts` (
	`id` char(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) DEFAULT '',
	`avatar` varchar(255) DEFAULT '',
	`verified` boolean DEFAULT false,
	`userId` varchar(36),
	CONSTRAINT `contacts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `rooms_to_users` ADD CONSTRAINT `rooms_to_users_roomId_rooms_id_fk` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `rooms_to_users` ADD CONSTRAINT `rooms_to_users_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;