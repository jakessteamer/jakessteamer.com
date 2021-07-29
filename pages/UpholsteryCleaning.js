/* eslint-disable jsx-a11y/anchor-is-valid */

import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";

export default function UpholsteryCleaning() {
  return (
    <>
      <PageSeo
        title="Upholstery Cleaning"
        description="Let our professionals with many years of experience make your upholstery look and feel better by removing the dirt and stains that build up over time."
        url={`${siteMetadata.siteUrl}/UpholsteryCleaning`}
      />
      <article className="relative max-w-3xl mx-auto px-6 prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/upholstery/upholstery-sp1.jpg" alt="" />
        </div>
        {/* WHY ARE YOU TALKING TO ME [EDUCATION ] */}
        {/* HOW DO YOU DO THE THINGS */}
        {/* PROVE IT */}

        {/* WHAT WILL WE GIVE ME */}
        <h1 className="content-title">How To Clean Upholstery</h1>
        <p>
          Since your upholstered furniture generally cost money, they can be
          considered as great investments that add to a household. Like any
          other investment, they should be taken cared of, since they will only
          remain beautiful as long as we do our part in making sure that they
          remain beautiful.
        </p>
        <h2 className="content-title">Upholstery Cleaning Process</h2>
        <p>
          We will evaluate your upholstery's needs. Every fabric must be treated
          differently. We will decide what will be the best method for cleaning
          your upholstery. You will know up front what we can and can’t do. This
          way there are no surprises.
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
          Here are tips to make sure that your upholstery remains clean and
          beautiful.
        </p>
        <p>
          Prevention is always the best maintenance for anything, and that
          includes upholstery! Keep it safe from any spills or sharp objects.
          When you are sitting or lying down on your upholstered furniture,
          remember to refrain from doing any motion that can stretch the fabric,
          such as sudden stretching or kicking.
        </p>
        <h2 className="content-title">Mattress Cleaning</h2>
        <p>
          Cleaning your mattress can really make a difference in your bedroom.
          You can sleep better and enjoy a fresh scent coming from the bed
          linings.
        </p>
        <h2 className="content-title">Leather Cleaning</h2>
        <p>
          Leather is so delicate any small mistake in the cleaning session can
          lead to an irreversible outcome.
        </p>

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
