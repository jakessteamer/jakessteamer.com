/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import SVGDivider from './SVGDivider';

export default function Hero() {
    return (
        <>
            <Image
                className="hero-bg-img z-0"
                src="/images/hero/kid-and-mom-on-carpet-default-lg-97-opacity.png"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="kid and mom on clean carpet"
            />
            <header className="grid grid-rows-2 grid-cols-1 items-center h-screen ">
                <h1 className="z-10 text-4xl sm:text-6xl lg:text-7xl  leading-none font-extrabold tracking-tight text-center hero-headline">
                    Cleaner. Happier. Healthier.
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold z-10 mt-36 md:mt-48 text-center hero-headline">
                    The Carpet Cleaning Professionals
                </h2>

                {/* <div className=" text-4xl z-10 text-center">
                    <h2 className="font-bold leading-tight hero-headline">
                        The Carpet Cleaning Professionals
                    </h2>
                </div> */}
            </header>
            <SVGDivider />
            <div className="text-center text-4xl">
                <h2 className="font-bold leading-tight hero-headline">Call Jake's Steamer!</h2>
                <a
                    className="font-bold leading-tight hero-headline brand-blue"
                    href="tel:+14328474600">
                    432-847-4600
                </a>
            </div>
        </>
    );
}
