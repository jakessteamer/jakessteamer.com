/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useAppContext } from "../../context/AppState";

export default function Hero() {
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
      <section className="hero__section relative" ref={elementRef}>
        <div className="hero-content absolute bottom-0  w-full linear-gradient-bg">
          <div className="flex flex-col px-4 md:px-16  gap-y-12 md:gap-y-20 pb-7% md:pb-14%">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold  theme-blue">
              Cleaner.
              <br />
              Happier.
              <br />
              Healthier.
            </p>
            <p className="header-home__byline prose-lg text-blue-900 font-medium">
              Call Jake's Steamer for a free consultation. We'll make your home
              or business cleaner, happier, healthier.
            </p>
          </div>
        </div>
      </section>
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
    </>
  );
}
