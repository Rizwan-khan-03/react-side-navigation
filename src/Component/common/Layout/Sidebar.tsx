import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
// import { GoHome, GoGitBranch } from "react-icons/go";
// import { RiRoadsterLine } from "react-icons/ri";
// import { VscAccount } from "react-icons/vsc";
// import { TbReport } from "react-icons/tb";
// import { AiOutlineSetting, AiOutlineClose } from "react-icons/ai";
// import { GrUserAdmin } from "react-icons/gr";

// import { AppBar, Button } from "@mui/material";

// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { useAppDispatch } from "../../../App/Redux/hooks";
// import { Dispatch } from "redux";

const Sidebar = (onMonb: any) => {
  let activeStyle = {
    backgroundColor: "#408DFB",
    color: " rgb(246, 247, 250)",
  };

  let activeClassName = "underline";

  const [sidebarOpen, setSideBarOpen] = useState<any>(false);
  const [classname, setClassName] = useState<any>(true);
  const [menulist, setMenuList] = useState([]);
  console.log(menulist);
  // const dispatch: Dispatch<any> = useAppDispatch();

  const handleViewSidebar = () => {
    setSideBarOpen(true);
    setClassName(false);
    console.log(sidebarOpen);
  };

  const handlecloseSidebar = () => {
    setSideBarOpen(false);
  };

  const HandleOpenClose = () => {
    setSideBarOpen(!sidebarOpen);
  };

  // async function getAllowSideBarMenu() {
  //   const res: any = await dispatch(
  //     getallowedmenus({
  //       company_id: getCompanyId(),
  //     })
  //   );

  //   setMenuList(res.payload);
  // }

  // useEffect(() => {
  //   getAllowSideBarMenu();
  // }, []);

  // const sidebarClass = sidebarOpen ? "sidebar1" : "sidebar";
  // console.log(sidebarClass);

  return (
  <div>
      <div className={sidebarOpen ? "nav-menu" : "sidebar"}>
      
        <div className="secondDash">
          <div className="sidebar2">
            <div className="sMenu_adds">
              <h3>Setting</h3>
            </div>

            <NavLink to="/setting/user">
              <div className="sMenu_adds">
                <p>Users</p>
              </div>
            </NavLink>

            <NavLink to="/setting/role">
              <div className="sMenu_adds">
                <p>Roles</p>
              </div>
            </NavLink>
            <NavLink to="setting/branch">
              <div className="sMenu_adds">
                <p>Branches</p>
              </div>
            </NavLink>
            <NavLink to="/setting/ConsigneeGroup">
              <div className="sMenu_adds">
                <p>Consignee Group</p>
              </div>
            </NavLink>
            <NavLink to="/setting/VehicleType">
              <div className="sMenu_adds">
                <p>Vehicle Type </p>
              </div>
            </NavLink>
            <NavLink to="setting/branch">
              <div className="sMenu_adds">
                <p>Vehicle Group</p>
              </div>
            </NavLink>
            <NavLink to="setting/Zone">
              <div className="sMenu_adds">
                <p>Zone</p>
              </div>
            </NavLink>
            <NavLink to="setting/branch">
              <div className="sMenu_adds">
                <p>Company</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
