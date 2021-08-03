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
        <h1 className="content-title">Upholstery Cleaning</h1>

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
