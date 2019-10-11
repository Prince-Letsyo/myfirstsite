/* jshint esversion : 9 */
import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Contentplate from "../Components/Contentplate";
import Form from "../Components/Form";

export default class ContactDetails extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="firstBg">
        <Navbar />
        <Contentplate>
          <Form data={this.state} handleChange={this.handleChange} />
        </Contentplate>
      </div>
    );
  }
}
