import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";

export default function StainAndOdorRemoval() {
  return (
    <>
      <PageSeo
        title="Stain and Odor Removal"
        description="Jake's Steamer sanitizes and deodorizes carpets and upholstered furniture to completely eliminate stains and urine odors. Jake’s freshens the carpet by treating pet odors and restoring the original freshness and texture."
        url={`${siteMetadata.siteUrl}/StainAndOdorRemoval`}
      />
      <article className="relative max-w-3xl mx-auto px-6 prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/stain-and-odor-removal.jpg" alt="" />
        </div>
        <h1 className="content-title">Stain and Odor Removal</h1>
        <p>
          For many dog and cat owners, pet odor removal from carpets is an
          unfortunate fact of life. Puppies and kittens have a tendency to mess
          up flooring quite a bit before they are properly trained, and by the
          time they’re going outside or in the litter box, the floor may
          resemble a warzone.
        </p>
        <p>
          There are, however, a few ways a homeowner can wipe out the smells and
          stains that animals leave behind. In some cases, a professional may be
          needed to handle a particularly difficult and soiled situation.
        </p>
        <p>
          The first thing to do when attempting pet odor removal is to locate
          the problem area on the carpet. This is often easier said than done,
          as dark flooring can make the area practically invisible. If finding
          the spot is too hard to do with the naked eye, illuminate the area
          with a black light. This type of bulb will highlight areas where
          Fluffy or Spot have been doing their business and will make give a
          starting spot when it comes to tackling the problem.
        </p>
        <p>
          Another way to track down soiled spots is to watch how other animals
          track through the home. If there are multiple dogs or cats in the
          house, they will stop and thoroughly investigate and sniff any area
          where other animals have evacuated.
        </p>
        <p>
          Animals have a tendency to use the bathroom where they detect the
          scent of urine or feces, so the problem could snowball and training
          the pup or kitten will be that much more difficult.
        </p>
        <p>
          Pet odor removal must also be done immediately because if the soiled
          patch of carpet is allowed to sit for too long, it will require more
          dramatic methods to get rid of it. If the animals are allowed to soil
          the flooring for weeks at a time, and the fabric is not cleaned
          thoroughly every time, the carpet may need to be replaced.The best way
          to approach pet odor removal is to clean from the outside of the stain
          in.
        </p>
        <p>
          Starting from the center may push the stain out further and deeper
          into the flooring. Scrub inward with a bristle brush and paper towels.
          Use the paper towels to absorb liquid, and don’t scrub with them, as
          they may tear and get intertwined with carpet fibers. Urine odor
          removal requires six separate steps in order to ensure successful and
          complete removal. Three of these steps involve odor control chemicals
          and three involve rinsing and removing liquids.
        </p>
        <strong className="content-title">
          These steps must be completed in the order written and ALL steps must
          be done to ensure that you have broken down and removed the all of the
          different sources of the odor involved in urine.
        </strong>
        <ol>
          <li>
            Totally saturate the area with a Preconditioner to break down the
            uric salts. Allow at least 10 minutes of dwell time to completely
            dissolve the salts.
          </li>
          <li>
            Apply the Water Claw to the area and vacuum the liquid out. While
            the vacuum is running, flush a bucket of warm water around the claw
            to flush excess salt residues away.
          </li>
          <li>
            Totally saturate the area with Odor Eliminator. Allow 45 minutes of
            dwell time, giving the enzymes time to fully digest the proteins and
            the lipids (fats and oils) involved in the urine deposit.{" "}
          </li>
          <li>
            Apply the Water Claw to the area and vacuum the liquid out. While
            the vacuum is running, flush a bucket of warm water around the claw
            to flush out the enzymes
          </li>
          <li>
            Totally saturate the area with Fresh Wave Air and Surface Liquid.
            Allow 5 minutes dwell time.
          </li>
          <li>
            Apply the Water Claw to the area and remove as much liquid as
            possible until no more moisture is visible through the sight
            plastic.
          </li>
        </ol>

        {/* <footer>
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
        </footer> */}
      </article>
    </>
  );
}
