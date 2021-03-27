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

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
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
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);
  const navigateToSection = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(window.location.hash);
      if (element) {
        // Smooth scroll to that element (Align to top)
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  };

  return (
    <nav
      id="header"
      className={`${
        goingUp || active
          ? 'fixed w-full z-40 top-0 text-white bg-white'
          : 'fixed w-full z-40 top-0 text-white'
      }`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className="lg:pl-20">
            <Image
              src="/images/logos/jakessteamer-logo-transparent.png"
              width={182}
              height={112}
              alt="JAKE'S STEAMER"
              className="logo"
            />
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            type="button"
            className="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={handleClick}
          >
            <svg
              className="h-10 w-10 brand-blue"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {/* Render Nav onClick */}
        <div
          className={`${
            active
              ? 'w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-white'
              : 'w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 hidden'
          } text-center w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center text-xl font-bold leading-none">
            <li className="mr-3">
              <Link href="/">
                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="#services-section">
                <a
                  onClick={navigateToSection}
                  className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                >
                  Services
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="#image-gallery-section">
                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                  Gallery
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/#testimonials-section">
                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                  Testimonials
                </a>
              </Link>
            </li>
            {/* <li className="mr-3">
              <Link href="#contact-section">
                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                  Contact
                </a>
              </Link>
            </li> */}
            <li className="mr-3">
              <Link href="#contact-section">
                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                  Careers
                </a>
              </Link>
            </li>
            <li className="mr-3">
              {/* <button
                  id="SOIBTN_JakessSteamer"
                  type="button"
                  className="modal-open inline-block border border-brand-blue bg-brand-blue text-white uppercase rounded-full py-2 px-4 transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Schedule Carpet Cleaning
                </button> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
