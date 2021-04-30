/* eslint-disable prefer-rest-params */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="leading-normal tracking-normal text-white">
                    <Main />
                    <NextScript />
                </body>
                <script
                    async
                    defer
                    data-domain="jakessteamer.com"
                    src="https://plausible.io/js/plausible.outbound-links.js"
                />

                <script
                    async
                    defer
                    src="https://www.housecallpro.com/assets/BookingBar.js?company=e5fb241079164c83aa85e58e9aa1b12b&path=Jakes-Steamer"
                />
            </Html>
        );
    }
}

export default MyDocument;
