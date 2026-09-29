import type { Metadata, Viewport } from 'next';
import { Fraunces, Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0284c7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'KazKleen | Sparkling Kleen Always | Premium Cleaning Services in Abuja',
  description:
    'KazKleen provides professional deep cleaning, post-construction cleaning, fumigation, and rug washing across Maitama, Wuse II, Guzape, and all Abuja districts. Insured & vetted team.',
  keywords: [
    'cleaning services abuja',
    'post construction cleaning in abuja',
    'residential deep cleaning abuja',
    'fumigation abuja',
    'office janitorial abuja',
    'rug and carpet washing abuja',
    'best cleaners in abuja',
    'after party cleanup abuja',
  ],
  authors: [{ name: 'KazKleen Services', url: 'https://kazkleen.com' }],
  creator: 'KazKleen Services',
  publisher: 'KazKleen Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://kazkleen.com',
  },
  openGraph: {
    title: 'KazKleen | Sparkling Kleen Always | Abuja Cleaning Services',
    description:
      'We treat every room like it is the one being inspected. Premium residential, commercial, post-construction cleaning, and fumigation in Abuja.',
    url: 'https://kazkleen.com',
    siteName: 'KazKleen',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: 'https://kazkleen.com/kaz.jpg',
        width: 1200,
        height: 630,
        alt: 'KazKleen Abuja Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KazKleen | Sparkling Kleen Always',
    description: 'Abuja’s trusted residential and commercial cleaning service.',
    images: ['https://kazkleen.com/kaz.jpg'],
  },
  icons: {
    icon: '/kaz.jpg',
    apple: '/kaz.jpg',
  },
  other: {
    'geo.region': 'NG-FC',
    'geo.placename': 'Abuja',
    'geo.position': '9.0765;7.3986',
    ICBM: '9.0765, 7.3986',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    '@id': 'https://kazkleen.com/#business',
    name: 'KazKleen Services',
    legalName: 'KazKleen Services Nigeria',
    url: 'https://kazkleen.com',
    telephone: '+2349046042275',
    email: 'kazkleen@gmail.com',
    image: 'https://kazkleen.com/kaz.jpg',
    logo: 'https://kazkleen.com/kaz.jpg',
    priceRange: '₦₦',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abuja',
      addressRegion: 'Federal Capital Territory',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.0765,
      longitude: 7.3986,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Maitama, Abuja' },
      { '@type': 'AdministrativeArea', name: 'Wuse II, Abuja' },
      { '@type': 'AdministrativeArea', name: 'Guzape, Abuja' },
      { '@type': 'AdministrativeArea', name: 'Asokoro, Abuja' },
      { '@type': 'AdministrativeArea', name: 'Jabi, Abuja' },
      { '@type': 'AdministrativeArea', name: 'Gwarinpa, Abuja' },
      { '@type': 'AdministrativeArea', name: 'Central Business District, Abuja' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Professional Cleaning & Fumigation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Deep Cleaning',
            description: 'Comprehensive top-to-bottom home sanitization in Abuja.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Post-Construction Cleaning',
            description: 'Removal of paint splatter, debris, and fine dust after construction or renovations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial & Office Janitorial',
            description: 'Sanitary janitorial services for corporate spaces and retail outlets.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Fumigation & Pest Control',
            description: 'Targeted pest elimination using eco-conscious chemicals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rug & Upholstery Deep Extraction',
            description: 'Stain and allergen removal for carpets, rugs, and luxury sofas.',
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${fraunces.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans text-ink bg-mist antialiased relative selection:bg-brand-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}