/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/global.css';

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Application;
