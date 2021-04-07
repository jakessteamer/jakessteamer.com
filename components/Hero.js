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
                src="/images/kid-and-mom-on-carpet-lg.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="kid and mom on clean carpet"
            />
            <header className="grid grid-rows-2 items-center h-screen ">
                {/* <Image
                className="hero-bg-img z-0"
                src="/images/kid-and-mom-on-carpet-lg.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="kid and mom on clean carpet"
            /> */}
                <h1 className="z-10 text-5xl font-bold leading-tight text-center hero-headline">
                    Cleaner. Happier. Healthier.
                </h1>
                <div className="z-10 text-center">
                    <p id="hero-subheadline" className="leading-normal font-bold text-4xl mb-8">
                        The Carpet Cleaning Professionals
                    </p>
                    <div className=" text-4xl">
                        <h2 className="font-bold leading-tight hero-headline">
                            Call Jake's Steamer!
                        </h2>
                        <a
                            className="font-bold leading-tight hero-headline brand-blue"
                            href="tel:+14328474600">
                            432-847-4600
                        </a>
                    </div>
                </div>
            </header>
            <SVGDivider />
        </>
    );
}
