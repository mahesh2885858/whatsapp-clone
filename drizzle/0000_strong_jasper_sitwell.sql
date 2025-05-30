CREATE TABLE `users` (
	`id` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255),
	`avatar` varchar(255) DEFAULT '',
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
