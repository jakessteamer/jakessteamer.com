import React, { useEffect } from 'react';
import Link from 'next/link';

export default function NavMenu() {
    return (
        <ul className="list-reset lg:flex justify-end flex-1 text-left text-2xl font-bold leading-none">
            <li className="p-2">
                <Link href="/CarpetCleaning">
                    <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                        Carpet Cleaning
                    </a>
                </Link>
            </li>
            <li className="p-2">
                {/* <Link href="/#service-section">
                <a
                  href="#service-section"
                  className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                >
                  Services
                </a>
              </Link> */}
                <Link href="/PetStainAndOdorRemoval">
                    <a
                        href="/#service-section"
                        className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                        Pet Stain and Odor Removal
                    </a>
                </Link>
            </li>
            <li className="p-2">
                {/* <Link href="/#image-gallery-section">
                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                  Gallery
                </a>
              </Link> */}
                <a
                    href="/#img-gallery-section"
                    className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                    Gallery
                </a>
            </li>
            <li className="p-2">
                {/* <Link href="/#testimonials-section">
                <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                  Testimonials
                </a>
              </Link> */}
                <Link href="TileAndGroutCleaning">
                    <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                        Tile and Grout Cleaning
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
            <li className="p-2">
                <Link href="/UpholsteryCleaning">
                    <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                        Upholstery Cleaning
                    </a>
                </Link>
            </li>
            <li className="p-2">
                <Link href="/AirDuctCleaning">
                    <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                        Air Duct Cleaning
                    </a>
                </Link>
            </li>
            <li className="p-2">
                <Link href="/WaterDamageRestoration">
                    <a className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                        Emergency Flood
                    </a>
                </Link>
            </li>
        </ul>
    );
}
