import { DefaultSeoProps } from 'next-seo';

// FIXME: CDN URL 및 각 SEO 값 확보 후 전체적으로 수정 필요
const config: DefaultSeoProps = {
  titleTemplate: '%s | HMG Developers',
  defaultTitle: 'HMG Developers',
  // canonical: 'https://developers.hyundaimotorgroup.com/',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: 'HMG Developer Website',
    title: 'HMG Developers',
    description: 'HMG Developer Website',
    images: [
      {
        // 5kb
        // url: 'https://www.researchgate.net/profile/Krithivasan-Ramamritham/publication/3943341/figure/fig1/AS:279954282565646@1443757710823/Basic-scenario-for-TransSquid.png',
        // 10kb
        // url: 'https://tempnext.s3.ap-northeast-2.amazonaws.com/imresizer-1713950191933.png',
        // 17kb
        url: 'https://tempnext.s3.ap-northeast-2.amazonaws.com/imresizer-1713951455820.jpg',
        // 50kb
        // url: 'https://sample-videos.com/img/Sample-jpg-image-50kb.jpg',
        width: 1200,
        height: 630,
        alt: 'HMG Developers Thumbnail Image',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@HMGDevelopers',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1',
    },
    {
      name: 'keywords',
      content: 'HMG DEVELOPERS, HMG개발자사이트',
    },
    {
      name: 'format-detection',
      content: 'telephone=no,address=no,email=no',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge;IE=11',
    },
    {
      httpEquiv: 'content-type',
      content: 'text/html; charset=utf-8',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.png',
      type: 'image/x-icon',
    },
    // FIXME: CDN URL 확보되면 적용.
    // {
    // rel: 'preload',
    // href: '%NEXT_PUBLIC_CDN_BASE_URL%/resource/hmg-developers/fonts/HyundaiSansTextKRRegular.woff',
    // as: 'font',
    // type: 'font/woff',
    // crossOrigin: 'anonymous',
    // },
    // {
    // rel: 'preload',
    // href: '%NEXT_PUBLIC_CDN_BASE_URL%/resource/hmg-developers/fonts/HyundaiSansTextKRBold.woff',
    // as: 'font',
    // type: 'font/woff',
    // crossOrigin: 'anonymous',
    // },
  ],
  languageAlternates: [
    {
      hrefLang: 'ko-KR',
      href: 'https://developers.hyundaimotorgroup.com/',
    },
    {
      hrefLang: 'en-US',
      href: 'https://developers.hyundaimotorgroup.com/en',
    },
    {
      hrefLang: 'ja-JP',
      href: 'https://developers.hyundaimotorgroup.com/ja',
    },
    {
      hrefLang: 'x-default',
      href: 'https://developers.hyundaimotorgroup.com/en',
    },
  ],
};

export default config;
