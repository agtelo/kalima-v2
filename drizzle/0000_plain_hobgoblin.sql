CREATE TABLE `products` (
	`id` integer PRIMARY KEY NOT NULL,
	`model` text NOT NULL,
	`brand` text NOT NULL,
	`category` text NOT NULL,
	`price` integer NOT NULL,
	`description` text NOT NULL,
	`image` text NOT NULL,
	`featured` integer DEFAULT 0,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
