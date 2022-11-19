import React from 'react';
import { Nav, NavItem, } from 'reactstrap';
import { NavLink } from "react-router-dom";

function Sidebar() {
  <nav class="navbar" id="nav_bar">
  <div class="navbar-header">
      <span id="nav-close">
          <i class="fas fa-times"></i>
      </span>
  </div>
  <ul class="nav-item">
      <li><a href="./index.html" class="navlink">home</a></li>
      <li><a href="./about.html" class="navlink">about</a></li>
      <li><a href="./skill.html" class="navlink">skills</a></li>
      <li><a href="./product.html" class="navlink">product</a></li>
  </ul>

</nav>
  return (
    <div>
      <Nav vertical >
        <NavItem class="nav-item">
          <NavLink to="#"  class="navlink">
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#"  class="navlink">
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#"  class="navlink">
            Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            disabled
            to="#"
          >
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Sidebar