import { PropsWithChildren } from 'react';

import { Lexend } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';
import LayoutProviders from '@/app/providers';

const lexend = Lexend({ subsets: ['latin'], weight: ['100', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'More4Nature',
  description:
    'We are on a mission to trigger transformative change in conservation efforts regarding zero pollution, biodiversity protection and deforestation prevention by strengthening the role of citizens and communities.',
  manifest: '/site.webmanifest',
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
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <LayoutProviders>
      <html lang="en">
        <body className={lexend.className}>
          <main>{children}</main>
        </body>
      </html>
    </LayoutProviders>
  );
}
