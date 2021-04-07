import React, { useEffect } from 'react';
import Image from 'next/image';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import SvgWaveDivider from './SVGWaveDivider';

export default function ImageGallery() {
  useEffect(() => {
    configureAnchors({ offset: -134 });
  });
  return (
    <ScrollableAnchor key="img-gallery-section" id="img-gallery-section">
      <section id="image-gallery-section">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Image Gallery
        </h1>
        <div className="app">
          <div className="hs">
            <Image
              className="item shadow-lg rounded-lg"
              src="/images/carpets/clean-carpet-before-after.jpg"
              width={206}
              height={206}
              alt="Side by side comparison of a dirty carpet and a carpet cleaned by Jake's Steamer. See the difference!"
            />

            <Image
              className="item shadow-lg rounded-lg "
              src="/images/carpets/carpet-deep-clean.jpg"
              width={206}
              height={206}
              alt="A client's carpet with traffic shots"
            />

            <Image
              className="item shadow-lg rounded-lg"
              src="/images/carpets/carpet-8-after-640x640-md.jpg"
              width={206}
              height={206}
              alt="We cleaned the traffic spots and deep stains! It's not magic. It's experience."
            />
            <Image
              className="item shadow-lg rounded-lg"
              src="/images/carpets/carpet-comparison-2.jpg"
              width={206}
              height={206}
              alt="We took a photo in the process of steam cleaning a carpet. You can definitely see the difference. One side is dark with stains another side is clean white."
            />
            <Image
              className="item shadow-lg rounded-lg"
              src="/images/carpets/carpet-comparison-3.jpg"
              width={720}
              height={960}
              alt="Side by side comparison of a carpet that had a plate sized chocolate stain. After we finished steaming and santizing the area you who have never taught a stain existed."
            />
          </div>
        </div>
      </section>
      {/* <SvgWaveDivider /> */}
    </ScrollableAnchor>
  );
}
