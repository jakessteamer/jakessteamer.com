/* eslint-disable react/button-has-type */
import React from "react";
import dynamic from "next/dynamic";

const Reviews = dynamic(() => import(/* webpackChunkName: 'reviews' */ "../components/Reviews"), {
    ssr: true,
});

export default function Layout({ children }) {
    const [isClosed, setClosed] = React.useState(true);
    return (
        <div className="flex text-black">
            <main className="flex-grow flex flex-col min-h-screen">
                <header className="bg-white border-b h-10 flex items-center justify-center">
                    <div className="flex flex-grow items-center justify-between px-3">
                        <h1 className="text-lg">Home</h1>
                        <button className="text-blue-700 underline">Log in</button>
                    </div>
                </header>
                {children}
            </main>

            <button
                tabIndex="1"
                className={`${isClosed ? "" : "hidden"} fixed top-0 right-0 bottom-0 m-auto w-10`}
                aria-label="Open menu"
                title="Open menu"
                onClick={() => setClosed(false)}>
                <div className="border border-solid border-black rounded-sm px-2">
                    <p className="text-center">R</p>
                    <p className="text-center">E</p>
                    <p className="text-center">V</p>
                    <p className="text-center">I</p>
                    <p className="text-center">E</p>
                    <p className="text-center">W</p>
                    <p className="text-center">S</p>
                </div>
            </button>

            {isClosed ? true : <Reviews isClosed={isClosed} setClosed={setClosed} />}
        </div>
    );
}
