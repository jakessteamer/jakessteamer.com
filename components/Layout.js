/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable react/button-has-type */
import React from "react";
import Reviews from "./Reviews";
import Nav from "./Nav";
import Fab from "./Fab";
import Footer from "./Footer";
// const Reviews = dynamic(() => import(/* webpackChunkName: 'reviews' */ "../components/Reviews"), {
//     ssr: true,
// });

export default function Layout({ children }) {
    const [isClosed, setClosed] = React.useState(true);
    return (
        <div id="app">
            <Nav />
            <main className="flex flex-col">{children}</main>
            <Footer />
            <Fab />

            <button
                tabIndex="1"
                id="reviewsBtnTab"
                className={`${isClosed ? "" : "hidden"} reviewsBtn`}
                aria-label="Open menu"
                title="Open menu"
                onClick={() => setClosed(false)}>
                <div className="text-base leading-6 font-medium pl-2 pr-1">
                    <p className="sm:text-xl font-semibold text-white text-center">R</p>
                    <p className="sm:text-xl font-semibold text-white text-center">E</p>
                    <p className="sm:text-xl font-semibold text-white text-center">V</p>
                    <p className="sm:text-xl font-semibold text-white text-center">I</p>
                    <p className="sm:text-xl font-semibold text-white text-center">E</p>
                    <p className="sm:text-xl font-semibold text-white text-center">W</p>
                    <p className="sm:text-xl font-semibold text-white text-center">S</p>
                </div>
            </button>

            {isClosed ? true : <Reviews isClosed={isClosed} setClosed={setClosed} />}
        </div>
    );
}
