/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { FAQPageJsonLd } from "next-seo";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useAppContext } from "../context/AppState";

export default function CarpetCleaning() {
  const [elementRef, isIntersecting] = useIntersectionObserver({
    rootMargin: "-100px",
  });
  const { changeNavbarColor } = useAppContext();
  useEffect(() => {
    if (!isIntersecting) {
      changeNavbarColor(true);
    } else {
      changeNavbarColor(false);
    }
  }, [isIntersecting]);
  return (
    <>
      <PageSeo
        title="Carpet Cleaning"
        description={`${siteMetadata.description}`}
        url={`${siteMetadata.siteUrl}/CarpetCleaning`}
      />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "How Long does it take to clean my carpets?",
            acceptedAnswerText: "Generally 1-2 hours",
          },
          {
            questionName: "How long does it take for my carpets to dry?",
            acceptedAnswerText: "4-6 hours depending on the carpet",
          },
          {
            questionName: "Will carpet cleaning get rid of fleas in my carpet?",
            acceptedAnswerText:
              "We cannot guarantee that the cleaning will get rid of all the fleas. We usually recommend that the customer kill the adult fleas first by whichever method they prefer. This is something that a professional exterminator might be able to help with. Please keep in mind that the carpet is not the only place fleas will lay eggs. You might consider having your upholstery treated and cleaned as well as any area rugs or pet beds.",
          },
          {
            questionName: "Do you move furniture?",
            acceptedAnswerText:
              "We move big couches, chairs and dining room tables from side to side. We do not move beds, dressers, china cabinets, entertainment centers, or these types of items. We ask you get all smaller items off of areas to be cleaned. We could move some of these big items, but we would need to charge more money. We charge moderate prices and believe in cleaning only the areas that need to be cleaned. If you need to have large items moved, you will need to discuss this with us when you call us.",
          },
          {
            questionName:
              "Why should I hire a professional instead of doing it myself?",
            acceptedAnswerText:
              "We clean area rugs of all kinds. From synthetic rugs (nylon, polyester, olefin, triexta etc.) to Oriental rugs, Persian rugs, Navajo rugs and more.",
          },
          {
            questionName: "Do you clean area rugs?",
            acceptedAnswerText:
              "During the hot water extraction method, professionals usually apply a cleaning solution first to loosen and break up soil. Then they spray hot water onto the carpet fibers and extract it immediately to flush the fibers clean and remove soil and stains. Although there are steam cleaners and extractors available for rental or purchase, doing the job yourself might not be the best idea as these types of cleaners can soak the carpet, leave detergent residue and lead to mold without proper ventilation for drying. Professional cleaners follow a process that prevents leaving detergent residue behind as that reside can attract dirt and lead to dirty carpets faster. Professional carpet cleaners remove as much of the water as possible and ensure that the carpets dry quickly.",
          },

          {
            questionName: "Should I vacuum before my scheduled service?",
            acceptedAnswerText:
              "No need to vacuum since we’ll do that for you. We include pre-vacuuming with a commercial vacuum cleaner as part of our standard service since it’s important to remove loose soils, pet hair or other things from the carpet before we begin the hot water extraction (steam cleaning) phase of the cleaning",
          },
          {
            questionName:
              "How do you treat natural fiber carpets, rugs & upholstery?",
            acceptedAnswerText:
              "Wool and cotton are treated much differently than synthetic fibers. We use neutral cleaning solutions. We have to be careful not to cause a condition called cellulose browning. This is caused by cleaning a natural fiber with a solution with too high a pH level or if the fibers remain wet for too long. After we clean with neutral cleaners, we dry the fibers as quickly as we can.",
          },
        ]}
      />
      <article className="relative flex flex-col mx-auto px-6 lg:px-0 prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/carpets/baby-hands-on-carpet.jpg" alt="" />
        </div>
        {/* WHY ARE YOU TALKING TO ME [EDUCATING THEM ABOUT THE PROBLEM ] */}
        <h1 className="content-title">Carpet Cleaning</h1>
        <hr className="max-w-4xl text-center bg-black dark:bg-white border-black dark:border-white my-0" />

        {/* HOW DO YOU DO THE THINGS */}
        {/* PROVE IT */}

        {/* WHAT WILL WE GIVE ME */}
        <p className="">
          Although regular vacuuming can remove dry soil and debris from your
          carpeting, it leaves behind oily soils and particles that are produced
          from cooking vapors, pets, and dirt tracked in from outside the home.
          These oily contaminants that are left behind can cause your carpet to
          dull and fade. As the contaminants build up they become more difficult
          to remove. Regular deep cleaning of the carpet can prevent the
          excessive build up of contaminants and keep your carpets looking fresh
          and clean. Regular cleaning of your carpets also helps improve the air
          quality in your home by removing pet hair, dust mites, and other
          allergens that thrive deep in the carpet.
        </p>
        <h2 className="content-title">Carpet Cleaning Process</h2>
        <hr className="max-w-4xl text-center bg-black dark:bg-white border-black dark:border-white" />

        <p>
          We will evaluate your carpet’s needs. Every carpet must be treated
          differently. We will decide what will be the best method for cleaning
          your carpet. You will know up front what we can and can’t do. This way
          there are no surprises.
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
            most important steps in cleaning. <strong>Moving Furniture:</strong>{" "}
            When necessary we will move and replace small furniture in its
            original position.
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
            specialty spotting solutions. For longer carpet life and fewer
            permanent stain, be sure to have professional carpet protector
            applied to your carpet.
          </li>
          <li>
            <strong className="content-title">POST GROOM</strong> Some fibers
            require post cleaning groom to assure there is no fiber distortion.
            It also helps the fiber dry faster. When <strong>necessary</strong>{" "}
            we will place blocks or foil under furniture legs to protect them
            during the drying process and groom the carpet for a clean inviting
            look.
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
          <strong className="content-title">
            What you should do after the carpet cleaning:
          </strong>{" "}
          To decrease drying time try to keep the room temperature about 72
          degrees and use fans to circulate the air around the cleaned carpet.
        </p>

        <h2 className="content-title">
          WHAT CAN YOU DO TO PREPARE FOR YOUR CARPET CLEANING:
        </h2>
        <p>
          Move small items and breakables from the area to be cleaned. Get ready
          to be amazed by the Rotovac.
        </p>
        <section className="text-blue-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-blue mb-4">
                Frequently Asked Questions
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
                    How Long does it take to clean my carpets?
                  </summary>

                  <span className="theme-text">Generally 1-2 hours</span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How long does it take for my carpets to dry?
                  </summary>

                  <span className="theme-text">
                    4-6 hours depending on the carpet
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Will carpet cleaning get rid of fleas in my carpet?{" "}
                  </summary>

                  <span className="theme-text">
                    We cannot guarantee that the cleaning will get rid of all
                    the fleas. We usually recommend that the customer kill the
                    adult fleas first by whichever method they prefer, this is
                    something that a professional exterminator might be able to
                    help with. Please keep in mind that the carpet is not the
                    only place fleas will lay eggs, you might consider having
                    your upholstery treated and cleaned as well as any area rugs
                    or pet beds.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Do you move furniture?
                  </summary>

                  <span className="theme-text px-4 py-2">
                    We move big couches, chairs and dining room tables from side
                    to side. We do not move beds, dressers, china cabinets,
                    entertainment centers, or these types of items. We ask you
                    get all smaller items off of areas to be cleaned. We could
                    move some of these big items, but we would need to charge
                    more money. We charge moderate prices and believe in
                    cleaning only the areas that need to be cleaned. If you need
                    to have large items moved, you will need to discuss this
                    with us when you call us.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
        <footer>
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
        </footer>
      </article>
    </>
  );
}
