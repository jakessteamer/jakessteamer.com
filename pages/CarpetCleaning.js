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
          <p className="theme-text">
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
          </dl>
        </div>
      </section>
    </>
  );
}
