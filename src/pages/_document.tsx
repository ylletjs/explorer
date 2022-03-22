import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com/" />
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="/sitemap.xml"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      <meta
        name="description"
        content="Explore WordPress REST API with Yllet"
      />
      <meta property="og:title" content="Yllet Explorer" />
      <meta
        property="og:description"
        content="Explore WordPress REST API with Yllet"
      />
      <meta property="og:image" content="https://ylletjs.github.io/explorer/" />
      <meta name="twitter:title" content="Yllet Explorer" />
      <meta
        name="twitter:description"
        content="Explore WordPress REST API with Yllet."
      />
      <meta name="twitter:image" content="https://ylletjs.github.io/explorer/" />
      <meta name="twitter:card" content="summary" />
    </Head>
    <body className="h-screen overflow-hidden">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;