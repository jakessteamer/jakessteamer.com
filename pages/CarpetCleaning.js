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
      <article className="relative max-w-3xl mx-auto px-6 prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/carpets/area-rug-1.jpg" alt="" />
        </div>
        {/* WHY ARE YOU TALKING TO ME [EDUCATION ] */}
        {/* HOW DO YOU DO THE THINGS */}
        {/* PROVE IT */}

        {/* WHAT WILL WE GIVE ME */}
        <h1 className="content-title">How to Clean Your Carpets</h1>
        <p className="">
          For best results you should have a professional steam clean your
          carpets. We have a truck mount unit that has rotary brushes which
          apply hot steam in to the carpet, detergent, and remove dust and soil.
          The success of steam cleaning rely on the technicians experience and
          skill with the quality of truck mount machine.
        </p>
        <p>
          The machine should keep the detergent solution in a proper temperature
          to get steam continuously and the pressure of steam spraying should be
          controllable at any time. When the hot steam applied on the carpet the
          soil and dust particles on the carpet will be removed. It is very easy
          to clean the removed soil particle from the carpet.
        </p>
        <p>
          Although regular vacuuming can remove dry soil and debris from your
          carpeting, it leaves behind oily soils and particles that are produced
          from cooking vapors, pets, and dirt tracked in from outside the home.
          These oily contaminants that are left behind can cause your carpet to
          dull and fade.
        </p>
        <p>
          As the contaminants build up they become more difficult to remove.
          Regular deep cleaning of the carpet can prevent the excessive build up
          of contaminants and keep your carpets looking fresh and clean. Regular
          cleaning of your carpets also helps improve the air quality in your
          home by removing pet hair, dust mites, and other allergens that thrive
          deep in the carpet.
        </p>
        <h2 className="content-title">
          WHAT CAN YOU DO TO PREPARE FOR YOUR CARPET CLEANING:
        </h2>
        <p>
          Move small items and breakables from the area to be cleaned. Get ready
          to be amazed by the Rotovac.
        </p>
        <h2 className="content-title">Carpet Cleaning Process</h2>
        <p>
          We will evaluate your carpet’s needs. Every carpet must be treated
          differently. We will decide what will be the best method for cleaning
          your carpet. You will know up front what we can and can’t do. This way
          there are no surprises.
        </p>
        <ol>
          <li>
            <strong className="content-title">PRE-INSPECTION</strong> Our
            technician will walk through your home with you to visually inspect
            the carpet. He will identify potential permanent stains and give you
            an evaluation of expected results.
          </li>
          <li>
            <strong className="content-title">PRE-VACUUM</strong> Dry soil is
            removed by a thorough vacuuming. Removing dry soil is one of the
            most important steps in cleaning.
          </li>
          <li>
            <strong className="content-title">PRE-SPRAY</strong> A
            preconditioning agent is applied to break down traffic area soil and
            general spots for more thorough cleaning.
          </li>
          <li>
            <strong className="content-title">PRE-SPOT</strong> Difficult spots
            are pre-treated with special solutions to increase chances of
            removal.
          </li>
          <li>
            <strong className="content-title">SOIL EXTRACTION AND RINSE</strong>{" "}
            The carpet is then thoroughly rinsed with a powerful extraction
            cleaning system without over wetting the carpet or leaving a sticky
            residue behind.
          </li>
          <li>
            <strong className="content-title">NEUTRALIZER</strong> Every carpet
            that we cleaned is pH balanced so that there is no sticky residue
            left behind. This also leaves your carpet soft and fresh.
          </li>
          <li>
            <strong className="content-title">POST SPOT</strong> Any spots or
            stains still remaining will get extra treatment with our many
            specialty spotting solutions. * For longer carpet life and fewer
            permanent stain, be sure to have professional carpet protector
            applied to your carpet.
          </li>
          <li>
            <strong className="content-title">POST GROOM</strong> Some fibers
            require post cleaning groom to assure there is no fiber distortion.
            It also helps the fiber dry faster.
          </li>
          <li>
            <strong className="content-title">SPEED DRY</strong> High velocity
            air movers are placed on the carpet immediately after cleaning to
            promote faster drying.
          </li>
          <li>
            <strong className="content-title">POST CLEANING INSPECTION</strong>{" "}
            Our technician will walk through your home with you to point out the
            cleaning results to make sure that you are completely thrilled with
            the job.
          </li>
        </ol>
        <p>
          <strong className="content-title">
            What you should do after the carpet cleaning:
          </strong>{" "}
          To decrease drying time try to keep the room temperature about 72
          degrees and use fans to circulate the air around the cleaned carpet.
        </p>

        <footer>
          <h2 className="content-title">References</h2>
          <ul className="reference-list">
            <li className="reference">
              <a
                href="https://www.epa.gov/iaq-schools/controlling-pollutants-and-sources-indoor-air-quality-design-tools-schools#Carpet"
                rel="nofollow">
                Controlling Pollutants and Sources: Indoor Air Quality Design
                Tools for Schools. US EPA
                https://www.epa.gov/iaq-schools/controlling-pollutants-and-sources-indoor-air-quality-design-tools-schools
                (2014).
              </a>
            </li>
            <li className="reference">
              <a
                href="https://www.epa.gov/indoor-air-quality-iaq/building-air-quality-guide-building-owners-and-facility-managers-printable"
                rel="nofollow">
                Indoor Air Quality Tools for Schools.
              </a>
            </li>
          </ul>
        </footer>
      </article>
    </>
  );
}
