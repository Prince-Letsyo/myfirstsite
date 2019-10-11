/* jshint esversion : 9*/
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function LayoutP({ work }) {
  const { artName, size, images } = work;

  return (
    <div className="imge">
      <Link to={`/myportfolio/brand-identity/${artName}`}>
        <img src={images[0]} alt="" className="imgs" />
      </Link>
      <h4>{artName}</h4>
      <p>{size}</p>
    </div>
  );
}

LayoutP.prototype = {
  work: PropTypes.shape({
    artName: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
