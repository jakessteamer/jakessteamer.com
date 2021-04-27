/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'http://schema.org',
                            '@type': 'LocalBusiness',
                            '@id': 'https://jakessteamer.com',
                            name: "Jake's Steamer",
                            image:
                                'https://www.jakessteamer.com/images/logos/jakessteamer-company-logo-square.png',
                            telephone: '432-847-4600',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: '606 SE 4th St',
                                addressLocality: 'Seminole',
                                addressRegion: 'TX',
                                postalCode: '79360',
                                addressCountry: 'US'
                            },
                            openingHoursSpecification: [
                                {
                                    '@type': 'OpeningHoursSpecification',
                                    dayOfWeek: [
                                        'Monday',
                                        'Tuesday',
                                        'Wednesday',
                                        'Thursday',
                                        'Friday'
                                    ],
                                    opens: '08:00',
                                    closes: '16:00'
                                },
                                {
                                    '@type': 'OpeningHoursSpecification',
                                    dayOfWeek: 'Saturday',
                                    opens: '8:00',
                                    closes: '12:00'
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <DefaultSeo {...SEO} />
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    );
}

export default Application;
