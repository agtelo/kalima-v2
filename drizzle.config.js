/** @type { import("drizzle-kit").Config } */
export default {
	schema: './src/models/*',
	dialect: 'sqlite',
	driver: 'turso',
	out: './drizzle',
	dbCredentials: {
		url: `${process.env.DATABASE_URL}?authToken=${process.env.DATABASE_AUTH_TOKEN}`,
	},
	verbose: true,
	strict: true,
}
