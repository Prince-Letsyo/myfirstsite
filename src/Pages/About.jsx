/* jshint esversion : 9 */
import React from "react";
import Navbar from "../Components/Navbar";
import Contentplate from "../Components/Contentplate";
import { WorksConsumer } from "../Components/Context";

export default function About() {
  return (
    <WorksConsumer>
      {value => {
        const { about } = value;
        return (
          <div className="firstBg">
            <Navbar />
            <Contentplate>
              <article className="abcon">{about}</article>
            </Contentplate>
          </div>
        );
      }}
    </WorksConsumer>
  );
}
