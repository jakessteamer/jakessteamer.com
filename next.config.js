/* eslint-disable global-require */
/* eslint-disable no-use-before-define */
const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
    target: 'serverless',
    future: {
        webpack5: true
    },
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: createSecureHeaders({
                    referrerPolicy: ['strict-origin-when-cross-origin', 'origin-when-cross-origin'],
                    forceHTTPSRedirect: [
                        true,
                        { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }
                    ],
                    frameGuard: 'sameorigin',
                    noopen: 'noopen',
                    nosniff: 'nosniff',
                    xssProtection: 'sanitize'
                })
            }
        ];
    }
};

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://housecallpro.com  https://*.housecallpro.com https://plausible.io;
  child-src  https://*.housecallpro.com https://plausible.io;
  style-src 'self' 'unsafe-inline' https://*.housecallpro.com https://plausible.io;
  img-src * blob: data:;
  media-src 'none';
  connect-src * https://plausible.io;
  font-src 'self';
`;

const securityHeaders = [
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload'
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    // Opt-out of Google FLoC: https://amifloced.org/
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    }
];
