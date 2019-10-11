/* jshint esversion: 9 */
import React from "react";
import Navbar from "../Components/Navbar";
import Contentplate from "../Components/Contentplate";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const size = {
    width: 40,
    height: 40
  };
  return (
    <div className="firstBg">
      <Navbar />
      <Contentplate>
        <div>
          <h2 style={{ textTransform: "capitalize", textAlign: "center" }}>
            my social media handles
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "25rem",
              height: "15rem"
            }}
          >
            <FaFacebook style={size} />
            <FaInstagram style={size} />
            <FaLinkedin style={size} />
            <FaTwitter style={size} />
          </div>
          <div>
            <h4 style={{ textAlign: "center" }}>pletsyo563@gmail.com</h4>
          </div>
        </div>
      </Contentplate>
    </div>
  );
}
