import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Test() {
  return (
    <article className="relative max-w-3xl mx-auto px-6 prose lg:prose-lg">
      <header className="pt-6 ">
        <div className="text-center">
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Carpet Cleaning
            </h1>
          </div>
        </div>
      </header>
      <div className="mx-auto">
        {/* {children} */}
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/carpets/area-rug-1.jpg" alt="" />
        </div>
        <h2 className="content-title">How to Clean Your Carpets</h2>
        <p>
          Steaming your carpet on a regular basis is the best way to clean
          deeply, and remove stubborn stains. With a steam cleaning machine, hot
          water is forced through the vacuum hose deep into the carpet backing.
          This hot water dissolves stubborn, ground-in stains, dust mites and
          other allergens trapped deep within the carpet fibers. In addition to
          dislodging dirt and allergens, steaming also kills mold spores,
          bacteria and other pathogens. Steaming your carpet will leave it
          cleaner than a typical cleaning method, and with reduced allergens
          that may be harmful to your family’s health.
        </p>
      </div>
      <footer>
        <h2 className="content-title">References</h2>
        <ul className="reference-list">
          <li className="reference">
            <a
              href="https://www.epa.gov/iaq-schools/controlling-pollutants-and-sources-indoor-air-quality-design-tools-schools#Carpet"
              rel="nofollow">
              Controlling Pollutants and Sources: Indoor Air Quality Design
              Tools for Schools. US EPA
              https://www.epa.gov/iaq-schools/controlling-pollutants-and-sources-indoor-air-quality-design-tools-schools
              (2014).
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.epa.gov/indoor-air-quality-iaq/building-air-quality-guide-building-owners-and-facility-managers-printable"
              rel="nofollow">
              Indoor Air Quality Tools for Schools.
            </a>
          </li>
        </ul>
      </footer>
    </article>
  );
}
