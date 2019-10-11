/* jshint esversion: 9 */
import React, { Component } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WorksContext } from "./Context";
import Prince from "../img/prince.jpg";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  static contextType = WorksContext;

  render() {
    const { name } = this.context;
    return (
      <div className="N-container">
        <div className="navbar-container">
          <div className="navbar">
            <div className="image-container">
              <img src={Prince} alt="" style={{ borderRadius: "5rem" }} />
            </div>
            <h1> {name}</h1>
            <FaAlignJustify className="btns" onClick={this.handleChange} />
          </div>
        </div>
        <div className={this.state.isOpen ? "navlist shownavlist " : "navlist"}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/myportfolio/">My Portfolio</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
