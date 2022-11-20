import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import {routepath} from '../../Router/RouteList'

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
  
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Heading</p>
        <SubMenu title="Home" icon={faHome} items={routepath[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            <span className="link_title">About</span>
          </NavLink>
        </NavItem>
        <SubMenu title="Pages" icon={faCopy} items={routepath[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/portfolio"}>
            <FontAwesomeIcon icon={faImage} className="mr-5" />
            <span className="link_title">Portfolio</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/skill"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-5" />
           <span className="link_title">Skill</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/service"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-5" />
            <span className="link_title">Service</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-5" />
            <span className="link_title">Contact</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

// const submenus = [
//   [
//     {
//       title: "Content 1",
//       target: "Content-1",
//     },
//     {
//       title: "Content 2",
//       target: "Content-2",
//     },
//     {
//       itle: "Content 3",
//       target: "Content-3",
//     },
//     {
//       itle: "Content 4",
//       target: "Content-4",
//     },
//   ],
//   [
//     {
//       title: "Page 1",
//       target: "Page-1",
//     },
//     {
//       title: "Page 2",
//       target: "Page-2",
//     },
//   ],
// ];

export default SideBar;
