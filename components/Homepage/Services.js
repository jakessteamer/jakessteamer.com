import ServiceCard from "@components/ServiceCard";

export default function Services() {
  return (
    <>
      <div className="container px-4 lg:px-12 pt-3 lg:pt-12 mx-auto theme-surface ">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <p className="sm:text-3xl text-3xl lg:text-4xl font-bold title-font mb-2 content-title">
              Services
            </p>
            <hr className="h-1 w-1/2 bg-blue-900 rounded h-underline" />
          </div>
          <div
            id="service__section--text"
            className=" lg:w-1/2 w-full prose-lg">
            <p>
              Your carpet acts as an air filter by trapping dust mites, pollen,
              mold spores, pet dander, cockroach allergens, and other pollutants
              brought in from the outside. However, your carpet has a limit to
              how much it can hold before releasing pollutants back into the
              air.
            </p>
            <p>
              steam cleaning uses pressurized hot water to penetrate and loosen
              dirt unreachable by a vaccuming. The heat kills bacteria, mold,
              mildew, and allergens. The water, stains, and odors are extracted
              by a powerful suction vacuum. Your carpets are left sanitized and
              dry in a few hours.
            </p>

            <p>
              Steam cleaning can improve indoor air quality, remove stains,
              odors, restore color, and keep your carpets looking good.
            </p>
            <p>
              Call Jake's Steamer for a free consultation. We'll make your home
              or business cleaner, happier, healthier.
            </p>

            <p className="font-bold theme-blue my-8">
              Licensed + Certified + Insured | Family + Locally Owned
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap px-4">
          <ServiceCard
            imgSrc="/images/carpets/jakes-steamer-carpet-cleaning-service-card.png"
            alt="Carpet cleaning service card"
            title="Carpet & Area Rug Cleaning"
            desc="
          We specialize in carpet cleaning. Over the last 15+ years we have
          removed countless stains and brought back life into many carpets.
          Our customers trust us with their homes and businesses and in
          return we have guarenteed piece of mind and 100% satisfaction.
        "
            href="/CarpetCleaning"
            tags={["stains", "smells", "odors"]}
          />
          <ServiceCard
            imgSrc="/images/airducts/jakes-steamer-air-duct-cleaning-card.jpg"
            alt="Jake's Steamer Air Duct Cleaning Service"
            title="Air Duct Cleaning"
            desc="
          Air duct cleaning can drasticially improve indoor air quality by
          removing bacteria, mold, and mildew spores. We use an EPA
          registered biocide fog agent to destroy contaminants, a odor
          killer deodorizer, and anti-bacterial sealant.
        "
            href="/AirDuctCleaning"
            tags={["clean air"]}
          />
          <ServiceCard
            imgSrc="/images/water-damage-restoration/service-card.jpg"
            alt="Jake's Steamer Water Damage Restoration Service Card"
            title="Emergency Flood"
            desc="
            Many building materials act like sponges, soaking up enough water in minutes to take weeks to dry out. If moisture is not removed as soon as possible wood warps, buckles, cups, and splits.  Sheetrock and gypsum board sag and crumble. Bacteria and mold growth thrive is moist environments causing smelly odors and material decay.
           "
            href="/WaterDamageRestoration"
            tags={["Water Removal", "mold removal", "24/7"]}
          />
        </div>
      </div>

      {/* CTA */}

      <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center ">
        <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center mr-4">
          <p className="title-font sm:text-4xl text-3xl mb-4 font-medium theme-blue">
            Certified, Licensed,
            <br className="hidden lg:inline-block" />
            and Insured
          </p>
          <p className="mb-8 leading-relaxed theme-text">
            You are looking for an professional cleaning service you can trust.
            Our technicians have been trained specificially for the job. Leave
            the DIY for another project.
          </p>
        </div>
        <img
          className="lg:w-1/2 dark:bg-gradient-to-r dark:from-blue-900 dark:to-white bg-gradient-to-l from-white to-blue-900   object-cover object-center rounded-lg xl:ml-auto"
          alt="hero"
          src="/images/iicrc-certification.png"
        />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap px-4">
          <ServiceCard
            imgSrc="/images/tile/tile-3-640x480-md.jpg"
            alt="Jake's Steamer Tile Cleaning Service Card"
            title="Tile & Grout Cleaning & Sealing"
            desc="
            If you see that your tile starting to appear stained, old or aged it’s time to call in a professional. When not properly maintained, your tile and grout become breeding grounds for mold and mildew. Grout should be cleaned and resealed regularly to prevent dirt, water and grime from becoming trapped in your grout’s porous surface."
            href="/TileAndGroutCleaning"
            tags={["Vinyl", "Mexican Salito", "Terrazzo"]}
          />
          <ServiceCard
            imgSrc="/images/pet-stain-and-odor-removal/pet-stain-and-odor-removal-service-2-jpg.jpg"
            alt="Jake's Steamer Pet Stain and Odor Removal Service Card"
            title="Pet Stain and Odor Removal"
            desc="
            Pet stains don’t just smell and look bad, they can cause illness and irritation. Pet urine contains ammonia, especially cat pee has a high level, which can make the lungs feel like they are burning. Urine also contains proteins which can become a feeding ground for terrible bacterias which could make you and your family sick.
    "
            href="/StainAndOdorRemoval"
            tags={["stains", "smells", "odors"]}
          />
          <ServiceCard
            imgSrc="/images/upholstery/couch-upholstery-square.jpg"
            alt="Jake's Steamer Upholstery Cleaning Service Card"
            title="Upholstery Cleaning"
            desc="
      We provide quality upholstery steam cleaning service for all types
      of upholstery fabric. The standard service includes cleaning of
      all upholstered furniture and cushions of the same material.
    "
            href="/UpholsteryCleaning"
            tags={["velvet", "leather", "pillows"]}
          />
        </div>
      </div>
    </>
  );
}
