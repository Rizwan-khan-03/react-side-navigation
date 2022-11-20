import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Topbar from "../Component/content/Topbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Pages from "../pages/Pages";
import Skill from "../pages/Skill";
import Service from "../pages/Service";
import Portfolio from "../pages/Portfolio";
import Content1 from "../pages/Content1";
import Content2 from "../pages/Content2";
import Content3 from "../pages/Content3";
import Content4 from "../pages/Content4";
import Pages1 from "../pages/Pages1";
import Pages2 from "../pages/Pages2";
import Pages3 from "../pages/Pages3";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route exact path="/about"  element={<About />}  />
      <Route exact path="/pages" element={<Pages />}  />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/skill" element={<Skill />} />
      <Route exact path="/service" element={<Service />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/content1"  element={<Content1 />}  />
      <Route exact path="/content2"  element={<Content2 />}  />
      <Route exact path="/content3"  element={<Content3 />}  />
      <Route exact path="/content4"  element={<Content4 />}  />
      <Route exact path="/pages1"  element={<Pages1 />}  />
      <Route exact path="/pages2"  element={<Pages2 />}  />
      <Route exact path="/pages3"  element={<Pages3 />}  />
    </Routes>
  </Container>
);

export default Content;
