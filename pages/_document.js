/* eslint-disable prefer-rest-params */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import crypto from 'crypto';
import { v4 } from 'uuid';
/**
 * Generate Content Security Policy for the app.
 * Uses randomly generated nonce (base64)
 *
 * @returns [csp: string, nonce: string] - CSP string in first array element, nonce in the second array element.
 */
const generateCsp = () => {
    const production = process.env.NODE_ENV === 'production';

    // generate random nonce converted to base64. Must be different on every HTTP page load
    const hash = crypto.createHash('sha256');
    hash.update(v4());
    const nonce = hash.digest('base64');

    const DevelopmentContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://housecallpro.com  https://*.housecallpro.com https://plausible.io;
  child-src  https://*.housecallpro.com https://plausible.io;
  style-src 'self' 'unsafe-inline' https://*.housecallpro.com https://plausible.io;
  img-src * blob: data:;
  media-src 'none';
  connect-src * https://plausible.io;
  font-src 'self';
`;

    let csp = ``;
    csp += `default-src 'self';`;
    csp += `base-uri 'none';`;
    csp += `style-src https://housecallpro.com  https://*.housecallpro.com 'unsafe-inline';`; // NextJS requires 'unsafe-inline'
    csp += `script-src 'nonce-${nonce}' 'self' https://housecallpro.com  https://*.housecallpro.com https://plausible.io https://plausible.io/js/plausible.outbound-links.js ${
        production ? '' : "'unsafe-eval'"
    };`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
    csp += `child-src https://*.housecallpro.com https://*.housecallpro.com  https://plausible.io https://plausible.io/js/plausible.outbound-links.js;`;
    csp += `font-src 'self';`;
    csp += `img-src * blob: data:;`;
    csp += `connect-src 'self' https://housecallpro.com  https://*.housecallpro.com https://plausible.io https://plausible.io/js/plausible.outbound-links.js;`;

    return [csp, nonce];
};
class MyDocument extends Document {
    render() {
        const [csp, nonce] = generateCsp();
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Security-Policy" content={csp} />
                    <script
                        async
                        defer
                        data-domain="jakessteamer.com"
                        nonce={nonce}
                        src="https://plausible.io/js/plausible.outbound-links.js"
                    />

                    <script
                        nonce={nonce}
                        src="https://www.housecallpro.com/assets/BookingBar.js?company=e5fb241079164c83aa85e58e9aa1b12b&path=Jakes-Steamer"
                    />
                </Head>
                <body className="leading-normal tracking-normal text-white">
                    <Main />
                    <NextScript nonce={nonce} />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
