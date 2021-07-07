import ServiceCard from "@components/ServiceCard";

export default function Services() {
  return (
    <>
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
             From leaking faucets to broken water heaters to flooding, water
             damage is one of the most common and potentially destructive
             problems you can face as a homeowner. In water damage situations
             it is important to act immediately. We have the tools to extract
             all the water and dry the area. We finish the process with
             sanitizing and deodorizing leaving your property clean and
             protected.
           "
            href="/WaterDamageRestoration"
            tags={["Water Removal", "mold removal"]}
          />
        </div>
      </div>

      {/* CTA */}

      <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center ">
        <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center mr-4">
          <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-500">
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
          className="lg:w-1/2 dark:bg-gradient-to-r dark:from-blue-900 dark:to-white-accent bg-gradient-to-l from-white-accent to-blue-900   object-cover object-center rounded-lg xl:ml-auto"
          alt="hero"
          src="/images/iicrc-certification.png"
        />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap px-4">
          <ServiceCard
            imgSrc="/images/tile/tile-3-640x480-md.jpg"
            alt="Jake's Steamer Tile Cleaning Service Card"
            title="Tile & Grout Cleaning"
            desc="
             Our grout cleaning services can help restore your grout to its sparkling clean condition, making your home safer and more beautiful.
        "
            href="/TileAndGroutCleaning"
            tags={["Vinyl", "Mexican Salito", "Terrazzo"]}
          />
          <ServiceCard
            imgSrc="/images/pet-stain-and-odor-removal/pet-stain-and-odor-removal-service-2-jpg.jpg"
            alt="Jake's Steamer Pet Stain and Odor Removal Service Card"
            title="Pet Stain and Odor Removal"
            desc="
      Our pets love to leave us presents from time to time.
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
