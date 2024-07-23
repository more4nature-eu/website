import { PropsWithChildren } from 'react';

import { Lexend } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

const lexend = Lexend({ subsets: ['latin'], weight: ['200', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'More4Nature',
  description:
    'We are on a mission to trigger transformative change in conservation efforts regarding zero pollution, biodiversity protection and deforestation prevention by strengthening the role of citizens and communities.',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
