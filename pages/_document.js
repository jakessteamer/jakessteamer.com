/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    //   useEffect(() => {
    //     const script = document.createElement('script');

    //     script.src =
    //         'https://www.housecallpro.com/assets/BookingBar.js?company=e5fb241079164c83aa85e58e9aa1b12b&path=Jakes-Steamer';
    //     script.async = true;
    //     document.body.appendChild(script);
    //     return () => {};
    // }, []);

    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="leading-normal tracking-normal text-white">
                    <Main />
                    <NextScript />
                    <script
                        type="text/javascript"
                        src="https://www.housecallpro.com/assets/BookingBar.js?company=e5fb241079164c83aa85e58e9aa1b12b&path=Jakes-Steamer"
                    />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
