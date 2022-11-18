import React from "react";

import "./Navbar.css";




// import { clearStorage } from "../../../App/Services/Service";


import "bootstrap/dist/js/bootstrap.bundle.min";
// import { useNavigate } from "react-router-dom";

export default function Navs() {
  // const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userLogout = () => {
    // clearStorage();
    window.location.href = window.location.origin;
  };


  return (
    <div>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            {" "}
            <img style={{ width: "12rem" }} alt="" />
          </span>

          <div className="topSearch">
            <input
              className="inputSearch"
              type="search"
              id="site-search"
              name="q"
            ></input>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="topRight">
      </div>
    </div>
    </div>
  );
}
