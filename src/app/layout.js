import { ClerkProvider } from '@clerk/nextjs'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import Providers from '@/providers/Providers'
import Navbar from '@/components/Nabvar'
import Footer from '@/components/Footer'
require('dotenv').config()

const source = Source_Sans_3({ subsets: ['latin'] })

export const metadata = {
	title: 'Kalima',
	description: '',
}

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={`${source.className} antialiased h-screen `}>
					<Navbar />
					<Providers>{children}</Providers>
					<Toaster />
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	)
}
