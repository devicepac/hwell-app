/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: '%s - 서비스 페이지',
  openGraph: {
    type: 'website',
    site_name: '건강증진센터 위치보기 서비스',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: '3c0e7e5b08610dddbbdc1915cb87c38e1776e59b',
    },
    {
      name: 'google-site-verification',
      content: 'MVwcmLk-2gF9J1Xey2ooCPYU4PeBjjAcHzWJ9N42ML0',
    },
  ],
};
