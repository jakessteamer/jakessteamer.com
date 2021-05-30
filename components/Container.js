/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Fab from './Fab';
// import ReviewsSidebar from './ReviewsSidebar';

export default function Container({ children }) {
    return (
        <>
            {/* <div id="housecall-bar">
                <a
                    id="housecall-button"
                    target="_top"
                    href="https://book.housecallpro.com/book/Jakes-Steamer/e5fb241079164c83aa85e58e9aa1b12b">
                    BOOK ONLINE
                </a>
            </div> */}
            <Navbar />
            {children}
            <Fab />
            <Footer />
        </>
    );
}
