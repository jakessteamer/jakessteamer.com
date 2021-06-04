/* eslint-disable react/button-has-type */
import React, { useEffect, useCallback } from "react";
import Iframe from "react-iframe";
import LoadingSpinner from "./LoadingSpinner";

export default function Modal({ companyID, modalOpen, setModalOpen, loading }) {
    // const [state, setState] = React.useState(null);
    // const controller = new AbortController();
    // const { signal } = controller;
    // const url = `https://client.housecallpro.com/reviews/reviews/${companyID}/`;

    const handleEscape = useCallback((event) => {
        if (event.keyCode === 27) setModalOpen(false);
    }, []);
    // useEffect(() => {
    //     setShowContent(({ loading }) => !loading);
    // }, [loading]);
    useEffect(() => {
        if (modalOpen) document.addEventListener("keydown", handleEscape, false);
        return () => {
            document.removeEventListener("keydown", handleEscape, false);
        };
    }, [handleEscape, modalOpen]);
    return (
        <>
            {/* <!-- Fill entire parent --> */}
            <div
                className=" focus:outline-none fixed inset-0 z-50 flex items-center flex-grow overflow-x-hidden overflow-y-auto outline-none"
                key={loading}>
                <div className="h-5/6 relative flex justify-center w-5/6 mx-auto">
                    {/* content */}
                    <div className=" focus:outline-none relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none">
                        {/* header */}
                        {/* <div className="border-blueGray-200 flex items-start justify-between p-5 border-b border-solid rounded-t">
                                    <h3 className="text-3xl font-semibold">Modal Title</h3>
                                    <button
                                        className="opacity-5 focus:outline-none float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="opacity-5 focus:outline-none block w-6 h-6 text-2xl text-black bg-transparent outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div> */}
                        {/* body */}
                        <div className="h-90 relative">
                            {loading ? (
                                <LoadingSpinner />
                            ) : (
                                <Iframe
                                    height="100%"
                                    width="100%"
                                    className="rounded-lg"
                                    url={`https://client.housecallpro.com/reviews/reviews/${companyID}/`}
                                />
                            )}
                            {/* footer */}
                            <div className="border-blueGray-200 modal-close-btn flex items-center justify-center px-6 border-t border-solid rounded-md">
                                <button
                                    className="background-transparent focus:outline-none brand-blue px-6 py-2 text-sm font-bold uppercase transition-all duration-150 ease-linear"
                                    type="button"
                                    onClick={() => setModalOpen(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
    );
}
