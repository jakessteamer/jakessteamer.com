/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Fab from './Fab';

export default function Container({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Fab />
            <Footer />
        </>
    );
}
