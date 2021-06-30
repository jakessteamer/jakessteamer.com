/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePlausible } from "next-plausible";
import { useRouter } from "next/router";

export default function Navbar() {
    const plausible = usePlausible();
    const router = useRouter();

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };
    useEffect(() => {
        if (isNavOpen) {
            setIsNavOpen(!isNavOpen);
        }
    }, [router.asPath]);

    return (
        <nav className="z-50 flex flex-col flex-wrap w-screen">
            <div className="py-2 bg-img bg-gradient-to-r from-indigo-600 to-light-blue-500 overflow-hidden">
                <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <svg
                        fill="none"
                        viewBox="0 0 848 513"
                        className="sm:hidden absolute right-1/2 transform translate-x-[235px] translate-y-[-90px] w-[848px] h-[513px]">
                        <path
                            fill="#fff"
                            fillOpacity="0.1"
                            d="M424 0C310.94 0 240.26 56.944 212 170.811c42.4-56.944 91.86-78.295 148.4-64.054 32.266 8.114 55.311 31.686 80.836 57.777 41.552 42.489 89.676 91.683 194.764 91.683 113.06 0 183.74-56.944 212-170.811-42.4 56.944-91.86 78.295-148.4 64.054-32.245-8.114-55.311-31.686-80.836-57.777C577.212 49.193 529.088 0 424 0zM212 256.217c-113.06 0-183.74 56.944-212 170.812 42.4-56.945 91.86-78.296 148.4-64.055 32.245 8.114 55.311 31.686 80.836 57.777 41.552 42.49 89.676 91.683 194.764 91.683 113.06 0 183.74-56.944 212-170.811-42.4 56.944-91.86 78.296-148.4 64.054-32.245-8.113-55.311-31.685-80.836-57.777-41.552-42.489-89.676-91.683-194.764-91.683z"
                        />
                        <path
                            stroke="#fff"
                            strokeOpacity="0.2"
                            d="M360.522 106.272l-.122.485.122-.485zm0 0c32.383 8.143 55.504 31.778 80.966 57.805l.105.107-.318.312.318-.311c20.78 21.248 43.155 44.121 73.45 61.692 30.282 17.564 68.498 29.84 120.957 29.84 56.444 0 102.26-14.213 137.486-42.595 34.73-27.982 59.217-69.776 73.424-125.433-20.822 27.449-43.355 46.428-67.609 56.898-24.842 10.723-51.456 12.503-79.823 5.358-32.389-8.15-55.544-31.819-81.032-57.872l-.039-.04.357-.35-.357.35c-20.78-21.25-43.155-44.122-73.449-61.693C514.675 12.777 476.459.5 424 .5c-56.444 0-102.26 14.213-137.486 42.595-34.73 27.982-59.217 69.776-73.424 125.434 20.822-27.45 43.355-46.429 67.609-56.898 24.842-10.723 51.456-12.504 79.823-5.359zm45.885 241.978l.286-.28-.286.28.039.04c25.488 26.053 48.643 49.722 81.032 57.872 28.367 7.145 54.981 5.365 79.823-5.358 24.254-10.47 46.787-29.449 67.609-56.898-14.207 55.657-38.694 97.452-73.424 125.433-35.226 28.382-81.042 42.595-137.486 42.595-52.459 0-90.675-12.276-120.957-29.84-30.295-17.571-52.67-40.443-73.45-61.692l-.337.329.337-.329-.039-.041c-25.488-26.053-48.643-49.722-81.032-57.872-28.367-7.145-54.98-5.364-79.823 5.359-24.254 10.469-46.787 29.448-67.609 56.898 14.207-55.657 38.694-97.452 73.424-125.434C109.74 270.93 155.556 256.717 212 256.717c52.459 0 90.675 12.277 120.957 29.841 30.295 17.57 52.67 40.443 73.45 61.692z"
                        />
                        <path
                            stroke="url(#mark-mobile__paint0_linear)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M647.5 120c-6-4.5-13.5-12.5-13.5-12.5"
                        />
                        <path
                            stroke="url(#mark-mobile__paint1_linear)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M212 256c11.118 0 21.598.551 31.5 1.586"
                        />
                        <path
                            stroke="url(#mark-mobile__paint2_linear)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M632.5 255.793c-11.118 0-21.598-.551-31.5-1.586"
                        />
                        <defs>
                            <linearGradient
                                id="mark-mobile__paint0_linear"
                                x1="648.5"
                                x2="636.5"
                                y1="119.803"
                                y2="108"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff" />
                                <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="mark-mobile__paint1_linear"
                                x1="220.5"
                                x2="245"
                                y1="256.783"
                                y2="257.783"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff" />
                                <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="mark-mobile__paint2_linear"
                                x1="624"
                                x2="599.5"
                                y1="255.01"
                                y2="254.01"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff" />
                                <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg
                        fill="none"
                        viewBox="0 0 848 513"
                        className="hidden sm:block absolute right-1/2 transform translate-x-[-150px] translate-y-[-250px] w-[848px] h-[513px]">
                        <path
                            fill="#fff"
                            fillOpacity="0.1"
                            d="M424 0C310.94 0 240.26 56.944 212 170.811c42.4-56.944 91.86-78.295 148.4-64.054 32.266 8.114 55.311 31.686 80.836 57.777 41.552 42.489 89.676 91.683 194.764 91.683 113.06 0 183.74-56.944 212-170.811-42.4 56.944-91.86 78.295-148.4 64.054-32.245-8.114-55.311-31.686-80.836-57.777C577.212 49.193 529.088 0 424 0zM212 256.217c-113.06 0-183.74 56.944-212 170.812 42.4-56.945 91.86-78.296 148.4-64.055 32.245 8.114 55.311 31.686 80.836 57.777 41.552 42.49 89.676 91.683 194.764 91.683 113.06 0 183.74-56.944 212-170.811-42.4 56.944-91.86 78.296-148.4 64.054-32.245-8.113-55.311-31.685-80.836-57.777-41.552-42.489-89.676-91.683-194.764-91.683z"
                        />
                        <path
                            stroke="#fff"
                            strokeOpacity="0.2"
                            d="M360.522 106.272l-.122.485.122-.485zm0 0c32.383 8.143 55.504 31.778 80.966 57.805l.105.107-.318.312.318-.311c20.78 21.248 43.155 44.121 73.45 61.692 30.282 17.564 68.498 29.84 120.957 29.84 56.444 0 102.26-14.213 137.486-42.595 34.73-27.982 59.217-69.776 73.424-125.433-20.822 27.449-43.355 46.428-67.609 56.898-24.842 10.723-51.456 12.503-79.823 5.358-32.389-8.15-55.544-31.819-81.032-57.872l-.039-.04.357-.35-.357.35c-20.78-21.25-43.155-44.122-73.449-61.693C514.675 12.777 476.459.5 424 .5c-56.444 0-102.26 14.213-137.486 42.595-34.73 27.982-59.217 69.776-73.424 125.434 20.822-27.45 43.355-46.429 67.609-56.898 24.842-10.723 51.456-12.504 79.823-5.359zm45.885 241.978l.286-.28-.286.28.039.04c25.488 26.053 48.643 49.722 81.032 57.872 28.367 7.145 54.981 5.365 79.823-5.358 24.254-10.47 46.787-29.449 67.609-56.898-14.207 55.657-38.694 97.452-73.424 125.433-35.226 28.382-81.042 42.595-137.486 42.595-52.459 0-90.675-12.276-120.957-29.84-30.295-17.571-52.67-40.443-73.45-61.692l-.337.329.337-.329-.039-.041c-25.488-26.053-48.643-49.722-81.032-57.872-28.367-7.145-54.98-5.364-79.823 5.359-24.254 10.469-46.787 29.448-67.609 56.898 14.207-55.657 38.694-97.452 73.424-125.434C109.74 270.93 155.556 256.717 212 256.717c52.459 0 90.675 12.277 120.957 29.841 30.295 17.57 52.67 40.443 73.45 61.692z"
                        />
                        <path
                            stroke="url(#mark-left__paint0_linear)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M212 256c11.118 0 21.598.551 31.5 1.586"
                        />
                        <path
                            stroke="url(#mark-left__paint1_linear)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M632.5 255.793c-11.118 0-21.598-.551-31.5-1.586"
                        />
                        <defs>
                            <linearGradient
                                id="mark-left__paint0_linear"
                                x1="220.5"
                                x2="245"
                                y1="256.783"
                                y2="257.783"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff" />
                                <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="mark-left__paint1_linear"
                                x1="624"
                                x2="599.5"
                                y1="255.01"
                                y2="254.01"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff" />
                                <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg
                        fill="none"
                        viewBox="0 0 848 513"
                        className="hidden sm:block absolute left-1/2 transform translate-x-[330px] translate-y-[-357px] w-[848px] h-[513px]">
                        <path
                            fill="#fff"
                            fillOpacity="0.1"
                            d="M424 0C310.94 0 240.26 56.944 212 170.811c42.4-56.944 91.86-78.295 148.4-64.054 32.266 8.114 55.311 31.686 80.836 57.777 41.552 42.489 89.676 91.683 194.764 91.683 113.06 0 183.74-56.944 212-170.811-42.4 56.944-91.86 78.295-148.4 64.054-32.245-8.114-55.311-31.686-80.836-57.777C577.212 49.193 529.088 0 424 0zM212 256.217c-113.06 0-183.74 56.944-212 170.812 42.4-56.945 91.86-78.296 148.4-64.055 32.245 8.114 55.311 31.686 80.836 57.777 41.552 42.49 89.676 91.683 194.764 91.683 113.06 0 183.74-56.944 212-170.811-42.4 56.944-91.86 78.296-148.4 64.054-32.245-8.113-55.311-31.685-80.836-57.777-41.552-42.489-89.676-91.683-194.764-91.683z"
                        />
                        <path
                            stroke="#fff"
                            strokeOpacity="0.2"
                            d="M360.522 106.272l-.122.485.122-.485zm0 0c32.383 8.143 55.504 31.778 80.966 57.805l.105.107-.318.312.318-.311c20.78 21.248 43.155 44.121 73.45 61.692 30.282 17.564 68.498 29.84 120.957 29.84 56.444 0 102.26-14.213 137.486-42.595 34.73-27.982 59.217-69.776 73.424-125.433-20.822 27.449-43.355 46.428-67.609 56.898-24.842 10.723-51.456 12.503-79.823 5.358-32.389-8.15-55.544-31.819-81.032-57.872l-.039-.04.357-.35-.357.35c-20.78-21.25-43.155-44.122-73.449-61.693C514.675 12.777 476.459.5 424 .5c-56.444 0-102.26 14.213-137.486 42.595-34.73 27.982-59.217 69.776-73.424 125.434 20.822-27.45 43.355-46.429 67.609-56.898 24.842-10.723 51.456-12.504 79.823-5.359zm45.885 241.978l.286-.28-.286.28.039.04c25.488 26.053 48.643 49.722 81.032 57.872 28.367 7.145 54.981 5.365 79.823-5.358 24.254-10.47 46.787-29.449 67.609-56.898-14.207 55.657-38.694 97.452-73.424 125.433-35.226 28.382-81.042 42.595-137.486 42.595-52.459 0-90.675-12.276-120.957-29.84-30.295-17.571-52.67-40.443-73.45-61.692l-.337.329.337-.329-.039-.041c-25.488-26.053-48.643-49.722-81.032-57.872-28.367-7.145-54.98-5.364-79.823 5.359-24.254 10.469-46.787 29.448-67.609 56.898 14.207-55.657 38.694-97.452 73.424-125.434C109.74 270.93 155.556 256.717 212 256.717c52.459 0 90.675 12.277 120.957 29.841 30.295 17.57 52.67 40.443 73.45 61.692z"
                        />
                        <path
                            stroke="url(#mark-right__paint0_linear)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M148.4 362.974c-20.178-5.082-39.454-5.631-57.83-1.648"
                        />
                        <defs>
                            <linearGradient
                                id="mark-right__paint0_linear"
                                x1="106.175"
                                x2="151.193"
                                y1="360.811"
                                y2="362.062"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff" />
                                <stop offset="1" stopColor="#fff" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="relative flex justify-between items-center">
                        <div className="text-sm font-medium text-white">
                            <img
                                className=""
                                src="/images/logos/jakessteamer-company-logo-variant-1-150w-50h.png"
                                alt=""
                            />
                        </div>
                        <div className="text-xl font-medium text-white">432-788-9220</div>
                    </div>
                </div>
            </div>
            {/* <div className="housecall-bar w-full  h-10 flex justify-center items-center">
                <div className="schedule-now-btn">
                    <a
                        href="https://book.housecallpro.com/book/Jakes-Steamer/e5fb241079164c83aa85e58e9aa1b12b"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="menu">
                        <span>Schedule Now!</span>
                    </a>
                </div>
            </div> */}
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between mt-1.5 h-14">
                <a className="relative h-full" href="#">
                    <img className="" src="/images/logos/jakessteamer-company-logo-variant-1-150w-50h.png" alt="" />
                </a>
                <div className="block lg:hidden">
                    <button id="nav-toggle" type="button" className="menu-btn-container" onClick={toggleNavMenu}>
                        <div className="menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="5.5 -12.5 70 70"
                                className="hamburger">
                                <title>Menu</title>
                                <rect className="line_1" width="83" height="8" fill="#fff" rx="3" />
                                <rect className="line_2" width="83" height="8" y="19" fill="#fff" rx="3" />
                                <rect className="line_3" width="83" height="8" y="38" fill="#fff" rx="3" />
                            </svg>
                            <span>Menu</span>
                        </div>
                    </button>
                    {/* <button
                        id="nav-toggle"
                        type="button"
                        className="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        onClick={toggleNavMenu}>
                        <svg className="h-12 w-12 brand-blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button> */}
                </div>
                {/* Render Nav onClick */}
                <div
                    className={`${
                        isNavOpen
                            ? "flex-grow lg:flex lg:items-center lg:w-auto z-20 h-screen"
                            : "flex-grow lg:flex lg:items-center lg:w-auto    z-20 hidden"
                    } text-center w-full lg:inline-flex lg:flex-grow lg:w-auto bg-white`}
                    id="nav-content">
                    <ul className="relative h-full list-reset lg:flex justify-around flex-1 text-left font-bold">
                        <li className=" ">
                            <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline  px-2">
                                <span className="block">Carpet</span>
                                <span className="block">Cleaning</span>
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="/#service-section"
                                className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline  px-2">
                                <span className="block">Air Duct</span>
                                <span className="block">Cleaning</span>
                            </a>
                        </li>
                        <li className="">
                            <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline  px-2">
                                <span className="block">Emergency</span>
                                <span className="block">Flood</span>
                            </a>
                        </li>
                        <li className="">
                            <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline  px-2">
                                <span className="block">Pet Stain</span>
                                <span className="block">Odor Removal</span>
                            </a>
                        </li>
                        <li className="">
                            <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline  px-2">
                                <span className="block">Tile & Grout</span>
                                <span className="block">Cleaning</span>
                            </a>
                        </li>
                        <li className="">
                            <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline  px-2">
                                <span className="block">Upholstery</span>
                                <span className="block">Cleaning</span>
                            </a>
                        </li>

                        <li className="menu-btn-container block lg:hidden">
                            <a
                                href="https://book.housecallpro.com/book/Jakes-Steamer/e5fb241079164c83aa85e58e9aa1b12b"
                                rel="noopener noreferrer nofollow"
                                target="_blank"
                                className="menu">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="5.5 -12.5 70 70"
                                    className="hamburger">
                                    <rect className="line_1" width="83" height="8" fill="#333" rx="3" />
                                    <rect className="line_2" width="83" height="8" y="19" fill="#333" rx="3" />
                                    <rect className="line_3" width="83" height="8" y="38" fill="#333" rx="3" />
                                </svg>
                                <span>Menu</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
