import './globals.css';
import {
  Roboto_Flex,
  Michroma,
  Sofia_Sans_Semi_Condensed,
} from 'next/font/google';

import { Metadata } from 'next';

const michroma = Michroma({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-michroma',
});

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto-flex',
});

const sofia = Sofia_Sans_Semi_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sofia',
});

export const metadata = {
  title: 'Helios Electric | Residential Electrical Services',
  description:
    'Powering homes with precision. Reliable residential electrical services from licensed professionals.',
  icons: {
    icon: '/favicon.ico', // Favicon for general use
    apple: '/apple-touch-icon.png', // Apple touch icon
    // Add more icons if needed
  },
  openGraph: {
    title: 'Helios Electric | Residential Electrical Services',
    description:
      'Powering homes with precision. Reliable residential electrical services from licensed professionals.',
    url: 'https://www.helios-electric.com',
    images: [
      {
        url: 'https://www.helios-electric.com/sun-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helios Electric | Residential Electrical Services',
    description:
      'Powering homes with precision. Reliable residential electrical services from licensed professionals.',
    images: ['https://www.helios-electric.com/sun-image.jpg'],
  },
  // Meta for favicon and other touch icons
  appleWebApp: {
    title: 'Helios Electric',
    statusBarStyle: 'black-translucent',
  },
  manifest: '/site.webmanifest', // Site manifest file for PWA
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${michroma.variable} ${sofia.variable} ${robotoFlex.variable}`}
    >
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href='/favicon.svg'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='manifest'
          href='/site.webmanifest'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
