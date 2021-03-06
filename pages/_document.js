/* eslint-disable prefer-rest-params */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="font-sans antialiased text-base">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
