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
            className=" lg:w-1/2 w-full prose-lg ">
            <p className="dark:text-blue-100">
              Your carpets become an air filter by trapping dust mites, pollen,
              mold spores, pet dander, allergens, and other pollutants brought
              in from the outside.
            </p>
            {/* <p className="text-blue-900 dark:text-blue-100">
              Steam cleaning uses hot water to loosen and extract dirt
              unreachable by a vaccuming. The heat kills bacteria, mold, mildew,
              and allergens. The water, stains, and odors are extracted by a
              powerful suction vacuum. Your carpets are left sanitized and dry
              in a few hours.
            </p> */}
            <p className="theme-text">
              In your home or business, we use{" "}
              <strong>Hot Water Extraction</strong> (HWE), the only carpet
              cleaning method recommended by Shaw, Mohawk, and other carpet
              manufacturers. Our <strong>truck-mounted</strong> unit allows us
              to extract all the way down to the backing, providing the{" "}
              <strong>deepest clean</strong> possible and the shortest dry time.
              Backed by our <strong>100% satisfaction guarentee</strong>.
            </p>
            <p>
              Steam cleaning can improve indoor air quality, remove stains,
              odors, restore color, and keep your carpets looking absolutely
              beautiful!!
            </p>
            <p>
              Call Jake's Steamer for a free consultation. We'll make your home
              or business cleaner, happier, healthier.
            </p>

            <p className="font-bold theme-blue my-8">
              Licensed + Certified + Insured | Family + Locally Owned
            </p>
            <div className="flex">
              <a
                href="https://www.facebook.com/jakessteamer01/"
                className="mx-2 text-blue-500 dark:text-white-accent hover:text-blue-900 dark:hover:text-blue-500"
                aria-label="Facebook">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 512 512">
                  <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/jakessteamer01/"
                className="text-blue-500 text-sm md:text-lg">
                Follow Us On Facebook
              </a>
            </div>
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
            Carpets trap a multitude of dust particles, dirt, and bacteria between the fibers. While vacuuming helps remove some of this debris, vacuuming alone cannot get rid of it all. To remove embedded dirt, stains, odors, kill germs you have to steam clean your carpets.
        "
            href="/CarpetCleaning"
            tags={["stains", "smells", "odors"]}
          />
          <ServiceCard
            imgSrc="/images/airducts/jakes-steamer-air-duct-cleaning-card.jpg"
            alt="Jake's Steamer Air Duct Cleaning Service"
            title="Air Duct Cleaning"
            desc="
            Similar to dust collecting on the surfaces inside your home dust collects inside air duct surfaces creating a thick fuzzy coating. Air duct cleaning is designed to remove dust and other airborne particles from your heating, ventilation, and air conditioning (HVAC) system. You will be able to breathe easier knowing that there is less airborne dust, pollen, mold and other allergens floating through your home.
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
            Grout is a mixture of sand, cement and water, once it’s installed and dried it has no protection from stains, spills and dirt. Grout between the tiles is actually very porous, it will absorb liquids and dirt, which will stain the grout. As the grout in your home becomes dirty over time, it will start changing color, making the tile floors look bad and unsanitary. We can deep clean your floor. Once the surface is completely clean we will apply our grout sealant to protect your floors from future spills and grime.
            "
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
            title="Furniture Cleaning"
            desc="
            No matter how often you vacuum, the surface of your furniture still accumulates dirt, stains, and odors. The result is furniture that is uninviting. Steam cleaning can revitalize your furniture by breaking down and pulling out embedded dirt and stains while neutralizing bad odors. We clean all kinds of fabrics including sofas, love seats, dining chairs, curtains, and mattresses.
    "
            href="/UpholsteryCleaning"
            tags={["velvet", "leather", "pillows"]}
          />
        </div>
      </div>
    </>
  );
}
