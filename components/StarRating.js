import React from "react";
import FaStar from "react-icons";

export default function StarRating({ stars }) {
  const numberOfStars = [];
  for (let i = 1; i <= stars; i + 1) {
    numberOfStars.push(<FaStar />);
  }
  return <div className="flex">{numberOfStars}</div>;
}
