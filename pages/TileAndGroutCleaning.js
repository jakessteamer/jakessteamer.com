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
      <article className="relative max-w-960 mx-auto prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/tile/tile-cleaning.jpg" alt="" />
        </div>
        <h1 className="content-title px-5">Tile and Grout Cleaning</h1>
        <p className="px-5">
          Grout is a mixture of sand, cement and water, once it’s installed and
          dried it has no protection from stains, spills and dirt. Grout between
          the tiles is actually very porous, it will absorb liquids and dirt,
          which will stain the grout permanently if not stain resistant sealant
          is not applied. As the grout in your home becomes dirty over time, it
          will start changing color, making the tile floors look bad and
          unsanitary.
        </p>

        <p className="px-5">
          What makes tile cleaning and grout cleaning so difficult? Home
          cleaning methods such as a tooth brush and a regular cleaning solution
          does not compare to using a high speed machine that uses pressurized
          hot water to throughly scrubs and extracts dirt from tile. With our
          truck mounted system we can achieve{" "}
          <strong className="quick-read-highlights">
            hundreds of multi-directional cleaning passes
          </strong>{" "}
          per minute leaving your tile and grout like new!
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
              <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <h2 className="w-full font-bold text-2xl  content-title leading-tight mb-2">
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
                    <li className=" prose-list-item-override">
                      Other Tile and Grout Surfaces
                    </li>
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
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How Long is this site live?
                  </summary>

                  <span className="theme-text">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Can I install/upload anything I want on there?
                  </summary>

                  <span className="theme-text">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I migrate to another site?
                  </summary>

                  <span className="theme-text">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I change the domain you give me?
                  </summary>

                  <span className="theme-text px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How many sites I can create at once?
                  </summary>

                  <span className="theme-text px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I communicate with you?
                  </summary>

                  <span className="theme-text px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
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
