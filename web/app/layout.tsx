import type {Metadata} from 'next';
import {Geist, Geist_Mono, IBM_Plex_Mono} from 'next/font/google';
// import * as font from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const ibmMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  // subsets: ['latin'],
  // weight: '500',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-gray-950 text-gray-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
