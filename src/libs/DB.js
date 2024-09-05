import { config } from 'dotenv'
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
config({ path: '.env' })

// Verificar que las variables de entorno se cargan correctamente
// console.log('TURSO_DATABASE_URL:', process.env.TURSO_DATABASE_URL)
// console.log('TURSO_AUTH_TOKEN:', process.env.TURSO_AUTH_TOKEN)

const client = createClient({
	url: process.env.TURSO_DATABASE_URL,
	authToken: process.env.TURSO_AUTH_TOKEN,
})

export const db = drizzle(client)

// Disable migrate function if using Edge runtime and use `npm run db:migrate` instead.
// Only run migrate in development. Otherwise, migrate will also be run during the build which can cause errors.
// Migrate during the build can cause errors due to the locked database when multiple migrations are running at the same time.
// if (process.env.NODE_ENV === 'development') {
// 	await migrate(db, { migrationsFolder: './migrations' })
// }
