import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'New Al-Noor Motors | Trusted Name in New & Used Cars',
  description: 'New Al-Noor Motors - Your premier destination for new and used cars in Faisalabad. Best deals on quality vehicles with trusted service.',
  keywords: ['cars', 'used cars', 'new cars', 'car dealership', 'Faisalabad', 'Al-Noor Motors', 'buy cars', 'sell cars'],
  authors: [{ name: 'New Al-Noor Motors' }],
  openGraph: {
    title: 'New Al-Noor Motors | Trusted Name in New & Used Cars',
    description: 'Your premier destination for new and used cars in Faisalabad. Best deals on quality vehicles.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
