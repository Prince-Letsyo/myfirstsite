/* jshint esversion : 9 */

import React from "react";

export default function Dispaly({ image }) {
  const { images } = image;

  return (
    <div className="display">
      {images.map((item, index) => (
        <img key={index} src={item} alt="" />
      ))}
    </div>
  );
}
