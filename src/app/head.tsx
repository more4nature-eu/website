'use client';

import PlausibleProvider from 'next-plausible';

import { mediaStyles } from '@/containers/media';

function RootHead() {
  return (
    <>
      <head>
        <style
          key="fresnel-css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
          type="text/css"
        />
      </head>
      <head>
        <PlausibleProvider domain="more4nature.vercel.app" />
      </head>
    </>
  );
}

export default RootHead;
