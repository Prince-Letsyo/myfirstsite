/* jshint esversion:9 */

import React from "react";
import Dispaly from "./Dispaly";

export default function ArtDisplay({ art }) {
  return (
    <div className="art-display">
      <Dispaly image={art} />
    </div>
  );
}
