/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import useToggle from './useToggle';

export default function SimpleNavLinkDropdown() {
    const [isToggled, setToggled] = useToggle(false);
    return (
        <div className="dropdown inline-block relative w-full" onClick={setToggled}>
            <button className="font-bold text-2xl brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                Services
            </button>
            {isToggled ? (
                <ul className="dropdown-content absolute right-0 pt-1 bg-brand-blue">
                    <li>
                        <Link href="/">
                            <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/CarpetCleaning">
                            <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                Carpet Cleaning
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/UpholsteryCleaning">
                            <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                Upholstery Cleaning
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/PetStainAndOdorRemoval">
                            <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                Pet Stain and Odor Removal
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/TileAndWoodFloorRestoration">
                            <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                Tile and Wood Floor Restoration
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/WaterDamageRestoration">
                            <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                Water Damage Restoration
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/AirDuctCleaning">
                            <a className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                Airduct Cleaning
                            </a>
                        </Link>
                    </li>
                </ul>
            ) : null}
        </div>
    );
}
