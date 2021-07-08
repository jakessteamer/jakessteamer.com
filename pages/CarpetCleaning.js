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
            Home and Commericial Carpet Cleaning Services
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
          {/* On-site Consultation */}
          <p className="font-bold">Consultation and Pre-Inspection</p>
          <p className="theme-text">
            The first step in the process is meeting with you to get to know
            exactly how you would like your floors cleaned. You'll get to know
            the wear age, expected fiber life, and cleaning schedules to extend
            the life of your carpets. We'll then create and explain a solution
            that achieves your cleaning goals while protecting your home.
          </p>
          {/* Insert story */}
          <p className="theme-text">
            It is hard to appreciate condition of the carpet over the phone
            without on site inspection. Depending on the type and amount of
            stains sometimes it is better to replace the carpet than clean it.
          </p>
          {/* <!-- Preparation and Pre-treatment--> */}
          <p className="text-xl font-bold">Preparation and Pre-treatment</p>
          <p className="theme-text">
            Preparation starts with vacumming to remove surface level dirt. An
            industry standard non-toxic pre-treatment solution is then applied
            to the whole carpet not just the stains. Even though your carpet
            looks clean it has an overall color from dirt and stains that are
            not easily visible. If only the stains were pre-treated the final
            color would not be the same.
          </p>
          <p className="font-bold">
            Knowing What Cleaning Solutions to Use and How to Use Them
          </p>
          <p className="theme-text">
            Jake's Steamer's technicians are certified by the Institute of
            Inspection Cleaning and Restoration Certification (IICRC) and
            therefore trained in the chemistry and application of cleaning
            solutions.
          </p>
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
          <p className="text-xl font-bold">Steaming Cleaning</p>
          <p>
            We us a truck mounted system that combines a small amount of
            detergent with hot water. The hot water is apply to the carpet to
            break down dirt, stains, and other contaminants. The hot water is
            then extracted via vacuum bringing with it the stains and dirt that
            cause discoloration. This technique is formally known as "hot water
            extraction".
          </p>

          <p className="theme-text" />
          <p>
            A common call we get is someone who uses a Rug Doctor or their own
            chemical concoction to clean their carpet and they have made the
            carpet worse.
          </p>
          <p>For example when the carpet browns after they have cleaned it</p>
          <div className="c-article__image">
            <div className="image__container">
              <img
                alt="Website Mockup"
                src="/images/carpet-brown-after-cleaning.jpeg"
                decoding="async"
                className="fig"
              />
            </div>
          </div>
          {/* <section className="h-auto grid grid-cols-1 grid-rows-1 gap-0">
            <figure className="relative row-start-1 row-end-1 col-start-1 col-end-1">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                src="/images/carpet-brown-after-cleaning.jpeg"
                decoding="async"
                sizes="100vw"
                alt="carpet-brown-after-cleaning"
              />
              <figcaption>
                <p>Carpet browning after cleaning</p>
              </figcaption>
            </figure>
          </section> */}
          {/* <p className="theme-text">
            Five signs that scream aloud it’s time for rug cleaning
          </p>
          <dl>
            <dt className="text-blue-500">Visible Stains</dt>

            <dd className="theme-text">
              The first sign is visible stains. A visible stain on the rugs can
              ruin its overall appearance. If you’ve just noticed a stain on
              your rug, no doubt this is the right time to treat it. For this,
              you can call an expert as they have years of experience in the rug
              cleaning field and are equipped with the right tools to treat the
              stain.
            </dd>

            <dt className="theme-text">Allergies</dt>

            <dd className="theme-text">
              Are you experiencing any allergies? It is a warning sign that your
              rugs are not clean and full of pet dander, dead bugs, skins, and
              other particles that get trapped in them and result in causing
              irritation, allergies, or itching. Get the rug cleaned immediately
              by rug cleaning NY professionals.
            </dd>

            <dt className="text-blue-500">Noticeable odors</dt>

            <dd className="theme-text">
              An unpleasant smell or odor can disturb the entire aura of your
              home. If you’re experiencing the same unusual smell in your room
              or home, there is a high chance that it is coming from your rugs.
              By the time you notice such an odor, we suggest you get the rugs
              cleaned by professionals or clean them by yourself to eliminate
              this bad smell from your rugs.
            </dd>

            <dt className="text-blue-500">Dull Look</dt>

            <dd className="theme-text">
              If your rugs have lost their brand-new look and don’t appear to be
              wow, no doubt, it’s time to clean it. When you or an expert clean
              the rugs with a cleaning solution, they will bring back their
              amazing look and shine.
            </dd>
          </dl> */}
        </div>
      </section>
    </>
  );
}
