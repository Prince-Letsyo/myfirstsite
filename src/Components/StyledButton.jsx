/* jshint esversion: 9 */
import styled from "styled-components";

const Button = styled.button`
  background: #005d57;
  border-radius: 5em;
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  outline: none;
  color: #f9c37a;
  width: 12em;
  height: 1.5em;
  padding: 0;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 1px 3px 2px 0px rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
