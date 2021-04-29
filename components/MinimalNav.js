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
import ServicesNavLink from './ServicesNavLink';
import SimpleNavLinkDropdown from './SimpleNavLinkDropdown';
import Modal from './Modal';

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
            }`}>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <a className="lg:pl-12">
                        <Image
                            src="/images/logos/jakessteamer-logo-transparent.png"
                            width={182}
                            height={112}
                            alt="JAKE'S STEAMER"
                            className="logo"
                        />
                    </a>
                </div>
                <div>
                    <button className="bg-blue-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600">
                        Button
                    </button>
                </div>
            </div>
        </nav>
    );
}
