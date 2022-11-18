import React from "react";
import { TbLayout2 } from "react-icons/tb";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/Notfound/NotFound";
import ProtectRoutes from "../../Router/ProtectRoutes";
import { routepath } from "../../Router/RouteList";

import Navs from "./Layout/Navs";

import Sidebar from "./Layout/Sidebar";

const Layout: React.FC = () => {
  // console.log("in layout");

  return (
    <div>
      <Navs />
      <Sidebar />
      {/* <MiniDrawer /> */}
      <Routes>
        {routepath.map((i: any, index: any) => {
          if (i.private === 1) {
            return (
              <Route
                key={`routes_${index}`}
                path={i.path}
                element={<ProtectRoutes>{<i.Element />}</ProtectRoutes>}
              />
            );
          } else {
            return (
              <Route key={`routes_${index}`} path="*" element={<NotFound />} />
            );
          }
        })}
      </Routes>
    </div>
  );
};

export default Layout;
