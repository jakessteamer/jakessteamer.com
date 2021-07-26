/* eslint-disable react/no-unescaped-entities */

import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";

export default function TileAndGroutCleaning() {
  return (
    <>
      <PageSeo
        title="Tile and Grout Cleaning"
        description="Clean, seal and protect your tile and grout. For over 20 years, we have been providing the best floor cleaning services for any types of stone, ceramic, marble or other tile floors and that includes grout."
        url={`${siteMetadata.siteUrl}/TileAndGroutCleaning`}
      />
      <article className="relative max-w-3xl mx-auto px-6 prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/tile/tile-cleaning.jpg" alt="" />
        </div>
        <h1 className="content-title">How To Clean Tile and Grout</h1>
        <p>
          Tile and grout look great in homes but are prone to gathering
          contaminants and mold. In your bathroom, due to high moisture, it is
          an easy place for mold and mildew to grow. Kitchens tend to build up
          grease and food on the floor and this gets pressed into your grout. In
          places like entryways, mud and dirt tend to discolor grout.
        </p>
        <h2 className="content-title">Tile and Grout Cleaning Process</h2>
        <p>
          We first apply a non-toxic cleaner to your tile and grout to break up
          any dirt or grease stuck in the grout. We then deep clean your tile
          and grout with high-speed machine that scrubs and extracts the dirt
          from your tile and grout. For particularly stubborn areas, vapor steam
          cleaning may be used. Once the surface is completely clean we will
          apply our grout sealant to protect your floors from future spills and
          grime.
        </p>
        {/* <p>
          Professional Tile Cleaning and Grout Cleaning process will keep your
          tile surfaces, grout lines and countertops clean and fresh. We can
          boldly go where bottled cleaners and household mops have never gone
          before!
        </p> */}

        <p>
          What makes tile cleaning and grout cleaning so difficult? Dirt and
          contaminants build up over time, making your tiles look dull, and
          causing grout to darken and appear discolored. Home cleaning methods
          simply can't get at the built-up, ground-in dirt that has settled in
          hard-to-reach places. Dirt trapped in the pores of tile and grout is
          especially difficult to remove with traditional cleaning solutions.
        </p>
        <p>
          Thankfully, Jake’s Steamer powerful truck-mounted cleaning system
          safely cleans floors, showers, and countertops by quickly removing
          dirt and contaminants. Our Tile Cleaning and Grout Cleaning process
          uses heat, a specialized cleaning solution, and vacuum power to remove
          the dirt that homeowners can't.
        </p>
        <p>
          We complete the job with a high-pressure rinse.After cleaning your
          tile and grout, our professional technicians will apply a penetrating
          sealer to protect grout against mildew and staining for up to two
          years. And basic Grout Cleaning isn't the only service we provide. If
          you have colored grout in your kitchen or bathroom or between other
          tile surfaces, Jake’s steamer Tile Cleaning service will safely get
          ceramic and porcelain tiled surfaces sparkling again! And if your tile
          is made of natural material such as granite, marble, slate, travertine
          or Saltillo, no problem!
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
