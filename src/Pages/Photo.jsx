/* jshint esversion : 9 */
import React, { Component } from "react";

import Navbar from "../Components/Navbar";
import Contentplate from "../Components/Contentplate";
import LayoutP from "../Components/LayoutP";
import { WorksContext } from "../Components/Context";
import Foliolayout from "../Components/Foliolayout";

export default class Photo extends Component {
  static contextType = WorksContext;
  render() {
    let { photoWork: photo } = this.context;
    return (
      <div className="firstBg">
        <Navbar />
        <Contentplate>
          <Foliolayout>
            {photo.map(photos => (
              <LayoutP key={photos.id} work={photos} />
            ))}
          </Foliolayout>
        </Contentplate>
      </div>
    );
  }
}
