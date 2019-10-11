/* jshint esversion :9 */

import React from "react";
import { Link } from "react-router-dom";
import Button from "./StyledButton";

export default function ArtDescription({ artInfo }) {
  const { artName, description } = artInfo;
  return (
    <div className="art-description">
      <article className="description ">
        <h4>{artName}</h4>
        <p>{description}</p>
      </article>
      <div className="desc-button">
        <Link to="/details/">
          <Button>get in touch</Button>
        </Link>
      </div>
    </div>
  );
}
