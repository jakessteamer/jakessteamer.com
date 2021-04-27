/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import FabIcon from '@components/FabIcon';
import Navbar from './Navbar';
import Footer from './Footer';

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
