import React, { useEffect } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

export default function Testimonials() {
  useEffect(() => {
    configureAnchors({ offset: -134 });
  });
  return (
    <ScrollableAnchor key="testimonial-section" id="testimonial-section">
      <div
        id="testimonials-section"
        className="flex flex-col md:flex-row shadow-sm overflow-hidden w-full"
      >
        {/* <!-- What are customers are saying --> */}
        <div className="relative w-full py-2 md:py-24 bg-brand-blue md:w-1/2 flex flex-col item-center justify-center">
          <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24" />

          <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto font-semibold leading-tight tracking-tight mb-0 z-20">
            <span className="md:block">What Our</span>
            <span className="md-block">Customers</span>
            <span className="block">Are Saying!</span>
          </div>
        </div>
        {/* <!-- Testimonials --> */}
        <div className="bg-white md:w-1/2">
          <div className="flex flex-col h-full relative">
            {/* <!-- Testimonial 1 --> */}

            <div className="w-full px-8 py-4 mt-6 md:mt-0">
              <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                <div>
                  <p className="text-gray-600">
                    &quot;Very good customer service. Very thorough made sure
                    all air vents were cleaned. Whatever mess was made from air
                    vents was cleaned up. Very professional and knowledgeable in
                    all areas. Will recommend to anyone I know. My a/c is
                    running better then before.&quot;
                  </p>
                  <div className="text-gray-900 font-bold uppercase mt-6">
                    - Juanita D
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Testimonial 2 --> */}
            <div className="w-full px-8 py-4 mt-6 md:mt-0">
              <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                <div>
                  <p className="text-gray-600">
                    &quot;I will be using Jake’s Steamer again! He was prompt,
                    on time arrival and did a great job. Hard to find people
                    here that really care about doing a quality job for a fair
                    rate.&quot;
                  </p>
                  <div className="text-gray-900 font-bold uppercase mt-6">
                    - Sallie K.
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Testimonial 3 --> */}
            <div className="w-full px-8 py-4 mt-6 md:mt-0">
              <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                <div>
                  <p className="text-gray-600">
                    &quot;If you need a carpet clean in the middle of the night,
                    this gentleman is the guy to call. He provides awesome
                    customer service and my carpets smell so much better. He
                    didn’t mind explaining the process and giving us pointers.
                    We will definitely use him in the future.&quot;
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
    </ScrollableAnchor>
  );
}
