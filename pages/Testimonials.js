/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
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
        title="Testimonials"
        description={`${siteMetadata.description}`}
        url={`${siteMetadata.siteUrl}/Testimonials`}
      />
      <article className="relative max-w-3xl mx-auto px-6 prose lg:prose-lg theme-text">
        <div className="aspect-w-16 aspect-h-9 my-12">
          <img src="/images/carpets/area-rug-1.jpg" alt="" />
        </div>
        <div className="bg-white w-full max-w-md mx-4 my-12 rounded-xl p-8 pt-10 shadow-sm ">
          <div className="flex items-center mt-4 gap-x-2">
            <div className="">
              <img
                src="https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
                alt=""
                className="w-12 h-12 border-2 border-white rounded-full ring ring-green-400"
              />
            </div>
            <span className="text-sm font-medium text-black">Jordi Moyer</span>
            {/* <button type="button" className="focus:outline-none">
              <i className="text-green-400 fas fa-bookmark" />
            </button> */}
          </div>

          <div className="mt-3">
            <span className="text-2xl font-bold">
              Delicious evening meal with friends.
            </span>
          </div>

          <div className="flex items-center mt-5 space-x-3">
            <div className="flex text-xs text-yellow-400">
              {/* star */} <FaStar />
              {/* star */} <FaStar />
              {/* star */} <FaStar />
              {/* star */} <FaStar />
              {/* star */} <FaStar />
            </div>
            <span className="text-sm text-gray-500">Very good</span>
          </div>

          <p className="mt-5 text-sm leading-relaxed">
            Very good customer service. Very thorough made sure all air vents
            were cleaned. Whatever mess was made from air vents was cleaned up.
            Very professional and knowledgeable in all areas. Will recommend to
            anyone I know. My a/c is running better then before.
          </p>

          <hr className="border-0 border-b my-6" />

          <div className="flex text-xs text-gray-500 justify-between">
            <div className="flex space-x-5">
              <button
                type="button"
                className="flex space-x-2 items-center focus:outline-none">
                <i className="text-gray-400 fas fa-heart" />
                <span className="font-medium">24</span>
              </button>

              <button
                type="button"
                className="flex space-x-2 items-center focus:outline-none">
                <i className="text-gray-400 far fa-comment-dots" />
                <span className="font-medium">2</span>
              </button>
            </div>

            <div className="flex space-x-2 items-center">
              <i className="text-gray-400 far fa-calendar" />
              <span>June 6, 2021</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
