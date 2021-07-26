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
        <h2 className="content-title">
          WHAT YOU CAN EXPECT YOUR CLEANING TECHNICIAN TO DO:
        </h2>
        <p>
          <strong className="content-title">Pre-inspection:</strong> We will
          evaluate your carpet’s needs. Every carpet must be treated
          differently. We will decide what will be the best method for cleaning
          your carpet. You will know up front what we can and can’t do. This way
          there are no surprises.
        </p>
        <p>
          <strong className="content-title">Moving Furniture:</strong> When
          necessary we will move and replace small furniture in its original
          position.
        </p>
        <p>
          <strong className="content-title">Pre-treatment:</strong> We treat
          spots and stains as necessary and apply a cleaning solution to the
          entire carpet.
        </p>
        <p>
          <strong className="content-title">Cleaning:</strong> We use our
          state-of-the-art Rotovac equipment for a fast and thorough deep
          cleaning of your carpet.
        </p>
        <p>
          <strong className="content-title">Post-inspection:</strong> Once the
          project is completed, we re-inspect the carpet with you to ensure that
          all the work was done to your satisfaction.
        </p>
        <p>
          <strong className="content-title">Protect & Groom:</strong> When
          necessary we will place blocks or foil under furniture legs to protect
          them during the drying process and groom the carpet for a clean
          inviting look.
        </p>
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
