/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useAppContext } from "../context/AppState";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);
    const router = useRouter();

    const { toggleNavMenu, isNavMenuOpen } = useAppContext();
    // const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    // const toggleNavMenu = () => {
    //     setIsNavMenuOpen(!isNavMenuOpen);
    // };
    const scrollYPosition = useRef(0);
    const [goingUp, setGoingUp] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (scrollYPosition.current > 10) {
                setGoingUp(false);
            }
            if (scrollYPosition.current < currentScrollY) {
                setGoingUp(true);
            }

            scrollYPosition.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);
    useEffect(() => {
        if (isNavMenuOpen) {
            setIsNavMenuOpen(!isNavMenuOpen);
        }
    }, [router.asPath]);
    //             className=" border-b  fixed w-full top-0 left-0 z-40 bg-gradient-to-r from-blue-coolBlue to-light-blue-500 overflow-hidden bg-transparent">

    return (
        <nav id="navbar" className="fixed w-full top-0 left-0 z-40  overflow-hidden bg-transparent">
            {/* space-y-4 lg:space-y-0 lg:space-x-10 */}
            <div className="container  mx-auto  lg:flex lg:items-center lg:justify-between py-2 px-4">
                {/* Mobile Nav Contents (Menu, Logo, Schedule btn)ADD w-full */}
                <div className="w-full flex justify-between">
                    {/* Navbar LeftSide */}
                    <div className="flex flex-1 items-center">
                        {/* Hamburger Menu */}
                        <div className="relative flex-none py-3 ">
                            <button
                                type="button"
                                className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white rounded-md xl:hidden"
                                onClick={toggleNavMenu}>
                                <span className="sr-only">Open main menu</span>
                                <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                                    <span
                                        aria-hidden="true"
                                        className={`${
                                            isNavMenuOpen ? "rotate-45" : "-translate-y-1.5"
                                        } block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}
                                    />
                                    <span
                                        aria-hidden="true"
                                        className={`${
                                            isNavMenuOpen ? "opacity-0" : ""
                                        } block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}
                                    />
                                    <span
                                        aria-hidden="true"
                                        className={`${
                                            isNavMenuOpen ? "-rotate-45" : "translate-y-1.5"
                                        } block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}
                                    />
                                </div>
                            </button>
                        </div>
                        {/* Company Logo or company name */}
                        <div className="flex items-center px-4 h-full">
                            <a href="jakessteamer.com">
                                <strong className="text-xl">Jake's&nbsp;Steamer</strong>
                            </a>
                        </div>
                    </div>
                    {/* Navbar Rightside */}
                    {/* Schedule Now Container */}
                    <div className="flex  justify-end items-center xl:hidden">
                        <a
                            href="https://book.housecallpro.com/book/Jakes-Steamer/e5fb241079164c83aa85e58e9aa1b12b"
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                            className="flex items-center justify-center h-12 px-4 text-sm font-semibold text-center rounded-md lg:h-10 scheduling-btn">
                            Schedule <span className=" xl:inline">&nbsp;Now!</span>
                        </a>
                        {/* <button
                            type="button"
                            aria-label="Color Mode"
                            className="flex justify-center p-3 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 transform -rotate-90">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </button> */}
                    </div>
                </div>
                {/*
                  Show/hide this element based on the dropdown state

                  Entering: "transition ease-out duration-100 transform"
                    From: "opacity-0 scale-95"
                    To: "opacity-100 scale-100"
                  Closing: "transition ease-in duration-75 transform"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95"
                */}
                {/* Navlinks Mobile Dropdown Menu space-y-4 */}
                <div
                    id="nav-links-container"
                    className={`${
                        isNavMenuOpen ? "flex fixed left-0 right-0 h-screen bg-blue" : "hidden"
                    } flex-col h-screen  lg:hidden`}>
                    <div id="nav-links-content" className="flex flex-col  lg:flex-row  lg:items-center text-white">
                        <a href="/" className="text-primary font-semibold px-4 py-4">
                            Home
                        </a>
                        <a href="/CarpetCleaning" className="text-white px-3 py-4">
                            Carpet&nbsp;Cleaning
                        </a>
                        <a href="/AirDuctCleaning" className="text-white px-3 py-4">
                            Air&nbsp;Duct&nbsp;Cleaning
                        </a>

                        <a href="/WaterDamageRestoration" className="text-white px-3 py-4">
                            Emergency&nbsp;Flood
                        </a>

                        <a href="/StainAndOdorRemoval" className="text-white px-3 py-4">
                            Pet&nbsp;Stain&nbsp;and&nbsp;Odor&nbsp;Removal
                        </a>

                        <a href="/TileAndGroutCleaning" className="text-white px-3 py-4">
                            Tile&nbsp;and&nbsp;Grout&nbsp;Cleaning
                        </a>
                        <a href="/UpholsteryCleaning" className="text-white px-3 py-4">
                            Upholstery&nbsp;Cleaning
                        </a>
                    </div>
                </div>
                {/* Navlinks Desktop Menu */}
                <div className="hidden  xl:flex xl:flex-row xl:items-center xl:justify-between xl:flex-1 ">
                    {/* Navlinks Desktop Menu Links Container space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center */}
                    <div className="flex flex-col lg:flex-row lg:items-center ">
                        <a href="/" className="text-blue font-semibold px-4 py-5">
                            Home
                        </a>
                        <a href="/CarpetCleaning" className="text-blue px-4 py-5">
                            <span className="2xl:hidden">Carpets</span>
                            <span className="hidden 2xl:inline">Carpet&nbsp;Cleaning</span>
                        </a>
                        <a href="/AirDuctCleaning" className="text-blue px-4 py-5">
                            <span className="2xl:hidden">Air&nbsp;Ducts</span>
                            <span className="hidden 2xl:inline">Air&nbsp;Duct&nbsp;Cleaning</span>
                        </a>

                        <a href="/WaterDamageRestoration" className="text-blue px-4 py-5">
                            Emergency&nbsp;Flood
                        </a>

                        <a href="/StainAndOdorRemoval" className="text-blue px-4 py-5">
                            <span className="2xl:hidden">Stain&nbsp;and&nbsp;Odor</span>
                            <span className="hidden 2xl:inline">Pet&nbsp;Stain&nbsp;and&nbsp;Odor&nbsp;Removal</span>
                        </a>

                        <a href="/TileAndGroutCleaning" className="text-blue px-4 py-5">
                            <span className="2xl:hidden">Tile&nbsp;and&nbsp;Grout</span>
                            <span className="hidden 2xl:inline">Tile&nbsp;and&nbsp;Grout&nbsp;Cleaning</span>
                        </a>
                        <a href="/UpholsteryCleaning" className="text-blue px-4 py-5">
                            <span className="2xl:hidden">Upholstery</span>
                            <span className="hidden 2xl:inline">Upholstery&nbsp;Cleaning</span>
                        </a>
                    </div>
                    {/* Navlinks Desktop Menu Schedule Btn */}
                    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
                        <button
                            type="button"
                            aria-label="Color Mode"
                            className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 transform -rotate-90">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </button>
                        <a
                            href="https://book.housecallpro.com/book/Jakes-Steamer/e5fb241079164c83aa85e58e9aa1b12b"
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                            className="flex items-center justify-center h-12 px-4 text-sm font-semibold text-center rounded-md lg:h-10 scheduling-btn">
                            Schedule <span className="lg:hidden xl:inline">&nbsp;Now!</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
