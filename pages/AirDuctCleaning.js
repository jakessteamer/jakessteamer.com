import { useEffect } from "react";
import Image from "next/image";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useAppContext } from "../context/AppState";

export default function AirDuctCleaning() {
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
        title="Jake's Steamer central air duct cleaning service cleans dirty airducts. Jake's Steamer is rated affordable and the best from all customers"
        description="Jake's Steamer central air duct cleaning service improves the indoor air quality of your home by removing dust, allergens, and pollutants that build up in your air ducts overtime."
        url={`${siteMetadata.siteUrl}/AirDuctCleaning`}
      />
      <section className="mt-15vh flex flex-col items-start justify-center w-9/12 mx-auto mb-16">
        <header ref={elementRef}>
          <h1 className="md:text-5xl my-12 text-3xl font-bold tracking-tight text-blue-500 dark:text-white-accent">
            Air Duct Cleaning
          </h1>
        </header>
        <div style={{ position: "relative", width: "100%", height: "320px" }}>
          <Image
            alt="Mountains"
            className="rounded"
            src="/images/airducts/airduct.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="theme-text max-w-none w-full mt-12">
          <p className="theme-text">Air Duct Cleaning Inspection</p>
          <p className="theme-text">
            A successful air duct cleaning requires an air duct inspection. Our
            air duct cleaning inspection determines if cleaning is needed and to
            what extent. An air duct leakage test is a foundational step for
            proper air duct cleaning. We report back to you before moving
            forward with a cleaning. The air duct cleaning inspection ensures
            your air ducts are properly cleaned. Dirty ducts can cost you in
            additional repair, maintenance, and early replacement of air
            conditioning and heating system.
          </p>
          <p className="theme-text">Cleaning</p>
          <p className="theme-text">
            Clean & healthy air quality require air duct cleaning. Our air duct
            cleaning take advantage proper cleaning methods that include an
            anti-bacterial coating. We use patented equipment to ensure every
            part of your duct system is cleaned properly. All contaminants
            collected are disposed of safely. We use an EPA registered biocide
            fog agent to destroy bacteria, germs, mold, and mildew spores. A
            sealant and an odor kill deodorizer is also applied. Before the air
            duct cleaning is finished, your filters will be replaced and the
            registers and the blower unit will be cleaned.
          </p>
          <p className="theme-text">Air Duct Cleaning</p>
          <p className="theme-text">
            According to the EPA, dust in your ventilation systems can lead to
            your indoor air quality being 70 to 100 times more polluted than
            outdoors. Contaminants that can find their way into your ductwork
            are: bacteria, chemical residue, dust, mildew, pollen, viruses, and
            other airborne contaminants. Americans spend 90% of their time
            indoors (American Lung Association). Allergies, asthma, respiratory
            illnesses, or even frequent cold symptoms could be the result of a
            dirty duct system. Have you had your air ducts cleaned recently? If
            not schedule a cleaning today!
          </p>
        </div>
      </section>
    </>
  );
}
