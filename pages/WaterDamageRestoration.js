/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Image from "next/image";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useAppContext } from "../context/AppState";

export default function WaterDamageRestoration() {
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
        title="Water Damage Restoration"
        description="Every so often, leaks can cause floods. It’s important to call a professional water damage restoration specialist immediately. We can help you get back on track and offer the most comprehensive cleanup services in West Texas."
        url={`${siteMetadata.siteUrl}/WaterDamageRestoration`}
      />
      <section className="mt-15vh flex flex-col items-start justify-center w-9/12 mx-auto mb-16">
        <header ref={elementRef}>
          <h1 className="md:text-5xl my-12 text-3xl font-bold tracking-tight text-blue-500 dark:text-white-accent">
            Water Damage Restoration
          </h1>
        </header>
        <div style={{ position: "relative", width: "100%", height: "320px" }}>
          <Image
            alt="Water Damage"
            className="rounded"
            src="/images/water-damage-restoration/water-damage-restoration-600x600.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-none w-full mt-12">
          <h1>WATERPROOFING | 24/7 WATER DAMAGE EXPERTS</h1>
          <p className="theme-text">
            Jake's Steamer The Carpet Cleaner waterproofing services are
            committed to providing you with true one-stop emergency water damage
            cleanup & remediation services. Over the years we have developed
            protocol and procedures that ensure that our response time is quick,
            and the work we perform restores your property to better than
            pre-incident condition. We happily serve both commercial and
            residential clients 24/7. Questions? Please call.
          </p>
          <p className="theme-text">
            LET US HANDLE YOUR INSURANCE ADJUSTER | QUESTIONS? CALL
          </p>
          <ul className="theme-text">
            <li>Water proofing damage experts</li>
            <li>Water extraction & remediation</li>
            <li>Complete drying services</li>
            <li>Carpet re-installation</li>
            <li>Dry wall re-installation</li>
            <li>Carpentry</li>
            <li>Sheet rock re-installation</li>
            <li>Base boards re-installation</li>
            <li>Insulation re-installation</li>
          </ul>
        </div>
      </section>
    </>
  );
}
