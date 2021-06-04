/* eslint-disable react/button-has-type */
import React, { useEffect, useCallback } from "react";
import Iframe from "react-iframe";
import LoadingSpinner from "./LoadingSpinner";

export default function Modal({ companyID, modalOpen, setModalOpen, loading }) {
    // const [state, setState] = React.useState(null);
    // const controller = new AbortController();
    // const { signal } = controller;
    // const url = `https://client.housecallpro.com/reviews/reviews/${companyID}/`;
    const iframe = "https://www.youtube.com/watch?v=NX_NW6bt6_s";
    const handleEscape = useCallback((event) => {
        if (event.keyCode === 27) setModalOpen(false);
    }, []);
    useEffect(() => {
        if (modalOpen) document.addEventListener("keydown", handleEscape, false);
        return () => {
            document.removeEventListener("keydown", handleEscape, false);
        };
    }, [handleEscape, modalOpen]);
    return (
        <>
            {modalOpen ? (
                <>
                    {/* <!-- Fill entire parent --> */}
                    <div className=" focus:outline-none fixed inset-0 z-50 flex items-center flex-grow overflow-x-hidden overflow-y-auto outline-none">
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
                                <div className="relative flex-auto">
                                    {/* <Iframe
                                        className="w-full h-full"
                                        scrolling="no"
                                        title="Thinking In React: Tailwind"
                                        src="https://codepen.io/andrewriveradev/embed/KKWQrbx?height=265&theme-id=light&default-tab=js,result"
                                        frameborder="no"
                                        loading="lazy"
                                        allowtransparency="true"
                                        allowFullScreen="true">
                                        See the Pen{" "}
                                        <a href="https://codepen.io/andrewriveradev/pen/KKWQrbx">
                                            Thinking In React: Tailwind
                                        </a>{" "}
                                        by andrewriveradev (
                                        <a href="https://codepen.io/andrewriveradev">@andrewriveradev</a>) on{" "}
                                        <a href="https://codepen.io">CodePen</a>.
                                    </Iframe> */}

                                    <Iframe
                                        height="100%"
                                        width="100%"
                                        className="rounded-lg"
                                        url={`https://client.housecallpro.com/reviews/reviews/${companyID}/`}
                                    />
                                </div>
                                {/* footer */}
                                <div className="border-blueGray-200 flex items-center justify-center px-6 border-t border-solid rounded-md">
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
                    <div className="fixed inset-0 z-40 bg-black opacity-25" />
                </>
            ) : (
                <LoadingSpinner />
            )}
        </>
    );
}
