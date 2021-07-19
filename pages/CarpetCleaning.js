/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import Image from "next/image";
import TableOfContents from "@components/TableOfContents";
import References from "@components/References";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useAppContext } from "../context/AppState";

export default function CarpetCleaning() {
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
        title="Carpet Cleaning"
        description={`${siteMetadata.description}`}
        url={`${siteMetadata.siteUrl}/CarpetCleaning`}
      />
      <article className="flex flex-col max-w-7xl mx-6 mx-auto prose">
        <header ref={elementRef}>
          <h1 className="md:text-5xl text-3xl font-bold tracking-tight text-blue-500 dark:text-white-accent">
            Home and Commericial Carpet Cleaning Services
          </h1>
        </header>

        <div className="max-w-none w-full mt-12 prose">
          <p>
            Carpets enhance the beauty and comfort of your place, but did you
            know carpets are a filter for your health?
          </p>
          <p>
            Carpets may trap pollutants like dust mites, pet dander, cockroach
            allergens, particle pollution, lead, mold spores, pesticides, dirt
            and dust. Toxic gases in the air can stick to small particles that
            settle into carpets. These pollutants may become airborne during
            renovations, vacuuming or even daily activities like walking on the
            carpet. In the home, children are more likely to be exposed to
            pollution in carpets. They spend time playing on the floor and place
            their hands in their mouths.<sup>1</sup>
          </p>
          <p>
            It is recommended to clean carpets every 6-12 months depending how
            dirty they get from pets, accidents, and everyday life.
          </p>
          {/* On-site Consultation */}
          <p>Our Carpet Cleaning Process</p>
          <p className="font-bold">Pre-Inspection</p>
          <p className="theme-text">
            The first step in the process is meeting with you to get to know
            exactly how you would like your floors cleaned. You'll get to know
            the wear age, expected fiber life, and cleaning schedules to extend
            the life of your carpets. We'll then create and explain a solution
            that achieves your cleaning goals while protecting your home.
          </p>
          {/* <!-- Preparation and Pre-treatment--> */}
          <h2 className="text-xl font-bold">Preparation and Pretreatment</h2>
          <p className="theme-text">
            Preparation starts with moving furniture if necessary and vacumming
            to remove loose debris. Before steam cleaning your carpets we
            perform a pre-spot and pre-spray.
          </p>
          <p className="font-bold">Pre-Spot</p>
          <p>
            There is not a generic carpet cleaning product for all carpets. The
            problem with applying the wrong type of cleaning product to your
            carpet is it can result in the color to fade (bleaching). Pre-spot
            checking is a test to make sure your carpet maintains original color
            before steam cleaning.
          </p>
          <p className="font-bold">Pre-Spray</p>
          <p>
            Stains are sprayed with a safe stain remover which breaks the stain
            up and makes it easy to be removed from the carpet.
          </p>
          <p className="font-bold">Why</p>
          {/* <p className="theme-text">
            Jake's Steamer's technicians are certified by the Institute of
            Inspection Cleaning and Restoration Certification (IICRC) and
            therefore trained in the chemistry and application of cleaning
            solutions.
          </p> */}
          <p className="font-bold">What Certified Professionals Think About:</p>
          <ul>
            <li>
              How the PH of cleaning solutions affects different stains and
              materials
            </li>
            <li>Soil suspension</li>
            <li>Spotting techniques</li>
            <li>Pet urine neutralization</li>
            <li>Fiber identification</li>
            <li>Use of personal protective equipment</li>
            <li>Carpet construction</li>
          </ul>
          {/* <!-- Steaming Cleaning --> */}
          <p className="text-xl font-bold">
            Steaming Cleaning (Hot Water Extraction Carpet Cleaning)
          </p>
          <p>
            Hot water extraction is the use of detergent and pressurized hot
            water to stains from your carpet. Pressure and temperature are what
            allow stains to be easily removed without the having to use a lot of
            cleaning detergent. The water, dirt, and stains are then extracted
            using a strong suction vaccum.
          </p>
          <div>
            <p>Additional benefits of steam cleaning are:</p>
            <ul>
              <li>
                <p>
                  Deep Clean Carpets: The pressurized hot water (180-220
                  degrees) loosens dirt and microbes from the carpet fibers.
                </p>
              </li>

              <li>
                <p>
                  Residue-Free Carpets: The minimal amount of detergent and
                  water is used and then suctioned out. Carpets are family, pet,
                  and most importantly baby safe.
                </p>
              </li>
              <li>
                <p>
                  Fast Drying Carpets: The minimal amount of cleaning water is
                  used and then suctioned out. Carpets are dry in 1-2 hours.
                </p>
              </li>
              <li>
                <p>Restore Carpet Color</p>
              </li>
              <li>
                <p>Remove Odors</p>
              </li>
            </ul>
          </div>
        </div>
        <References
          sources={[
            "1. Controlling Pollutants and Sources In Schools. U.S. Environmental Protection Agency (EPA). https://www.epa.gov/iaq-schools/controlling-pollutants-and-sources-indoor-air-quality-design-tools-schools.",
          ]}
        />
      </article>
    </>
  );
}
