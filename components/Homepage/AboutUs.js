/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section>
        <div className="flex justify-center align-center">
          <Image
            src="/images/iicrc-certification.png"
            width={782}
            height={291}
            alt="Our certificate of certification"
          />
        </div>
        <p className="uppercase text-2xl text-gray-800 font-bold leading-none mb-3 text-center">
          Certified, Licensed, & Insured
        </p>
      </section>
      {/* <!-- About Us Section --> */}
      <section className="mb-10">
        <div className="container mx-auto">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            West Texas Relies on Jake&apos;s
          </h1>
          <p className="text-gray-900 text-center mb-8">
            FAMILY + LOCALLY OWNED | QUOTE? CALL JAKE'S TODAY!
          </p>
          <p className="leading-relaxed text-xl text-gray-900 px-8 py-8">
            Jake and his team are 100% committed to making sure that your home
            is as healthy and clean as possible. Your home or office is where
            you live and work, where your kids play, where your pets nap, which
            is why we take every single client interaction as if it is the
            single most important job we have ever done. Questions? Quote? Call
            Jake&apos;s Steamer The Carpet Cleaner today!
          </p>
        </div>
      </section>
    </>
  );
}
