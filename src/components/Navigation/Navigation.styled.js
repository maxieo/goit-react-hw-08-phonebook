import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  justify-content: space-between;
  color: gray;
  padding: 10px;
  &:active {
    color: red;
  }
`