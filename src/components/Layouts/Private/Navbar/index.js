import { Navbar as Nav } from "@nextui-org/react";
import MenuLeftNavbar from "./MenuLeftNavbar";
import MenuNavbar from "./MenuNavbar.js";
import MenuRightNavbar from "./MenuRightNavbar.js";
import MenuCollapseNavbar from "./MenuCollapseNavbar.js";
import { menu } from "../../../../../_constants/menuData";
import { listToTree } from "../../../../../_utils/listToTree";
import { useMemo } from "react";

export const Navbar = () => {
  const menuItems = useMemo(() => listToTree(menu), []);

  return (
    <Nav variant="sticky" maxWidth="fluid">
      <MenuLeftNavbar />
      <MenuNavbar menu={menuItems} />
      <MenuRightNavbar />
      <MenuCollapseNavbar menu={menuItems} />
    </Nav>
  );
};

export default Navbar;
