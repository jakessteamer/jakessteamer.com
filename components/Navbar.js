/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
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
        <nav id="navbar" className="fixed w-full z-40 top-0 text-white bg-white">
            <div className="w-full container mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <Link href="/">
                        <a>
                            <Image
                                src="/images/logos/jakessteamer-nav-logo.png"
                                width={182}
                                height={112}
                                alt="JAKE'S STEAMER"
                                className="logo"
                            />
                        </a>
                    </Link>
                </div>
                <div className="block lg:hidden p-2 mr-4">
                    <button
                        id="nav-toggle"
                        type="button"
                        className="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        onClick={toggleNavMenu}>
                        <svg
                            className="h-12 w-12 brand-blue"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                {/* Render Nav onClick */}
                <div
                    className={`${
                        isNavOpen
                            ? 'w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:bg-transparent text-black p-2 lg:p-0 z-20 bg-white'
                            : 'w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-2 lg:p-0 z-20 hidden'
                    } text-center w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 text-left text-xl font-bold leading-none">
                        <li className="p-1">
                            <Link href="/CarpetCleaning">
                                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-2">
                                    Carpet Cleaning
                                </a>
                            </Link>
                        </li>
                        <li className="p-1">
                            {/* <Link href="/#service-section">
                <a
                  href="#service-section"
                  className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-2"
                >
                  Services
                </a>
              </Link> */}
                            <Link href="/StainAndOdorRemoval">
                                <a
                                    href="/#service-section"
                                    className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-2">
                                    Pet Stain and Odor Removal
                                </a>
                            </Link>
                        </li>
                        <li className="p-1">
                            {/* <Link href="/#testimonials-section">
                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-2">
                  Testimonials
                </a>
              </Link> */}
                            <Link href="/TileAndGroutCleaning">
                                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-2">
                                    Tile and Grout Cleaning
                                </a>
                            </Link>
                        </li>
                        {/* <li className="mr-3">
              <Link href="#contact-section">
                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-2">
                  Contact
                </a>
              </Link>
            </li> */}
                        <li className="p-1">
                            <Link href="/UpholsteryCleaning">
                                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-2">
                                    Upholstery Cleaning
                                </a>
                            </Link>
                        </li>
                        <li className="p-1">
                            <Link href="/AirDuctCleaning">
                                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-2">
                                    Air Duct Cleaning
                                </a>
                            </Link>
                        </li>
                        <li className="p-1">
                            <Link href="/WaterDamageRestoration">
                                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-2">
                                    Emergency Flood
                                </a>
                            </Link>
                        </li>
                        <li className="p-2">
                            <a
                                id="scheduling-btn"
                                href="https://book.housecallpro.com/book/Jakes-Steamer/e5fb241079164c83aa85e58e9aa1b12b"
                                className="inline-block bg-brand-blue text-white">
                                Schedule Carpet Cleaning
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
