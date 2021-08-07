/* eslint-disable react/no-unescaped-entities */

import { FAQPageJsonLd } from "next-seo";
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
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "How Long does it take to clean tile and grout?",
            acceptedAnswerText: "Generally 4-6 hours",
          },
          {
            questionName: "How do you clean tile and grout?",
            acceptedAnswerText:
              "First, we apply an environmentally safe solution to your tile & grout floors which emulsifies the dirt. Secondly, we allow the solution enough time to dwell to reach its maximum potential. Next we agitate the grout lines with a grout cleaning brush. Finally we use a high pressure rotary tool with dual rotating jets to clean the floor and extract the dirt and grime out to our truck. We use over 200 degrees of heat to steam and clean your floors back to looking new.",
          },
          {
            questionName: "Why is it important to have your grout sealed?",
            acceptedAnswerText:
              "After professional cleaning is completed, the pores in the grout are opened up again and will trap dirt and soak up liquids. Some liquids such as red wine, soy sauce, coffee and other dark/colored liquids will discolor the grout and often the discoloration is permanent. Sealers block the pores inside the grout and keep the liquids on top and that gives you time to wipe up the mess.",
          },
          {
            questionName:
              "How soon can we walk on the tile floors after the grout is sealed?",
            acceptedAnswerText:
              "Usually it takes roughly 1 hour for a clear, penetrating sealer to soak into the grout and dry. Color sealers dry much quicker and may be stepped on 5 minutes after installation. Once the sealer is dry, the floors may be used normally. Both sealer require 48 hours to fully cure and harden. During the curing process, the grout should not be exposed to any liquids.",
          },
          {
            questionName: "What is color seal?",
            acceptedAnswerText:
              "Color sealer is a sealer that has color added to it. Not only does the color sealer seal the grout, it makes the grout color consistent which makes the tile floors look new. We use the highest quality color sealers that may last up to 15 years.",
          },
          {
            questionName: "What is clear sealer?",
            acceptedAnswerText:
              "Clear sealer is a sealer with no colour added. We use the penetrating clear sealer, which penetrates deep into the grout and blocks any dirt and liquids from getting into the pores of the grout. Clear sealer does not affect the look of the grout.",
          },
          {
            questionName:
              "How soon can we start walking on the floors that have been deep cleaned?",
            acceptedAnswerText:
              "About 30 minutes after we rinse the tile floors with our truck-mounted system.",
          },
          {
            questionName: "Can I use bleach to clean the grout?",
            acceptedAnswerText:
              "No. Bleach is a chemical that is too harsh for the grout; it erodes the grout and can cause discoloration.",
          },

          {
            questionName: "Can I use vinegar to clean tile surfaces?",
            acceptedAnswerText:
              "Yes and no. Vinegar contains acid, which will erode the grout slowly if not neutralized. To neutralize the acid, use baking soda mixed with water and mop over the area that was cleaned with vinegar.",
          },
        ]}
      />
      <article className="relative max-w-960 mx-auto prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/tile/tile-cleaning.jpg" alt="" />
        </div>
        <h1 className="content-title px-5">Tile and Grout Cleaning</h1>

        <p className="px-5">
          We can boldly go where bottled cleaners and household mops have never
          gone before! What makes tile cleaning and grout cleaning so difficult?
          Dirt and contaminants build up over time, making your tiles look dull,
          and causing grout to darken and appear discolored. Home cleaning
          methods simply can't get at the built-up, ground-in dirt that has
          settled in hard-to-reach places. Dirt trapped in the pores of tile and
          grout is especially difficult to remove with traditional cleaning
          solutions.
        </p>
        <p className="px-5 text-2xl font-bold">
          Thankfully, Jake’s Steamer powerful truck-mounted cleaning system
          safely cleans floors, showers, and countertops by quickly removing
          dirt and contaminants.
        </p>
        <p className="px-5">
          Our Tile Cleaning and Grout Cleaning process uses heat, a specialized
          cleaning solution, and vacuum power to remove the dirt that homeowners
          can't. We complete the job with a high-pressure rinse. After cleaning
          your tile and grout, our professional technicians will apply a
          penetrating sealer to protect grout against mildew and staining for up
          to two years. Jake’s Steamer tile cleaning service will safely get all
          tiled surfaces sparkling again!
        </p>

        <section className="ig-style--gallery">
          <div className="aspect-w-1 aspect-h-1">
            <img
              className=""
              src="/images/tile/kitchen-tile-cleaning-1.jpg"
              alt="We not only clean your tile but restore your grout lines with color seal. These are a few before and after photos of a job we completed recently."
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              className=""
              src="/images/tile/kitchen-tile-cleaning-2.jpg"
              alt="We not only clean your tile but restore your grout lines with color seal. These are a few before and after photos of a job we completed recently."
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              className=""
              src="/images/tile/terracotta-tile-cleaning.jpg"
              alt="Terra-cotta tile cleaning"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              className=""
              src="/images/tile/tile-cleaning-1.jpg"
              alt="When is the last time you deep cleaned your flooring? If you can’t remember, it’s probably in need of a thorough cleaning. Jake's Carpet & Tile Cleaning specializes in tile and grout cleaning, leaving your old floors looking brand new. Dial our number to transform your floors!"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              className=""
              src="/images/tile/shower-tile-cleaning-1.png"
              alt="Shower tile cleaning"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              className=""
              src="/images/tile/shower-tile-cleaning-2.jpeg"
              alt="Shower tile cleaning"
            />
          </div>
        </section>

        <h2 className="content-title px-5">Tile and Grout Sealing</h2>
        <p className="px-5">
          After cleaning your tile and grout we apply a grout sealer. The sealer
          will penetrate into the grout and fill up the pores and block any
          liquids and dirt from being absorbed. Sealer protects grout against
          mildew and staining for up to two years.
        </p>
        <p className="px-5">
          We also offer a wide variety of grout color sealers. Color sealing is
          used for correcting inconsistent grout color or for changing the grout
          color to a different color completely. Grout color sealing allows for
          your grout to have a new clean grout surface without needing to
          replace the grout in most cases.
        </p>
        <div className="container mx-auto my-5">
          <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-88 mx-2">
            <div className="z-0 order-1 md:order-2 relative w-full md:w-1/2 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg ">
              <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-white bg-opacity-30 bg-cover bg-bottom tile-cleaning-cta-bg-img" />
              <div className="md:hidden absolute bottom-0 md:inset-0 md:h-full p-6 pb-6 flex md:flex-col-reverse md:justify-start items-start cta-card--gradient ">
                <h2 className="w-full cta-card-title">
                  Jake's Steamer Cleans Floors, Showers, Countertops, & More
                </h2>
              </div>
              {/* <svg
                className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                viewBox="0 0 100 100"
                preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,50 0,100" />
              </svg> */}
            </div>

            <div className="z-10 order-2 md:order-1 w-full h-full md:w-1/2 flex items-center -mt-6 md:mt-0">
              <div className="px-4 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <h2 className="hidden md:block h2-prose-override">
                  We Clean Floors, Showers, Countertops, & More
                </h2>
                <p className="text-black pt-6 md:pt-0 override">
                  We clean a variety of tiled surfaces including ceramic,
                  porcelain, and natural stone.
                </p>
                <div className="flex tile-and-grout-services-list md:gap-x-4">
                  <ul className="prose-list-override">
                    <li className=" prose-list-item-override">Granite</li>
                    <li className=" prose-list-item-override">Marble</li>
                    <li className=" prose-list-item-override">Slate</li>
                  </ul>
                  <ul className="prose-list-override">
                    <li className=" prose-list-item-override">Travertine</li>
                    <li className=" prose-list-item-override">Saltillo</li>
                    <li className=" prose-list-item-override">Vinyl & More</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHY ARE YOU TALKING TO ME [EDUCATION ] */}
        {/* HOW DO YOU DO THE THINGS */}
        {/* PROVE IT */}

        {/* WHAT WILL WE GIVE ME */}
        <h2 className="content-title px-5">
          Advantages of Choosing Jake's Steamer Tile Cleaning and Restoration
        </h2>
        <ul className="px-5">
          <li>
            <p>
              The system that we use is completely safe, it does not damage the
              tile and grout and does not splatter any water on the walls or
              surrounding objects.
            </p>
          </li>
          <li>
            <p>
              The process that we use to clean tile and grout does not leave any
              residue or left over the solution, your tile and grout will be dry
              and completely sanitized before we leave!
            </p>
          </li>
        </ul>

        <section className="text-blue-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-blue mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black dark:text-white">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How do you clean tile and grout?
                  </summary>

                  <span className="theme-text">
                    First, we apply an environmentally safe solution to your
                    tile & grout floors which emulsifies the dirt. Secondly, we
                    allow the solution enough time to dwell to reach its maximum
                    potential. Next we agitate the grout lines with a grout
                    cleaning brush. Finally we use a high pressure rotary tool
                    with dual rotating jets to clean the floor and extract the
                    dirt and grime out to our truck. We use over 200 degrees of
                    heat to steam and clean your floors back to looking new.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How soon can we start walking on the floors that have been
                    deep cleaned?
                  </summary>

                  <span className="theme-text">
                    About 30 minutes after we rinse the tile floors with our
                    truck-mounted system.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Why is it important to have your grout sealed?
                  </summary>

                  <span className="theme-text">
                    After professional cleaning is completed, the pores in the
                    grout are opened up again and will trap dirt and soak up
                    liquids. Some liquids such as red wine, soy sauce, coffee
                    and other dark/colored liquids will discolor the grout and
                    often the discoloration is permanent. Sealers block the
                    pores inside the grout and keep the liquids on top and that
                    gives you time to wipe up the mess.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How soon can we walk on the tile floors after the grout is
                    sealed?
                  </summary>

                  <span className="theme-text">
                    Usually it takes roughly 1 hour for a clear, penetrating
                    sealer to soak into the grout and dry. Color sealers dry
                    much quicker and may be stepped on 5 minutes after
                    installation. Once the sealer is dry, the floors may be used
                    normally. Both sealer require 48 hours to fully cure and
                    harden. During the curing process, the grout should not be
                    exposed to any liquids.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    What is color seal?
                  </summary>

                  <span className="theme-text">
                    Color sealer is a sealer that has color added to it. Not
                    only does the color sealer seal the grout, it makes the
                    grout color consistent which makes the tile floors look new.
                    We use the highest quality color sealers that may last up to
                    15 years.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    What is clear sealer?
                  </summary>

                  <span className="theme-text">
                    Clear sealer is a sealer with no colour added. We use the
                    penetrating clear sealer, which penetrates deep into the
                    grout and blocks any dirt and liquids from getting into the
                    pores of the grout. Clear sealer does not affect the look of
                    the grout.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I use vinegar to clean tile surfaces?
                  </summary>

                  <span className="theme-text">
                    Yes and no. Vinegar contains acid, which will erode the
                    grout slowly if not neutralized. To neutralize the acid, use
                    baking soda mixed with water and mop over the area that was
                    cleaned with vinegar.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I use bleach to clean the grout?
                  </summary>

                  <span className="theme-text px-4 py-2">
                    No. Bleach is a chemical that is too harsh for the grout; it
                    erodes the grout and can cause discoloration.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How soon can we start walking on the floors that have been
                    deep cleaned?
                  </summary>

                  <span className="theme-text px-4 py-2">
                    About 30 minutes after we rinse the tile floors with our
                    truck-mounted system.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
