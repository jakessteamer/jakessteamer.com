import React from "react";

export default function Image(props) {
  const { src, alt } = props;
  return (
    <div className="responsive-image__container aspect-w-1 aspect-h-1 w-full">
      <img
        src="/images/carpets/carpet-5-640x640-md.jpg"
        alt="Carpet Cleaning"
        className="responsive-image rounded-lg"
      />
    </div>
  );
}
