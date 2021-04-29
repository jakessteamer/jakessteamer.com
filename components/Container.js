/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import Head from 'next/head';
import FabIcon from '@components/FabIcon';
import Navbar from './Navbar';
import Footer from './Footer';
import MinimalNav from './MinimalNav';

export default function Container({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <FabIcon />
            <Footer />
        </>
    );
}
