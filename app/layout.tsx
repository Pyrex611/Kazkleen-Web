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
  metadataBase: new URL('https://kazkleen.com'),
  title: 'KazKleen | Sparkling Kleen Always | Premium Cleaning Services in Abuja',
  description:
    'KazKleen provides elite residential deep cleaning, post-construction restoration, eco-friendly fumigation, and corporate office janitorial services across Maitama, Wuse II, Asokoro, Guzape, and all Abuja districts.',
  keywords: [
    'cleaning services abuja',
    'post construction cleaning in abuja',
    'residential deep cleaning abuja',
    'fumigation abuja',
    'office janitorial abuja',
    'rug and carpet washing abuja',
    'cleaning company in maitama',
    'cleaning company in wuse 2',
    'cleaning company in asokoro',
    'best cleaners in abuja',
    'after party cleanup abuja',
  ],
  authors: [{ name: 'KazKleen Services Nigeria', url: 'https://kazkleen.com' }],
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
    title: 'KazKleen | Beyond Clean. Beyond Compare | Abuja Cleaning Services',
    description:
      'We treat every room like it is the one being inspected. Professional deep cleaning, fumigation, and organization for luxury homes and corporate spaces in Abuja.',
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
  // Enterprise Linked Data Graph: CleaningService + LocalBusiness + FAQPage + WebSite
  const enterpriseSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://kazkleen.com/#website',
        url: 'https://kazkleen.com',
        name: 'KazKleen Abuja',
        description: 'Premium cleaning and fumigation services across Abuja',
        publisher: {
          '@id': 'https://kazkleen.com/#business',
        },
      },
      {
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
        paymentAccepted: ['Cash', 'Bank Transfer', 'Debit Card'],
        currenciesAccepted: 'NGN',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Central Business District',
          addressLocality: 'Abuja',
          addressRegion: 'Federal Capital Territory',
          postalCode: '900001',
          addressCountry: 'NG',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 9.0765,
          longitude: 7.3986,
        },
        hasMap: 'https://maps.google.com/?q=Abuja,+Nigeria',
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
          { '@type': 'AdministrativeArea', name: 'Asokoro, Abuja' },
          { '@type': 'AdministrativeArea', name: 'Guzape, Abuja' },
          { '@type': 'AdministrativeArea', name: 'Jabi, Abuja' },
          { '@type': 'AdministrativeArea', name: 'Gwarinpa, Abuja' },
          { '@type': 'AdministrativeArea', name: 'Central Business District, Abuja' },
          { '@type': 'AdministrativeArea', name: 'Apo, Abuja' },
          { '@type': 'AdministrativeArea', name: 'Katampe, Abuja' },
          { '@type': 'AdministrativeArea', name: 'Mabushi, Abuja' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '128',
          bestRating: '5',
          worstRating: '1',
        },
        knowsAbout: [
          'Post-Construction Dust Decontamination',
          'Eco-friendly Synthetic Pyrethroid Fumigation',
          'High-traffic Office Janitorial Maintenance',
          'Deep Wool & Synthetic Rug Steam Extraction',
          'Wardrobe Organization & De-cluttering',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'KazKleen Service Catalog',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Residential Deep Cleaning',
                description: 'Clinical-grade sanitization for apartments, duplexes, and estates in Abuja.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Post-Construction Restoration',
                description: 'Heavy paint splatter, grout residue, and micro-dust extraction.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Commercial & Office Janitorial',
                description: 'Corporate workplace sanitation before or after office hours.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'NAFDAC-Compliant Fumigation',
                description: 'Child- and pet-safe targeted pest eradication across Abuja.',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://kazkleen.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does professional cleaning cost in Abuja?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'KazKleen apartment maintenance starts at approximately ₦18,000 for standard maintenance and ₦26,000 for deep cleans. Full house and commercial rates depend on room count, with transparent estimates available via our instant online calculator.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does KazKleen post-construction cleaning include?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our post-construction protocol eliminates paint splatter, mortar dust, tile cement haze, and airborne particulate, leaving luxury villas and renovated apartments move-in ready.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are KazKleen fumigation chemicals safe for kids and pets?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We utilize low-odor, eco-conscious synthetic pyrethroid formulations approved by NAFDAC that are safe for homes with infants and animals following a brief 2 to 3-hour drying window.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which districts in Abuja does KazKleen service?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'KazKleen operates rapid-deployment teams across Maitama, Wuse II, Asokoro, Guzape, Jabi, Gwarinpa, Central Business District, Katampe, Mabushi, and Apo.',
            },
          },
        ],
      },
    ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpriseSchemaGraph) }}
        />
      </head>
      <body className="font-sans text-ink bg-mist antialiased relative selection:bg-brand-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}