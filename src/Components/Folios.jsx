/* jshint esversion : 9 */
import React from "react";
import { Link } from "react-router-dom";

import Brand from "../img/Group 7.svg";
import Web from "../img/wm.svg";
import Photo from "../img/pr.svg";

export default function Folios() {
  return (
    <div className="Folios">
      <ul>
        <li>
          <Link to="/myportfolio/brand-identity/">
            <img src={Brand} alt="brand" className="brand" />
          </Link>
        </li>
        <li>
          <Link to="/myportfolio/web-development/">
            <img src={Web} alt="web" />
          </Link>
        </li>
        <li>
          <Link to="/myportfolio/photo-retouch/">
            <img src={Photo} alt="pt" className="Photo" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
