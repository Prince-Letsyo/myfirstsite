/* jshint esversion : 9  */

import React from "react";
import ArtDisplay from "./ArtDisplay";
import ArtDescription from "./ArtDescription";

export default function SingleArtwork({ arts }) {
  return (
    <div className="single-art">
      <ArtDisplay art={arts} />
      <ArtDescription artInfo={arts} />
    </div>
  );
}
