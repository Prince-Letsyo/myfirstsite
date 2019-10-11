/* jshint esversion:9 */
import React, { Component } from "react";

import Navbar from "../Components/Navbar";
import Contentplate from "../Components/Contentplate";
import Layout from "../Components/Layout";
import { WorksContext } from "../Components/Context";
import Foliolayout from "../Components/Foliolayout";

export default class Web extends Component {
  static contextType = WorksContext;
  render() {
    let { webWork: web } = this.context;
    return (
      <div className="firstBg">
        <Navbar />
        <Contentplate>
          <Foliolayout>
            {web.map(webs => (
              <Layout key={webs.id} work={webs} />
            ))}
          </Foliolayout>
        </Contentplate>
      </div>
    );
  }
}
