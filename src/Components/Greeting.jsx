/* jshint esversion :9 */
import React from "react";
import { Link } from "react-router-dom";
import Button from "./StyledButton";

export default function Greeting({ title, motto }) {
  return (
    <div className="greeting">
      <h1>{title}</h1>
      <p>{motto}</p>
      <Link to="/details/">
        <Button>get in touch</Button>
      </Link>
    </div>
  );
}
