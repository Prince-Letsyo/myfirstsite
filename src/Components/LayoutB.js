/* jshint esversion : 9*/
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function LayoutB({ work }) {
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

LayoutB.prototype = {
  work: PropTypes.shape({
    artName: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
