/* eslint-disable prefer-rest-params */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link href="/favicons/favicon.ico" rel="icon" />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#006AFF"
          href="/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <Head />
        <body className="font-sans antialiased text-blue-900 dark:text-blue-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
