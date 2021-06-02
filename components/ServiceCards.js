import React from "react";

export default function ServiceCards() {
    return (
        <section
            id="#services-section"
            className="container px-4 lg:px-12 pt-3 lg:pt-12 mx-auto text-gray-600 body-font">
            {/* <!-- Service Cards --> */}
            <div className="flex flex-wrap justify-center">
                {/* <!--Card 1--> */}
                <article className="max-w-xs rounded overflow-hidden shadow-lg m-8">
                    <a href="/CarpetCleaning">
                        <img src="/images/carpets/carpet-5-640x640-md.jpg" alt="Carpet cleaning service card" />
                    </a>
                    <section className="px-6 py-4">
                        <p className="text-2xl text-gray-900 font-bold mb-4">Carpets and Area Rugs</p>
                        <p className="line-clamp-6 md:line-clamp-none leading-relaxed text-xl text-gray-900">
                            We specialize in carpet cleaning. Over the last 15+ years we have removed countless stains
                            and brought back life into many carpets. Our customers trust us with their homes and
                            businesses and in return we have guarenteed piece of mind and 100% satisfaction.
                        </p>
                    </section>
                    <div className="learn-more">
                        <a
                            className="learn-more-btn rounded-lg inline-flex items-center px-4 m-6"
                            href="/CarpetCleaning">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5 ml-2"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>
                {/* <!-- Card 2    --> */}
                <article className="max-w-xs rounded overflow-hidden shadow-lg m-8">
                    <a href="/AirDuctCleaning">
                        <img
                            src="/images/airducts/toddler-staring-into-air-ducts-jpg.jpg"
                            alt="Air duct cleaning service card"
                        />
                    </a>
                    <section className="px-6 py-4">
                        <p className="text-2xl text-gray-900 font-bold mb-4">Air Duct Cleaning</p>
                        <p className="line-clamp-6 md:line-clamp-none leading-relaxed text-xl text-gray-900">
                            Air duct cleaning can drasticially improve indoor air quality by removing bacteria, mold,
                            and mildew spores. We use an EPA registered biocide fog agent to destroy contaminants, a
                            odor killer deodorizer, and anti-bacterial sealant.
                        </p>
                    </section>
                    <div className="learn-more">
                        <a
                            className="learn-more-btn rounded-lg inline-flex items-center px-4 m-6"
                            href="/AirDuctCleaning">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5 ml-2"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>
                {/* <!-- Card 3    --> */}
                <article className="max-w-xs rounded overflow-hidden shadow-lg m-8">
                    <a href="/WaterDamageRestoration">
                        <img
                            src="/images/water-damage-restoration/water-damage-restoration-600x600.jpg"
                            alt="Water damage and emergency cleaning service card"
                        />
                    </a>
                    <section className="px-6 py-4">
                        <p className="text-2xl text-gray-900 font-bold mb-4">
                            <span className="block">Water Damage/</span>
                            <span> Emergency Flood</span>
                        </p>
                        <p className="line-clamp-6 md:line-clamp-none leading-relaxed text-xl text-gray-900">
                            From leaking faucets to broken water heaters to flooding, water damage is one of the most
                            common and potentially destructive problems you can face as a homeowner. In water damage
                            situations it is important to act immediately. We have the tools to extract all the water
                            and dry the area. We finish the process with sanitizing and deodorizing leaving your
                            property clean and protected.
                        </p>
                    </section>
                    <div className="learn-more">
                        <a
                            className="learn-more-btn rounded-lg inline-flex items-center px-4 m-6"
                            href="/WaterDamageRestoration">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5 ml-2"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>
                {/* <!-- Card 4 --> */}
                <article className="max-w-xs rounded overflow-hidden shadow-lg m-8">
                    <a href="/TileAndGroutCleaning">
                        <img src="/images/tile/tile-3-640x480-md.jpg" alt="Tile and grout cleaning service card" />
                    </a>
                    <section className="px-6 py-4">
                        <p className="text-2xl text-gray-900 font-bold mb-4"> Tile and Grout Cleaning</p>
                        <p className="line-clamp-6 md:line-clamp-none leading-relaxed text-xl text-gray-900">
                            We specialize in carpet cleaning. Over the last 15+ years we have removed countless stains
                            and brought back life into many carpets. Our customers trust us with their homes and
                            businesses and in return we have guarenteed piece of mind and 100% satisfaction.
                        </p>
                    </section>
                    <div className="learn-more">
                        <a
                            className="learn-more-btn rounded-lg inline-flex items-center px-4 m-6"
                            href="/TileAndGroutCleaning">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5 ml-2"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>
                {/* <!-- Card 5  --> */}
                <article className="max-w-xs rounded overflow-hidden shadow-lg m-8">
                    <a href="/StainAndOdorRemoval">
                        <img
                            src="/images/pet-stain-and-odor-removal/pet-stain-and-odor-removal-service-2-jpg.jpg"
                            alt="Pet stain and odor removal cleaning service card"
                        />
                    </a>
                    <section className="px-6 py-4">
                        <p className="text-2xl text-gray-900 font-bold mb-4">Pet Stain and Odor Removal</p>
                        <p className="line-clamp-6 md:line-clamp-none leading-relaxed text-xl text-gray-900">
                            We specialize in carpet cleaning. Over the last 15+ years we have removed countless stains
                            and brought back life into many carpets. Our customers trust us with their homes and
                            businesses and in return we have guarenteed piece of mind and 100% satisfaction.
                        </p>
                    </section>
                    <div className="learn-more">
                        <a
                            className="learn-more-btn rounded-lg inline-flex items-center px-4 m-6"
                            href="/StainAndOdorRemoval">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5 ml-2"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>
                {/* Card 6 */}
                <article className="max-w-xs rounded overflow-hidden shadow-lg m-8">
                    <a href="/UpholsteryCleaning">
                        <img src="/images/upholstery/couch-upholstery-square.jpg" alt="Upholstery Cleaning Service" />
                    </a>
                    <section className="px-6 py-4">
                        <p className="text-2xl text-gray-900 font-bold mb-4">Upholstery Cleaning</p>
                        <p className="line-clamp-6 md:line-clamp-none leading-relaxed text-xl text-gray-900">
                            We provide quality upholstery steam cleaning service for all types of upholstery fabric. The
                            standard service includes cleaning of all upholstered furniture and cushions of the same
                            material.
                        </p>
                    </section>
                    <div className="learn-more">
                        <a
                            className="learn-more-btn rounded-lg inline-flex items-center px-4 m-6"
                            href="/UpholsteryCleaning">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5 ml-2"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}
