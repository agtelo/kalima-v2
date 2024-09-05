/** @type { import("drizzle-kit").Config } */
const config = {
	schema: './src/models/*',
	dialect: 'sqlite',
	driver: 'turso',
	out: './drizzle',
	dbCredentials: {
		url: `${process.env.TURSO_DATABASE_URL}?authToken=${process.env.TURSO_AUTH_TOKEN}`,
	},
	verbose: true,
	strict: true,
}

export default config
