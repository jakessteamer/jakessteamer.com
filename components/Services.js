/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="#services-section" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              We Would Love To Help
            </h1>
            <div className="h-1 w-1/2 bg-brand-blue rounded h-underline" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-600">
            We are committed to making sure that your home is as healthy and
            clean as possible. Your home or office is where you live and work,
            where your kids play, where your pets nap, which is why we take
            every single client interaction as if it is the single most
            important job we have ever done.{' '}
            <b className="text-gray-800">
              Questions? Quote? Call Jake's Steamer The Carpet Cleaner today!
            </b>
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/carpets/carpet-5-640x640-md.jpg"
                alt="Carpet Cleaning Service"
              />

              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Carpets and Area Rugs
              </h2>
              <p className="leading-relaxed text-base">
                We specialize in carpet cleaning. Over the last 15+ years we
                have removed countless stains and brought back life into many
                carpets. Our customers trust us with their homes and businesses
                and in return we have guarenteed piece of mind and 100%
                satisfaction.
              </p>

              <Link href="/Carpets">
                <a className="border-2 border-brand-blue brand-blue rounded-lg pl-5 mr-12  inline-flex items-center mt-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/upholstery/upholstery-sp1.jpg"
                alt="content"
              />
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Upholstery
              </h2>
              <p className="leading-relaxed text-base">
                We provide quality upholstery steam cleaning service for all
                types of upholstery fabric. The standard service includes
                cleaning of all upholstered furniture and cushions of the same
                material.
              </p>
              <Link href="/Upholstery">
                <a className="border-2 border-brand-blue brand-blue rounded-lg pl-5 mr-12  inline-flex items-center mt-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/pet-stain.jpg"
                alt="content"
              />

              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Pet Stain and Odor Removal
              </h2>
              <p className="leading-relaxed text-base">
                Have a stubborn stain you can't get out or a smell you can't
                eliminate? Call us! We have the equipment and expertise to get
                out the most stubborn stains and odors.
              </p>
              <Link href="/StainOdorRemoval">
                <a className="border-2 border-brand-blue brand-blue rounded-lg pl-5 mr-12  inline-flex items-center mt-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/tile/tile-3-640x480-md.jpg"
                alt="content"
              />
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Tile and Wood Floor Restoration
              </h2>
              <p className="leading-relaxed text-base">
                There are dozens of home cleaning solutions and retail products
                designed to clean tile and flooring. While these products can
                provide short-term results, they can also cause unseen damage
                and allow residue, dirt and grime to build-up over time. A
                periodic professional cleaning is the best solution to protect
                and enhance your floors.
              </p>
              <Link href="/TileAndWoodFloorRestoration">
                <a className="border-2 border-brand-blue brand-blue rounded-lg pl-5 mr-12  inline-flex items-center mt-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/water-damage-restoration/water-damage-restoration-600x600.jpg"
                alt="content"
              />

              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Water Damage Restoration
              </h2>
              <p className="leading-relaxed text-base">
                From leaking faucets to broken water heaters to flooding, water
                damage is one of the most common and potentially destructive
                problems you can face as a homeowner. In water damage situations
                it is important to act immediately. We have the tools to extract
                all the water and dry the area. We finish the process with
                sanitizing and deodorizing leaving your property clean and
                protected.
              </p>
              <Link href="/WaterDamageRestoration">
                <a className="border-2 border-brand-blue brand-blue rounded-lg pl-5 mr-12  inline-flex items-center mt-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/airducts/air-ducts.jpg"
                alt="content"
              />
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Air Duct Cleaning
              </h2>
              <p className="leading-relaxed text-base">
                Air duct cleaning can drasticially improve indoor air quality by
                removing bacteria, mold, and mildew spores. We use an EPA
                registered biocide fog agent to destroy contaminants, a odor
                killer deodorizer, and anti-bacterial sealant.
              </p>
              <Link href="/Airducts" className="mt-4">
                <a className="border-2 border-brand-blue brand-blue rounded-lg pl-5 mr-12  inline-flex items-center mt-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}