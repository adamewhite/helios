// app/layout.tsx or app/layout.js
import './globals.css';
import { Cabin, Andada_Pro } from 'next/font/google';

// Import Cabin for headings
const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cabin',
});

// Import Andada Pro for body text
const andadaPro = Andada_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-andada-pro',
});

export const metadata = {
  title: 'Helios Electric',
  description: 'Residential electrical services done right.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${cabin.variable} ${andadaPro.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
