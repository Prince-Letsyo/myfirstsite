/* jshint esversion :9 */
import React, { Component } from "react";

import Navbar from "../Components/Navbar";
import Contentplate from "../Components/Contentplate";
import LayoutB from "../Components/LayoutB";

import { WorksContext } from "../Components/Context";
import Foliolayout from "../Components/Foliolayout";

export default class Brand extends Component {
  static contextType = WorksContext;
  render() {
    let { brandWork: brand } = this.context;
    return (
      <div className="firstBg">
        <Navbar />
        <Contentplate>
          <Foliolayout>
            {brand.map(bran => (
              <LayoutB key={bran.id} work={bran} />
            ))}
          </Foliolayout>
        </Contentplate>
      </div>
    );
  }
}
