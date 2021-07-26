/* eslint-disable react/no-unescaped-entities */

import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";

export default function WaterDamageRestoration() {
  return (
    <>
      <PageSeo
        title="Water Damage Restoration"
        description="Every so often, leaks can cause floods. It’s important to call a professional water damage restoration specialist immediately. We can help you get back on track and offer the most comprehensive cleanup services in West Texas."
        url={`${siteMetadata.siteUrl}/WaterDamageRestoration`}
      />
      <article className="relative max-w-3xl mx-auto px-6 prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img
            src="/images/water-damage-restoration/water-damage-restoration-600x600.jpg"
            alt=""
          />
        </div>
        <h1 className="content-title">
          WATERPROOFING | 24/7 WATER DAMAGE EXPERTS
        </h1>
        <p>
          Jake's Steamer The Carpet Cleaner waterproofing services are committed
          to providing you with true one-stop emergency water damage cleanup &
          remediation services. Over the years we have developed protocol and
          procedures that ensure that our response time is quick, and the work
          we perform restores your property to better than pre-incident
          condition. We happily serve both commercial and residential clients
          24/7. Questions? Please call.
        </p>
        <h2 className="content-title">
          LET US HANDLE YOUR INSURANCE ADJUSTER | QUESTIONS? CALL
        </h2>
        <ul>
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

        {/* <footer>
          <h2 className="content-title">References</h2>
          <ol className="reference-list">
            <li className="reference">
              <a
                href="https://www.lung.org/clean-air/at-home/indoor-air-pollutants"
                rel="nofollow">
                Indoor Air Pollutants And Health. American Lung Association
              </a>
            </li>
          </ol>
        </footer> */}
      </article>
    </>
  );
}
