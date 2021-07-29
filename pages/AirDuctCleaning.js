import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";

export default function AirDuctCleaning() {
  return (
    <>
      <PageSeo
        title="Jake's Steamer central air duct cleaning service cleans dirty airducts. Jake's Steamer is rated affordable and the best from all customers"
        description="Jake's Steamer central air duct cleaning service improves the indoor air quality of your home by removing dust, allergens, and pollutants that build up in your air ducts overtime."
        url={`${siteMetadata.siteUrl}/AirDuctCleaning`}
      />
      <article className="relative max-w-3xl mx-auto px-6 prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/airducts/airduct.jpg" alt="" />
        </div>
        {/* WHY ARE YOU TALKING TO ME [EDUCATION ] */}
        {/* HOW DO YOU DO THE THINGS */}
        {/* PROVE IT */}

        {/* WHAT WILL WE GIVE ME */}
        <h1 className="content-title">Air Duct Cleaning</h1>
        <p>
          According to the EPA, dust in your ventilation systems can lead to
          your indoor air quality being 70 to 100 times more polluted than
          outdoors. Contaminants that can find their way into your ductwork are:
          bacteria, chemical residue, dust, mildew, pollen, viruses, and other
          airborne contaminants.
        </p>
        <p>
          Americans spend 90% of their time indoors (American Lung Association).
          Allergies, asthma, respiratory illnesses, or even frequent cold
          symptoms could be the result of a dirty duct system. Have you had your
          air ducts cleaned recently? If not schedule a cleaning today!
        </p>
        <h2 className="content-title">Air Duct Cleaning Inspection</h2>
        <p>
          A successful air duct cleaning requires an air duct inspection. Our
          air duct cleaning inspection determines if cleaning is needed and to
          what extent. An air duct leakage test is a foundational step for
          proper air duct cleaning.
        </p>
        <p>
          We report back to you before moving forward with a cleaning. The air
          duct cleaning inspection ensures your air ducts are properly cleaned.
          Dirty ducts can cost you in additional repair, maintenance, and early
          replacement of air conditioning and heating system.
        </p>
        <h2 className="content-title">How To Clean Air Ducts</h2>
        <p>
          Clean & healthy air quality require air duct cleaning. Our air duct
          cleaning take advantage proper cleaning methods that include an
          anti-bacterial coating. We use patented equipment to ensure every part
          of your duct system is cleaned properly. All contaminants collected
          are disposed of safely.
        </p>
        <p>
          We use an EPA registered biocide fog agent to destroy bacteria, germs,
          mold, and mildew spores. A sealant and an odor kill deodorizer is also
          applied. Before the air duct cleaning is finished, your filters will
          be replaced and the registers and the blower unit will be cleaned.
        </p>

        <footer>
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
        </footer>
      </article>
    </>
  );
}
