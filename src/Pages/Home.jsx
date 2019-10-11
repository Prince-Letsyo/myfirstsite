/* jshint esversion : 9 */
import React from "react";
import Navbar from "../Components/Navbar";
import Contentplate from "../Components/Contentplate";
import Greeting from "../Components/Greeting";

export default function Home() {
  return (
    <div className="firstBg">
      <Navbar />
      <Contentplate>
        <Greeting
          title="welcome to my world of design"
          motto="Brand Identity, Web and App development, Photo retouching."
        />
      </Contentplate>
      
    </div>
  );
}
