/* jshint esversion :9 */
import React from "react";
import Button from "./StyledButton";

export default function Form(props) {
  return (
    <div className="form">
      <form>
        <label className="first">E-mail:</label>
        <input
          type="email"
          name="email"
          value={props.data.email}
          placeholder="example@mail.com"
          required="required"
          onChange={props.handleChange}
        />
        <br />
        <label className="second">Project Description:</label>
        <textarea
          placeholder="Your comment"
          name="comment"
          // required="required"
          onChange={props.handleChange}
          value={props.data.comments}
        />
        <Button className="btn">submit</Button>
      </form>
    </div>
  );
}
