import { PropsWithChildren } from 'react';

import { Lexend } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';
import RootHead from '@/app/head';
import LayoutProviders from '@/app/providers';

const lexend = Lexend({ subsets: ['latin'], weight: ['100', '400', '500', '700'] });

const socialMediaTitle = 'Citizen Science in Environmental Compliance Assurance';

const description =
  'Discover more4nature, a transformative project empowering citizens and communities to combat environmental degradation. Explore our case studies on zero pollution, biodiversity protection, and deforestation prevention. Learn how you can be part of the solution through collaborative Citizen Science Initiatives and Environmental Compliance Assurance.';

export const metadata: Metadata = {
  title: 'more4nature',
  description,
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
    },
    {
      rel: 'icon',
      url: '/android-chrome-256x256.png',
      sizes: '256x256',
    },
    {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#5BBAD5',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  ],
  openGraph: {
    type: 'website',
    title: 'Citizen Science in Environmental Compliance Assurance',
    description,
    url: 'https://more4nature.eu/',
  },
  twitter: {
    card: 'summary',
    site: '@more4nature',
    title: socialMediaTitle,
    description,
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <LayoutProviders>
      <html lang="en">
        <RootHead />
        <body className={lexend.className}>{children}</body>
      </html>
    </LayoutProviders>
  );
}
