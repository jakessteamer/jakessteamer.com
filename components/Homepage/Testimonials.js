export default function Testimonials() {
  return (
    <div
      id="testimonials-section"
      className="flex flex-col md:flex-row shadow-sm overflow-hidden w-full leading-relaxed text-xl theme-surface-inverse ">
      {/* <!-- What are customers are saying --> */}
      <div className="relative w-full py-2 md:py-24 md:w-1/2 flex flex-col item-center justify-center">
        <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24" />

        <div className="relative py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto mb-0 z-20 font-bold title-font text-blue-500">
          <span className="block sm:text-2xl md:text-3xl lg:text-5xl ">
            What Our
          </span>
          <span className="block sm:text-2xl md:text-3xl lg:text-5xl ">
            Customers
          </span>
          <span className="block sm:text-2xl md:text-3xl lg:text-5xl ">
            Are Saying!
          </span>
        </div>
      </div>
      {/* <!-- Testimonials --> */}
      <div className="bg-white-accent md:w-1/2">
        <div className="flex flex-col h-full relative leading-relaxed text-xl text-blue-900">
          {/* <!-- Testimonial 1 --> */}

          <div className="w-full px-8 py-4 mt-6 md:mt-0">
            <div className="testimonial p-6 border-blue-500 border-2 border-solid flex">
              <div>
                <p className="text-blue-900">
                  &quot;Very good customer service. Very thorough made sure all
                  air vents were cleaned. Whatever mess was made from air vents
                  was cleaned up. Very professional and knowledgeable in all
                  areas. Will recommend to anyone I know. My a/c is running
                  better then before.&quot;
                </p>
                <div className="text-blue-900 font-bold uppercase mt-6">
                  - Juanita D
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Testimonial 2 --> */}
          <div className="w-full px-8 py-4 mt-6 md:mt-0">
            <div className="testimonial p-6 border-blue-500 border-2 border-solid flex">
              <div>
                <p className="text-blue-900">
                  &quot;I will be using Jake’s Steamer again! He was prompt, on
                  time arrival and did a great job. Hard to find people here
                  that really care about doing a quality job for a fair
                  rate.&quot;
                </p>
                <div className="text-blue-900 font-bold uppercase mt-6">
                  - Sallie K.
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Testimonial 3 --> */}
          <div className="w-full px-8 py-4 mt-6 md:mt-0">
            <div className="testimonial p-6 border-blue-500 border-2 border-solid flex">
              <div>
                <p className="text-gray-800">
                  &quot;If you need a carpet clean in the middle of the night,
                  this gentleman is the guy to call. He provides awesome
                  customer service and my carpets smell so much better. He
                  didn’t mind explaining the process and giving us pointers. We
                  will definitely use him in the future.&quot;
                </p>
                <div className="text-gray-900 font-bold uppercase mt-6">
                  - Reyna S.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
