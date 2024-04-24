import '@/styles/globals.css';
import { DefaultSeo, NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '@/config/next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  const { seoProps } = pageProps;

  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo {...seoProps} />
      <Component {...pageProps} />;
    </>
  );
}
