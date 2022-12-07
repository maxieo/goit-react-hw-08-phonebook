import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: gray;
  padding: 10px;
  &:active {
    color: red;
  }
`