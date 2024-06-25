import { DefaultSeo, NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '@/config/next-seo.config';
import { lazy } from 'react';

import dynamic from 'next/dynamic';
// const GlobalStyle = dynamic(() => import('mf-admin/GlobalStyle'), {
//   ssr: false,
// });

export default function App({ Component, pageProps }: AppProps) {
  const { seoProps } = pageProps;

  return (
    <>
      {/* <GlobalStyle /> */}
      <Component {...pageProps} />
    </>
  );
}
