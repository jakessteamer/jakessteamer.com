/* eslint-disable react/no-unescaped-entities */

export default function HomeHero() {
    return (
        <>
            <section id="home-hero" className="relative grid grid-cols-1 grid-rows-1 gap-0">
                <div id="home-hero-img" className="relative row-start-1 row-end-1 col-start-1 col-end-1">
                    <img
                        alt="kid and mom on clean carpet"
                        sizes="100vw"
                        src="/images/kid-and-mom-on-carpet-high-def.jpg"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover opacity-95"
                    />
                </div>
                <div
                    id="home-hero-content"
                    className="row-start-1 row-end-1 col-start-1 col-end-1 z-30 flex items-center px-6 lg:px-32 relative ">
                    <div className="w-full md:w-9/12 xl:w-8/12">
                        {/* <span className="font-bold uppercase tracking-widest">Jake's Steamer</span> */}
                        <p className="text-3xl lg:text-5xl my-7 font-bold text-blue">
                            Cleaner.
                            <br />
                            Happier.
                            <br />
                            Healthier.
                        </p>
                        {/* <p className="font-bold mb-1">Jake's Steamer</p> */}
                        <span className="font-bold uppercase tracking-wide">Jake's Steamer</span>
                        <p>The Carpet Cleaning Professionals</p>
                    </div>
                </div>
            </section>
            {/* SVG Divider */}
            <div className="relative">
                <div className="svg-wave-divider">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
            <div className="container px-4 lg:px-12 pt-3 lg:pt-12 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <p className="sm:text-3xl text-3xl lg:text-4xl font-bold title-font mb-2 text-gray-900">
                            Services
                        </p>
                        <hr className="h-1 w-1/2 bg-brand-blue rounded h-underline" />
                    </div>
                    <p className=" lg:w-1/2 w-full prose text-lg  text-gray-900">
                        We are committed to making sure that your home is as healthy and clean as possible. Your home or
                        office is where you live and work, where your kids play, where your pets nap, which is why we
                        take every single client interaction as if it is the single most important job we have ever
                        done.<b className="text-textLight text-xl pl-1">Questions? Quote? Call Jake's Steamer!</b>
                    </p>
                    {/* <p className=" lg:w-1/2 w-full prose text-lg  text-gray-900">
                        To get your carpet truly clean, you need a professional deep cleaning service. That’s where we
                        where Jake's Steamer comes in. We can remove stains and smells without damaging your carpet. In
                        just a few hours your carpets will be clean and dry.
                    </p> */}
                </div>
            </div>
        </>
    );
}
