export default function ImageGallery() {
  return (
    <div id="image-gallery-section" className="theme-surface-inverse pt-24">
      <div className="flex flex-col items-center">
        <p className="title-font sm:text-4xl text-3xl lg:text-5xl mb-4 font-bold theme-blue">
          Image Gallery
        </p>
        <div className="h-1 w-1/2 theme-surface rounded h-underline mb-8" />
      </div>
      <div
        id="image-gallery-section__container"
        className="container flex flex-col theme-surface-inverse p-auto">
        <div
          id="image-gallery__slider"
          className="flex overflow-x-scroll pb-10 hide-scroll-bar min-w-screen">
          <div className="flex flex-nowrap">
            <div className="inline-block px-3">
              <div
                className="
                  w-64
                  h-64
                  max-w-xs
                  overflow-hidden
                  rounded-lg
                  shadow-md
                  bg-white
                  hover:shadow-2xl
                  transition-shadow
                  duration-300
                  ease-in-out
                ">
                <img
                  className="gallery-img"
                  src="images/carpets/clean-carpet-before-after.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="inline-block px-3">
              <div
                className="
                  w-64
                  h-64
                  max-w-xs
                  overflow-hidden
                  rounded-lg
                  shadow-md
                  bg-white
                  hover:shadow-2xl
                  transition-shadow
                  duration-300
                  ease-in-out
                ">
                <img
                  className="gallery-img"
                  src="images/carpets/carpet-deep-clean.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="inline-block px-3">
              <div
                className="
                  w-64
                  h-64
                  max-w-xs
                  overflow-hidden
                  rounded-lg
                  shadow-md
                  bg-white
                  hover:shadow-2xl
                  transition-shadow
                  duration-300
                  ease-in-out
                ">
                <img
                  className="gallery-img"
                  src="images/carpets/carpet-8-after-640x640-md.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="inline-block px-3">
              <div
                className="
                  w-64
                  h-64
                  max-w-xs
                  overflow-hidden
                  rounded-lg
                  shadow-md
                  bg-white
                  hover:shadow-2xl
                  transition-shadow
                  duration-300
                  ease-in-out
                ">
                <img
                  className="gallery-img"
                  src="images/carpets/carpet-comparison-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="inline-block px-3">
              <div
                className="
                  w-64
                  h-64
                  max-w-xs
                  overflow-hidden
                  rounded-lg
                  shadow-md
                  bg-white
                  hover:shadow-2xl
                  transition-shadow
                  duration-300
                  ease-in-out
                ">
                <img
                  className="gallery-img"
                  src="images/carpets/carpet-comparison-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="custom-shape-divider-top-1625525754">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="theme-text">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
