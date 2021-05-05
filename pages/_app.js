/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import PlausibleProvider from 'next-plausible';
import { SEO } from '../components/SEO';

import Container from '../components/Container';

function Application({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="format-detection" content="telephone=yes" />
            </Head>
            <DefaultSeo {...SEO} />
            <PlausibleProvider domain="jakessteamer.com">
                <Container>
                    <Component {...pageProps} />
                </Container>
            </PlausibleProvider>
        </>
    );
}

export default Application;
