import Head from 'next/head';
import { string } from 'prop-types';

const defaultDescription = 'HN PWA with Next.js';
const defaultOGURL = '';
const defaultOGImage = '';

const HeadTags = (props) => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{props.title || 'HN PWA'}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
    <meta name="theme-color" content="#297bee" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
);

HeadTags.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default HeadTags;
