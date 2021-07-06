/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import Image from "next/image";
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
      <section className="mt-15vh flex flex-col items-start justify-center w-9/12 mx-auto mb-16">
        <header ref={elementRef}>
          <h1 className="md:text-5xl my-12 text-3xl font-bold tracking-tight text-blue-500 dark:text-white-accent">
            Carpet Cleaning
          </h1>
        </header>
        <div style={{ position: "relative", width: "100%", height: "320px" }}>
          <Image
            alt="Mountains"
            className="rounded"
            src="/images/carpets/carpet-5-640x640-md.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-none w-full mt-12">
          <p className="mb-4 theme-text">
            For best results you should have a professional steam clean your
            carpets. We have a truck mount unit that has rotary brushes which
            apply hot steam in to the carpet, detergent, and remove dust and
            soil. The success of steam cleaning rely on the technicians
            experience and skill with the quality of truck mount machine.The
            machine should keep the detergent solution in a proper temperature
            to get steam continuously and the pressure of steam spraying should
            be controllable at any time. When the hot steam applied on the
            carpet the soil and dust particles on the carpet will be removed. It
            is very easy to clean the removed soil particle from the carpet.
          </p>
          <p className="theme-text">
            Although regular vacuuming can remove dry soil and debris from your
            carpeting, it leaves behind oily soils and particles that are
            produced from cooking vapors, pets, and dirt tracked in from outside
            the home. These oily contaminants that are left behind can cause
            your carpet to dull and fade. As the contaminants build up they
            become more difficult to remove. Regular deep cleaning of the carpet
            can prevent the excessive build up of contaminants and keep your
            carpets looking fresh and clean. Regular cleaning of your carpets
            also helps improve the air quality in your home by removing pet
            hair, dust mites, and other allergens that thrive deep in the
            carpet.
          </p>
          <p className="theme-text">
            WHAT CAN YOU DO TO PREPARE FOR YOUR CARPET CLEANING:
          </p>
          <p className="theme-text">
            Move small items and breakables from the area to be cleaned. Get
            ready to be amazed by the Rotovac.
          </p>
          <p className="theme-text">
            WHAT YOU CAN EXPECT YOUR CLEANING TECHNICIAN TO DO:
          </p>
          <p className="theme-text">
            <b>Pre-inspection:</b> We will evaluate your carpet’s needs. Every
            carpet must be treated differently. We will decide what will be the
            best method for cleaning your carpet. You will know up front what we
            can and can’t do. This way there are no surprises.
          </p>
          <p className="theme-text">
            <b>Moving Furniture:</b> When necessary we will move and replace
            small furniture in its original position.
          </p>
          <p className="theme-text">
            <b>Pre-treatment:</b> We treat spots and stains as necessary and
            apply a cleaning solution to the entire carpet.
          </p>
          <p className="theme-text">
            <b>Cleaning:</b> We use our state-of-the-art Rotovac equipment for a
            fast and thorough deep cleaning of your carpet.
          </p>
          <p className="theme-text">
            <b>Post-inspection:</b> Once the project is completed, we re-inspect
            the carpet with you to ensure that all the work was done to your
            satisfaction.
          </p>
          <p className="theme-text">
            <b>Protect & Groom:</b> When necessary we will place blocks or foil
            under furniture legs to protect them during the drying process and
            groom the carpet for a clean inviting look.
          </p>
          <p className="theme-text">
            <b>What you should do after the carpet cleaning:</b> To decrease
            drying time try to keep the room temperature about 72 degrees and
            use fans to circulate the air around the cleaned carpet.
          </p>
        </div>
      </section>
    </>
  );
}
