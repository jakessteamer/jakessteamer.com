/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import Image from "next/image";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useAppContext } from "../context/AppState";

export default function UpholsteryCleaning() {
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
      <PageSeo
        title="Upholstery Cleaning"
        description="Let our professionals with many years of experience make your upholstery look and feel better by removing the dirt and stains that build up over time."
        url={`${siteMetadata.siteUrl}/UpholsteryCleaning`}
      />
      <section className="mt-15vh flex flex-col items-start justify-center w-9/12 mx-auto mb-16">
        <header ref={elementRef}>
          <h1 className="md:text-5xl my-12 text-3xl font-bold tracking-tight text-blue-500 dark:text-white-accent">
            Upholstery Cleaning
          </h1>
        </header>
        <div style={{ position: "relative", width: "100%", height: "320px" }}>
          <Image
            alt="Mountains"
            className="rounded"
            src="/images/upholstery/upholstery-sp1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-none w-full mt-12">
          <p className="theme-text">Taking Care of your Upholstery </p>
          <p className="theme-text">
            Since your upholstered furniture generally cost money, they can be
            considered as great investments that add to a household. Like any
            other investment, they should be taken cared of, since they will
            only remain beautiful as long as we do our part in making sure that
            they remain beautiful.
          </p>
          <p className="theme-text">
            Here are tips to make sure that your upholstery remains clean and
            beautiful.
          </p>
          <p className="theme-text">
            Prevention is always the best maintenance for anything, and that
            includes upholstery! Keep it safe from any spills or sharp objects.
            When you are sitting or lying down on your upholstered furniture,
            remember to refrain from doing any motion that can stretch the
            fabric, such as sudden stretching or kicking.
          </p>
        </div>
      </section>
    </>
  );
}
