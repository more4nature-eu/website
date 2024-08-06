import { PropsWithChildren } from 'react';

import Footer from '@/containers/footer';
import Newsletter from '@/containers/newsletter';

export default function StaticPageLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      {children}
      <Newsletter />
      <Footer />
    </>
  );
}
