import React from "react";

export default function ImageGallery() {
    return (
        <section id="image-gallery-section" className="container flex flex-col bg-white m-auto p-auto">
            <p className="sm:text-3xl text-3xl font-bold title-font mb-2 px-3 text-gray-900">Image Gallery</p>
            <div className="h-1 w-3/4 md:w-1/4 bg-brand-blue rounded h-underline mb-4 ml-3" />
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
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
                            <img className="gallery-img" src="images/carpets/clean-carpet-before-after.jpg" alt="" />
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
                            <img className="gallery-img" src="images/carpets/carpet-deep-clean.jpg" alt="" />
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
                            <img className="gallery-img" src="images/carpets/carpet-8-after-640x640-md.jpg" alt="" />
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
                            <img className="gallery-img" src="images/carpets/carpet-comparison-2.jpg" alt="" />
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
                            <img className="gallery-img" src="images/carpets/carpet-comparison-3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
