/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";
import PlausibleAnalytics from "next-plausible";
import Reviews from "./Reviews";
import Navbar from "./Navbar";
import Fab from "./Fab";
import Footer from "./Footer";
import Modal from "./Modal";

// const Reviews = dynamic(() => import(/* webpackChunkName: 'reviews' */ "../components/Reviews"), {
//     ssr: true,
// });

export default function Layout({ children }) {
    const [isClosed, setClosed] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [companyID, setCompanyID] = useState(null);
    const [alreadyFetchedReviews, setAlreadyFetchedReviews] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    let controller;
    const fetchReviews = async () => {
        try {
            setLoading(true);
            controller = new AbortController();
            const { signal } = controller;
            const response = await fetch("https://pro.housecallpro.com/alpha/organization/reviews/settings", {
                method: "GET",
                headers: { Authorization: `Token e5fb241079164c83aa85e58e9aa1b12b` },
                signal,
            });

            if (!response.ok) {
                // this will be handled by our `catch` block below
                throw new Error(`Request Error: ${response.status}`);
            }
            const responseData = await response.json();
            const { uuid } = responseData;
            setCompanyID(uuid);
            setAlreadyFetchedReviews(true);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(e.message);
            controller.abort();
        }
    };
    const handleModalClick = () => {
        if (!modalOpen) {
            setModalOpen(true);
        }
        if (!alreadyFetchedReviews) {
            fetchReviews();
        }
    };

    return (
        <PlausibleAnalytics domain="jakessteamer.com">
            <Navbar />
            <main className="flex flex-col flex-nowrap">
                {children}
                <Footer />
            </main>

            <Fab />

            <button
                tabIndex="1"
                id="reviewsBtnTab"
                className={`${modalOpen ? "hidden" : ""} reviewsBtn`}
                aria-label="Open menu"
                title="Open menu"
                onClick={() => handleModalClick()}>
                <div className="pl-2 pr-1 text-base font-medium leading-6">
                    <p className="sm:text-xl font-semibold text-center text-white">R</p>
                    <p className="sm:text-xl font-semibold text-center text-white">E</p>
                    <p className="sm:text-xl font-semibold text-center text-white">V</p>
                    <p className="sm:text-xl font-semibold text-center text-white">I</p>
                    <p className="sm:text-xl font-semibold text-center text-white">E</p>
                    <p className="sm:text-xl font-semibold text-center text-white">W</p>
                    <p className="sm:text-xl font-semibold text-center text-white">S</p>
                </div>
            </button>

            {/* {isClosed ? true : <Reviews isClosed={isClosed} setClosed={setClosed} />} */}
            {modalOpen ? (
                <Modal
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    companyID={companyID}
                    loading={loading}
                    key={loading}
                />
            ) : null}
        </PlausibleAnalytics>
    );
}
