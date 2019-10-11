/* jshint esversion : 9 */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Contentplate from "../Components/Contentplate";
import { WorksContext } from "../Components/Context";
import SingleArtwork from "../Components/SingleArtwork";

export default class Artwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artName: this.props.match.params.artName
    };
  }

  static contextType = WorksContext;

  render() {
    const { getWork } = this.context;
    const work = getWork(this.state.artName);
    

    if (!work) {
      return (
        <div className="firstbg">
          <Navbar />
          <Contentplate>
            <Link to="/myportfolio/">back to rooms</Link>
          </Contentplate>
        </div>
      );
    }


    return (
      <div className="firstBg">
        <Navbar />
        <Contentplate>
          <SingleArtwork arts={ work }/>
        </Contentplate>
      </div>
    );
  }
}
