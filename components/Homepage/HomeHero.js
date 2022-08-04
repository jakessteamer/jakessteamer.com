/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useAppContext } from "../../context/AppState";

export default function HomeHero() {
  const [elementRef, isIntersecting] = useIntersectionObserver({
    rootMargin: "-100px",
  });
  const { changeNavbarColor } = useAppContext();
  useEffect(() => {
    if (!isIntersecting) {
      changeNavbarColor(true);
    } else {
      changeNavbarColor(false);
    }
  }, [isIntersecting]);
  return (
    <>
      <section
        id="home-hero"
        className="relative grid grid-cols-1 grid-rows-1 gap-0"
        ref={elementRef}>
        <div
          id="home-hero-img"
          className="relative row-start-1 row-end-1 col-start-1 col-end-1">
          <img
            alt="kid and mom on clean carpet"
            sizes="100vw"
            src="/images/kid-and-mom-on-carpet-high-def.jpg"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover "
          />
        </div>
        <div className="row-start-1 row-end-1 col-start-1 col-end-1 grid grid-rows-2">
          <div className="home-hero-img-overlay row-start-2" />
        </div>
        <div className="relative row-start-1 row-end-1 col-start-1 col-end-1 grid grid-rows-3">
          <div className="row-start-2 row-end-3 absolute container mx-auto bottom-0 left-0 right-0">
            <p className="header-home__title theme-blue">
              Cleaner.
              <br />
              Happier.
              <br />
              Healthier.
            </p>
          </div>
        </div>
        {/*
        <div
          id="home-hero-content"
          className="row-start-1 row-end-1 col-start-1 col-end-1 z-30 relative grid grid-cols-12 grid-rows-6 ">
          <div className="col-start-2 col-end-11 row-start-3 row-end-4 ">
            <p className="text-3xl lg:text-5xl my-7 font-bold theme-blue">
              Cleaner.
              <br />
              Happier.
              <br />
              Healthier.
            </p>
          </div>
        </div> */}
        <div className="relative row-start-1 row-end-1 col-start-1 col-end-1 grid grid-rows-2">
          <div className="absolute container mx-auto bottom-0 left-0 right-0 mb-12 md:mb-20">
            <h1 className="prose sm:prose-lg dark:text-blue-900">
              Call Jake's Steamer for a free consultation. We'll make your home
              or business cleaner, happier, healthier.
            </h1>
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
            preserveAspectRatio="none"
            className="text-white dark:text-blue-900">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="container px-4 lg:px-12 pt-3 lg:pt-12 mx-auto theme-surface ">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <p className="sm:text-3xl text-3xl lg:text-4xl font-bold title-font mb-2 content-title">
              Services
            </p>
            <hr className="h-1 w-1/2 bg-blue-900 rounded h-underline" />
          </div>
          <div
            id="service__section--text"
            className=" lg:w-1/2 w-full prose-lg">
            <p>
              Your carpet acts as an air filter by trapping dust mites, pollen,
              mold spores, pet dander, cockroach allergens, and other pollutants
              brought in from the outside. However, your carpet has a limit to
              how much it can hold before releasing pollutants back into the
              air.
            </p>
            <p>
              steam cleaning uses pressurized hot water to penetrate and loosen
              dirt unreachable by a vaccuming. The heat kills bacteria, mold,
              mildew, and allergens. The water, stains, and odors are extracted
              by a powerful suction vacuum. Your carpets are left sanitized and
              dry in a few hours.
            </p>

            <p>
              Steam cleaning can improve the air you breathe, remove stains,
              odors, restore color, and keep your carpets looking good.
            </p>
            <p>
              Call Jake's Steamer for a free consultation. We'll make your home
              or business cleaner, happier, healthier.
            </p>

            <p className="font-bold theme-blue my-8">
              Licensed + Certified + Insured | Family + Locally Owned
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
