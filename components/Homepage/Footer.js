/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "../Image";

export default function Footer() {
  return (
    <footer className="theme-surface">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex">
          <div className="">
            <div className="px-6">
              <div>
                <a href="/" className="">
                  <Image
                    src="/images/logos/jakes-steamer-carpet-cleaning-company-footer-logo-cropped.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="flex  -mx-2">
                <a
                  href="https://www.facebook.com/jakessteamer01/"
                  className="mx-2 text-blue-900 dark:text-white-accent hover:text-blue-900 dark:hover:text-blue-500"
                  aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
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

          <div className="mt-6 flex-grow">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-grow">
                <p className="text-gray-700 uppercase md:text-lg dark:text-white-accent">
                  Contact
                </p>
                <div className="h-1 w-1/2 bg-blue-500 rounded h-underline mb-4" />
                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  606 SE 4th St, Seminole, TX 79360
                </p>
                <a
                  href="tel:+14328474600"
                  className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  432-847-4600
                </a>
                <a
                  href="mailto:jakessteamer@gmail.com"
                  className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  jakessteamer@gmail.com
                </a>
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 uppercase md:text-lg dark:text-white-accent">
                  Service Areas:
                </p>
                <div className="h-1 w-1/2 bg-blue-500 rounded h-underline mb-4" />

                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  Gaines County
                </p>
                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  Andrews County
                </p>
                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  Midland County
                </p>
                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  Yoakum County
                </p>
                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  Dawson County
                </p>
                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  Terry County
                </p>
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 uppercase md:text-lg dark:text-white-accent">
                  Hours:
                </p>
                <div className="h-1 w-1/2 bg-blue-500 rounded h-underline mb-4" />

                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  Sunday: Closed
                </p>
                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  Monday - Friday: 8:00AM-6:00PM
                </p>
                <p className="block mt-2 text-sm md:text-lg text-blue-900 dark:text-blue-500 hover:underline">
                  Saturday: Saturday 8:00AM-12:00AM
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white-accent">
            © Jake's Steamer 2021 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
