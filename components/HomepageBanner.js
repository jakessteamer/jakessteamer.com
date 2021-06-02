/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function HomeHero() {
    return (
        <>
            <section id="homepage-banner">
                <div className="imageContainer inset-0 w-full h-full">
                    <img
                        alt="kid and mom on clean carpet"
                        sizes="100vw"
                        src="/images/kid-and-mom-on-carpet-high-def.jpg"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />

                    {/* <div className="imgWrap">
                        <img
                            alt="kid and mom on clean carpet"
                            sizes="100vw"
                            src="/images/kid-and-mom-on-carpet-high-def.jpg"
                            decoding="async"
                        />
                    </div> */}
                    {/* <Image
                        className="image opacity-95"
                        src="/images/kid-and-mom-on-carpet-high-def.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                        alt="kid and mom on clean carpet"
                    /> */}
                </div>

                <section id="headline" className="relative flex self-end">
                    {/* <p className=" text-5xl sm:text-6l leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
                            <span className="block px-4 py-2">Cleaner.</span>
                            <span className="block px-4 py-2">Happier.</span>
                            <span className="block px-4 py-2">Healthier.</span>
                        </p> */}
                    <p className="homepage-banner-headline lg:-mb-10">
                        <span className="block px-4 lg:px-12 py-2 md:text-5xl">Cleaner.</span>
                        <span className="block px-4 lg:px-12 py-2 md:text-5xl">Happier.</span>
                        <span className="block px-4 lg:px-12 py-2 md:text-5xl">Healthier.</span>
                    </p>
                </section>
                <section id="subheadline" className="relative">
                    <p
                        id="subheadline-text"
                        className="
                        prose-2xl md:text-4xl font-medium px-4 lg:px-12 lg:mt-10
            ">
                        The Carpet Cleaning Professionals
                    </p>
                </section>
            </section>
            <div className="relative">
                <div className="custom-shape-divider-bottom-1622501268">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"
                        />
                    </svg>
                </div>
            </div>
            {/* CTA */}
            <section id="homepage-banner-cta" className="text-center text-4xl">
                <p className="font-bold leading-tight banner-headline">Call Jake's Steamer!</p>
                <a className="font-bold leading-tight banner-headline" href="tel:+14328474600">
                    432-847-4600
                </a>
            </section>
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
                        done.
                        <b className="text-gray-800">
                            {" "}
                            Questions? Quote?{" "}
                            <span className="block">Call Jake's Steamer The Carpet Cleaner today!</span>
                        </b>
                    </p>
                </div>
            </div>
        </>
    );
}
