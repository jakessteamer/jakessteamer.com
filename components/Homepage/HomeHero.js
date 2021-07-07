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
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>
        <div
          id="home-hero-content"
          className="row-start-1 row-end-1 col-start-1 col-end-1 z-30 relative grid grid-cols-12 grid-rows-6 ">
          <div className="col-start-2 col-end-11 row-start-3 row-end-4 ">
            {/* <span className="font-bold uppercase tracking-widest">Jake's Steamer</span> */}
            <p className="text-3xl lg:text-5xl my-7  font-bold text-blue-500">
              Cleaner.
              <br />
              Happier.
              <br />
              Healthier.
            </p>
            {/* <p className="font-bold mb-1">Jake's Steamer</p> */}
            <span className="font-bold uppercase lg:text-2xl text-blue-900">
              Jake's Steamer
            </span>
            <p className="text-blue-900 text-lg lg:text-xl">
              The Carpet Cleaning Professionals
            </p>
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
            className="text-white-accent dark:text-blue-900">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="container px-4 lg:px-12 pt-3 lg:pt-12 mx-auto theme-surface">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <p className="sm:text-3xl text-3xl lg:text-4xl font-bold title-font mb-2 theme-text">
              Services
            </p>
            <hr className="h-1 w-1/2 bg-blue-500 rounded h-underline" />
          </div>
          <div id="service__section--text" className=" lg:w-1/2 w-full">
            <p className="text-lg theme-text pb-4">
              Overtime your carpets collect dirt, spills, and other contaminants
              giving your carpet a darker overtone and a nice smell to go along
              with it.
            </p>
            <p className="text-lg theme-text inline-flex">
              Call Jake's Steamer for all your carpet and flooring needs. We
              offer
            </p>
            <h2 className="text-lg theme-text inline-flex">
              <strong>free</strong>&nbsp;in-home evaluations
            </h2>
            <p className="text-lg theme-text inline-flex pb-4">
              &nbsp;and peace of mind.
            </p>
            <p className="text-blue-500 mb-8">
              FAMILY + LOCALLY OWNED | LICENSED + CERTIFIED + INSURED
            </p>
          </div>
          {/* { <p className=" lg:w-1/2 w-full text-lg  ">
          We are committed to making sure that your home is as healthy and
              clean as possible. Your home or office is where you live and work,
              where your kids play, where your pets nap, which is why we take
              every single client interaction as if it is the single most
              important job we have ever done.
                        To get your carpet truly clean, you need a professional deep cleaning service. That’s where we
                        where Jake's Steamer comes in. We can remove stains and smells without damaging your carpet. In
                        just a few hours your carpets will be clean and dry.
                    </p>
                    <b className="text-textLight text-xl pl-1">
                    Questions? Quote? Call Jake's Steamer!
                  </b> */}
        </div>
      </div>
    </>
  );
}
