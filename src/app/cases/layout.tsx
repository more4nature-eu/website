import { PropsWithChildren } from 'react';

export default function CasesLayout({ children }: Readonly<PropsWithChildren>) {
  return <main className="flex min-h-[calc(100svh)] flex-col">{children}</main>;
}
