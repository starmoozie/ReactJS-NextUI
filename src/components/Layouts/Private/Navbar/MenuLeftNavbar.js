import { Navbar, Text } from "@nextui-org/react";
import { Logo } from "../../../inc/Logo";

export const MenuLeftNavbar = () => {
  return (
    <>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand>
        <Logo />
        <Text b color="inherit" hideIn="xs">
          REACT JS
        </Text>
      </Navbar.Brand>
    </>
  );
};

export default MenuLeftNavbar;
