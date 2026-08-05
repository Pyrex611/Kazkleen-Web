import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'KazKleen | Premium Cleaning Services in Abuja',
  description: 'KazKleen provides premium post-construction cleaning, residential cleaning, commercial cleaning, and after-party clean-up services in Abuja.',
  keywords: 'post construction cleaning in abuja, cleaning services abuja, fumigation abuja, wardrobe arrangement, after-party cleanup abuja, office cleaning abuja, rug washing abuja, abuja cleaning service',
  authors: [{ name: 'KazKleen' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://kazkleen.com', 
  },
  icons: {
    icon: '/kaz.jpg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // suppressHydrationWarning prevents browser extensions from crashing React due to injected classes
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CleaningService",
              "name": "KazKleen Abuja",
              "image": "https://kazkleen.com/kaz.jpg",
              "telephone": "+2349046042275",
              "email": "kazkleen@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Abuja",
                "addressCountry": "NG"
              },
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className="bg-gray-50 text-slate-800 antialiased relative font-sans">
        {children}
      </body>
    </html>
  )
}