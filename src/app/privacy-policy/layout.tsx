import { PropsWithChildren } from 'react';

import Footer from '@/containers/footer';

export default function PrivacyPolicyLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
