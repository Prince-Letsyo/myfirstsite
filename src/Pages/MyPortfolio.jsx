/* jshint esversion: 9 */
import React from "react";
import Navbar from "../Components/Navbar";
import Contentplate from "../Components/Contentplate";
import Folios from "../Components/Folios";

export default function MyPortfolio() {
  return (
    <div className="firstBg">
      <Navbar />
      <Contentplate>
        <Folios />
      </Contentplate>
    </div>
  );
}
